import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as PlusButton } from "../assets/images/plus.svg";
import { ReactComponent as ChatIcon } from "../assets/images/textballon.svg";
const Sidebar = () => {
  const [chatRooms, setChatRooms] = useState([]);

  const handleNewChat = () => {
    const newChatName = `Chatroom${chatRooms.length + 1}`;
    setChatRooms((prevRooms) => [...prevRooms, newChatName]);
  };

  return (
    <SidebarContainer>
      <NameContainer>APLUS</NameContainer>
      <NewbuttonContainer onClick={handleNewChat}>
        <PlusButton />
        New chat
      </NewbuttonContainer>
      <ChatList>
        {chatRooms.map((chat) => (
          <StyledLink to={`/${chat}`} key={chat}>
            <ChatItem>
              <Chaticon />
              {chat}
            </ChatItem>
          </StyledLink>
        ))}
      </ChatList>
    </SidebarContainer>
  );
};
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e6e6e6;
`;
const NameContainer = styled.div`
  /* text-align: center; */
  padding-left: 1rem;
  width: 17rem;
  height: 3rem;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.5rem;
`;
const Chaticon = styled(ChatIcon)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 17rem;
  height: 100vh;
  background-color: #45504f;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
`;

const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
`;
const NewbuttonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  gap: 0.5rem;
  width: 17rem;
  background-color: #45504f;
  border-top: 0.125rem solid #ffffff;
  border-bottom: 0.125rem solid #ffffff;
  border-left: none;
  border-right: none;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #5c6867;
  }
  font-size: 1.5rem;
  color: #b3b3b3;
  margin-bottom: 1rem;
`;

const ChatItem = styled.div`
  padding: 0.5rem;
  background: #45504f;
  border-radius: 0.5rem;
  font-size: 1rem;
  height: 3vh;
`;

export default Sidebar;
