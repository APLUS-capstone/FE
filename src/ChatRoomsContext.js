import React, { createContext, useState } from 'react';

const ChatRoomsContext = createContext();

export const ChatRoomsProvider = ({ children }) => {
    const [chatRooms, setChatRooms] = useState([]);
    const [chatId, setChatId] = useState(null);
    const addNewChatRoom = (id) => {

        const newChatId = id;
        const newChatRoom = { id: newChatId, name: `New ChatRoom` };
        setChatRooms(prevRooms => [...prevRooms, newChatRoom]);

        setChatId(newChatId);
    };

    return (
        <ChatRoomsContext.Provider value={{ chatRooms, addNewChatRoom, chatId, setChatId }}>
            {children}
        </ChatRoomsContext.Provider>
    );
};

export default ChatRoomsContext;
