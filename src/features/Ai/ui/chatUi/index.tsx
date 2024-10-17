import { useEffect } from "react";
import { useChatStore } from '../../model/store';
import { ChatList } from "../chatList";
import { ChatMessages } from "../chatMessages";
import CloseIcon from '@mui/icons-material/Close';

interface ChatUIProps {
    aiHelpData: {
        question: string;
    } | null;
    handleClose: () => void;
}

export const ChatUI = ({ aiHelpData, handleClose }: ChatUIProps) => {
    const { sendMessageToOpenAI, clearChat } = useChatStore();
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    useEffect(() => {
        if (aiHelpData) {
            const { question } = aiHelpData;
            const message = `Вопрос: ${question}`;

            sendMessageToOpenAI(apiKey, message);
        }

        return () => {
            clearChat();
        };
    }, [aiHelpData, sendMessageToOpenAI, apiKey, clearChat]);


    return (
        <div className="flex pl-16 max-h-[520px] h-[520px] relative">
            <div className="absolute top-[20px] right-[20px] cursor-pointer" onClick={handleClose}>
                <CloseIcon />
            </div>
            <ChatList />
            <ChatMessages />
        </div>
    );
};


