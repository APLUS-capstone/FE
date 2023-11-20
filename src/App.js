import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Checklist from "./components/Checklist";
import ChatRoom from "./pages/chatRoom/Chatroom";
import Main from "./pages/Login/Main";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chatroom/:chatId" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
