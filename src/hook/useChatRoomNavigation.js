import { useNavigate } from "react-router-dom";

const useChatRoomNavigation = (chatRooms, setChatRooms) => {
  const navigate = useNavigate();

  const handleNewChat = () => {
    const newChatId = chatRooms.length;
    const newChatName = `Chatroom${newChatId + 1}`;
    setChatRooms(prevRooms => [...prevRooms, { id: newChatId, name: newChatName }]);
    navigate(`/chatroom/${newChatId}`);
  };

  const handleChatRoomClick = (chatId) => {
    navigate(`/chatroom/${chatId}`);
  };

  return { handleNewChat, handleChatRoomClick };
};

export default useChatRoomNavigation;
