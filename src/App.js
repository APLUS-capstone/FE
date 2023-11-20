import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatRoom from "./pages/chatRoom/chatroom";
import Main from "./pages/main/Main";
import Loader from "./pages/loader/Loader";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chatroom/:chatId" element={<ChatRoom />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
