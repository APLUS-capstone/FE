import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        {/* If you have other routes or components, place them here */}
      </div>
    </Router>
  );
}

export default App;
