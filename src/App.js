import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUser, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Chat from './components/Chat';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Help from './components/Help';

function App() {
  const [theme, setTheme] = useState('light');
  const [chatHistories, setChatHistories] = useState([[]]);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);

  const startNewChat = () => {
    setChatHistories(prev => [...prev, []]);
    setCurrentChatIndex(prev => prev + 1);
  };

  const updateCurrentChatHistory = (newHistory) => {
    setChatHistories(prev => {
      const newHistories = [...prev];
      newHistories[currentChatIndex] = newHistory;
      return newHistories;
    });
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <aside className="sidebar">
          <div className="sidebar-header">
            <FontAwesomeIcon icon={faUtensils} className="header-icon" />
            <h1>FoodAI Chat</h1>
          </div>
          <Link to="/" className="new-chat-btn" onClick={startNewChat}>New Chat</Link>
          <div className="chat-history-list">
            {chatHistories.map((_, index) => (
              <Link
                key={index}
                to="/"
                className={`chat-history-item ${index === currentChatIndex ? 'active' : ''}`}
                onClick={() => setCurrentChatIndex(index)}
              >
                Chat {index + 1}
              </Link>
            ))}
          </div>
          <div className="sidebar-buttons">
            <Link to="/profile" className="sidebar-btn">
              <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
            </Link>
            <Link to="/settings" className="sidebar-btn">
              <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
            </Link>
            <Link to="/help" className="sidebar-btn">
              <FontAwesomeIcon icon={faQuestionCircle} /> <span>Help</span>
            </Link>
          </div>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <Chat
                chatHistory={chatHistories[currentChatIndex]}
                setChatHistory={updateCurrentChatHistory}
              />
            } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings theme={theme} setTheme={setTheme} />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
