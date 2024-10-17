import React, { useState, useEffect } from 'react';
import { useChatStore } from '../../model/store';
import ai from '@/shared/assets/icon/ai.svg';
import gpt from '@/shared/assets/icon/gpt.svg';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // Стили для подсветки кода
import { MessageInput } from '../messageInput';

interface CodeProps {
    node?: any;
    inline?: boolean;
    className?: string;
    children?: React.ReactNode; // Сделаем свойство опциональным
    [key: string]: any; // Для дополнительных props
}

// Компонент для поочередного вывода текста
const TypingMessage: React.FC<{ text: string; speed?: number }> = ({ text, speed = 30 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            if (index >= text.length) {
                clearInterval(intervalId);
            }
        }, speed); // Интервал можно настроить через пропсы

        return () => clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
    }, [text, speed]);

    return (
        <ReactMarkdown
            children={displayedText}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
                code({ node, inline, className, children, ...props }: CodeProps) {
                    return !inline ? (
                        <pre className={className}>
                            <code {...props}>{children}</code>
                        </pre>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        />
    );
};

// Основной компонент сообщений чата
export const ChatMessages: React.FC = () => {
    const { chats, currentChatId, loading } = useChatStore();
    const currentChat = chats.find((chat) => chat.id === currentChatId);

    return (
        <div className='bg-white w-[650px] rounded-tr-[20px] rounded-br-[20px] flex flex-col h-full'>
            <div className='flex justify-center mt-5 gap-2 text-[#001342] font-semibold text-[20px] mb-6'>
                <p>AI</p>
                <img src={ai} alt="AI" />
            </div>
            <p className='text-center text-red-600'>При закрытии чата история не сохранится!!!</p>
            <div className='flex-1 overflow-y-auto p-4'>
                {currentChat?.messages.map((msg, index) => (
                    <div key={index} className={`flex items-start mb-4 ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                        {!msg.isUser && (
                            <div className='mr-2 w-[5%]'>
                                <div className='bg-white rounded-full shadow-xl w-[30px]'>
                                    <img src={gpt} alt="AI" width={30} />
                                </div>
                            </div>
                        )}
                        <div className={`p-2 ${msg.isUser ? 'bg-gray-200 rounded-[10px]' : 'text-black'}`}>
                            {msg.isUser ? (
                                msg.text
                            ) : (
                                <TypingMessage text={msg.text} /> // Используем компонент с поочередной печатью
                            )}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className='text-gray-500 text-start'>AI генерирует ответ...</div>
                )}
            </div>
            <div className='p-4'>
                <MessageInput />
            </div>
        </div>
    );
};
