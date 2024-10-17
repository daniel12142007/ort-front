export interface Message {
    text: string;
    isUser: boolean;
}

export interface Chat {
    id: number;
    title: string;
    messages: Message[];
}

export interface ChatState {
    chats: Chat[];
    currentChatId: number;
    input: string;
    setInput: (value: string) => void;
    setCurrentChatId: (id: number) => void;
    addMessage: (chatId: number, message: Message) => void;
    addChat: () => void;
    sendMessageToOpenAI: (apiKey: string, userMessage: string) => Promise<void>;
    loading: boolean
    clearChat: () => void;
}