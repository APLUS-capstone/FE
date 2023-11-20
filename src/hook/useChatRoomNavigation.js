import { useNavigate } from "react-router-dom";

const useChatRoomNavigation = (chatRooms) => {
  const navigate = useNavigate();

  const handleNewChat = () => {
    const newChatId = chatRooms.length;
    // const newChatName = `Chatroom${newChatId + 1}`;

    navigate(`/main`);
  };

  const handleChatRoomClick = (chatId) => {
    navigate(`/chatRoom/${chatId}`);
  };

  return { handleNewChat, handleChatRoomClick };
};

export default useChatRoomNavigation;
