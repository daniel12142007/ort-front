import file from '@/shared/assets/icon/file.svg';
import shape from '@/shared/assets/icon/shape.svg';
import React from 'react';
import { useChatStore } from '../../model/store';

export const MessageInput: React.FC = () => {
    const { input, setInput, sendMessageToOpenAI } = useChatStore();
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const handleSend = () => {
        sendMessageToOpenAI(apiKey, input); // Передаем apiKey и текущее значение input
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Предотвращаем поведение по умолчанию, чтобы не создавать новую строку
            handleSend(); // Вызываем функцию отправки
        }
    };

    return (
        <div className='relative'>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Сообщить ChatGPT"
                className='pl-[50px] bg-[#F4F4F4] shadow-xl outline-none rounded-xl py-2 w-full placeholder:pl-[20px]'
            />
            <img src={file} alt="file" className='absolute top-[10px] left-[13px] cursor-pointer' />
            <div onClick={handleSend} className='rounded-full bg-[#D9D9D9] w-[30px] h-[30px] p-1 flex justify-center items-center absolute top-[5px] right-[13px] cursor-pointer'>
                <img src={shape} alt="shape" />
            </div>
        </div>
    );
};

