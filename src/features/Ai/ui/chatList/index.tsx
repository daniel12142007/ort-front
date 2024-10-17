import React from 'react';
import { useChatStore } from '../../model/store';
import newChat from '@/shared/assets/icon/new.svg';

export const ChatList: React.FC = () => {
  const { chats, addChat, setCurrentChatId } = useChatStore();

  return (
    <div className='w-[200px] rounded-tl-[20px] rounded-bl-[20px] p-[10px] bg-[#E8E8E8] text-black flex flex-col overflow-y-auto rounded-[20px 0px 0px 20px]'>
      <div className='flex justify-end mb-14'>
        <img src={newChat} onClick={addChat} alt="Новый Чат" className=' cursor-pointer' />
      </div>
      {chats.map((chat) => (
        <div className='p-[5px] mb-[8px] border border-[#DDDDDD] bg-[#DDDDDD] shadow-md rounded-[6px]' key={chat.id} onClick={() => setCurrentChatId(chat.id)}>
          {chat.title}
        </div>
      ))}
    </div>
  );
};

