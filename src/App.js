import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Checklist from "./components/Checklist";
function App() {
  return (
    <Router>
      <div className="pageWrapper">
        <Sidebar />
        <Checklist />
        {/* If you have other routes or components, place them here */}
      </div>
    </Router>
  );
}

export default App;
