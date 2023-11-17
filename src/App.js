import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Checklist from "./components/Checklist";

function App() {
  return (
    <Router>
      <div className="pageWrapper">
        <Sidebar />
        <Checklist />
        {/* <Routes>
          <Route path="/" element={<Chatroom />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
