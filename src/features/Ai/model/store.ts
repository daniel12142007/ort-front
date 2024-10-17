import create from 'zustand';
import { ChatState, Message } from '../type';
import { api } from '../api';

export const useChatStore = create<ChatState>((set, get) => ({
    chats: [
        {
            id: 1,
            title: 'Чат 1',
            messages: [{ text: '', isUser: false }],
        },
    ],
    currentChatId: 1,
    input: '',
    loading: false,
    setInput: (value: string) => set({ input: value }),
    setCurrentChatId: (id: number) => set({ currentChatId: id }),
    addMessage: (chatId: number, message: Message) => {
        const { chats } = get();
        const updatedChats = chats.map((chat) =>
            chat.id === chatId ? { ...chat, messages: [...chat.messages, message] } : chat
        );
        set({ chats: updatedChats });
    },
    addChat: () => {
        const { chats } = get();
        const newChat = {
            id: chats.length + 1,
            title: `Чат ${chats.length + 1}`,
            messages: [],
        };
        set({ chats: [...chats, newChat], currentChatId: newChat.id });
    },
    sendMessageToOpenAI: async (apiKey: string, userMessage: string) => {
        const { chats, currentChatId, addMessage, setInput } = get();

        if (!userMessage.trim()) return;

        const newMessage = { text: userMessage, isUser: true };
        addMessage(currentChatId, newMessage);
        setInput('');
        set({ loading: true });

        try {
            const currentMessages = chats.find((chat) => chat.id === currentChatId)?.messages ?? [];
            const formattedMessages = currentMessages.map((msg) => ({
                role: msg.isUser ? 'user' : 'assistant',
                content: msg.text,
            }));

            const response = await api.sendMessageToOpenAI(apiKey, userMessage, formattedMessages);

            const botReply = response.data.choices[0].message.content;
            addMessage(currentChatId, { text: botReply, isUser: false });
        } catch (error) {
            console.error('Ошибка при запросе к OpenAI API:', error);
        } finally {
            set({ loading: false });
        }
    },
    clearChat: () => {
        const { currentChatId, chats } = get();
        const updatedChats = chats.map((chat) =>
            chat.id === currentChatId ? { ...chat, messages: [] } : chat
        );
        set({ chats: updatedChats });
    },
}));
