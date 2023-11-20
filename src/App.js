import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Checklist from "./components/Checklist";
import ChatRoom from "./pages/chatRoom/chatroom";
import Main from "./pages/Login/Main";
import Loader from "./pages/loader/Loader";
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chatroom/:chatId" element={<ChatRoom />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </Router>
  );
}

export default App;
