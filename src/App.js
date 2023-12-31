import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatRoom from "./pages/chatRoom/chatroom";
import Main from "./pages/main/Main";
import Loader from "./pages/loader/Loader";
import Login from "./pages/login/Login";
import styled from "styled-components";
import { ChatRoomsProvider } from "./ChatRoomsContext";
function App() {
  return (

    <Router>
      <ChatRoomsProvider>
        <MainContainer>
          <Sidebar />
          <ContentArea>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chatroom/:chatId" element={<ChatRoom />} />
            <Route path="/loader" element={<Loader />} />
            <Route path="/main" element={<Main />} />

            </Routes>
          </ContentArea>
        </MainContainer>
      </ChatRoomsProvider>
    </Router>
  );
}


export default App;

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;
const ContentArea = styled.div`
  flex-grow: 1;
  overflow: auto;
`;