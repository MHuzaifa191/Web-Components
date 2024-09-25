import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatBox from './ChatBox';
import './App.css'; // Global styles
import '@fortawesome/fontawesome-free/css/all.min.css';

// Sample data
const users = [
  { id: 1, name: 'Tim Hover', lastMessage: 'What’s the plan?', lastActive: '32 mins ago' },
  { id: 2, name: 'Ayub Rossi', lastMessage: 'Alright', lastActive: '1 hr ago' },
  { id: 3, name: 'Hamaad Dejesus', lastMessage: 'Let’s catch up soon', lastActive: '2 hrs ago' },
  { id: 4, name: 'Eleni Hobbs', lastMessage: 'Sounds good', lastActive: '2 hrs ago' },
  { id: 5, name: 'Elsa Black', lastMessage: 'Talk later', lastActive: '3 hrs ago' }
];

// Messages are now tied to specific users
const initialMessages = [
  { id: 1, text: 'What’s the plan?', time: '1:00 PM', userId: 1, isSender: false },
  { id: 2, text: 'I’m talking about the tutorial.', time: '1:02 PM', userId: 1, isSender: false },
  { id: 3, text: 'Sure, let’s do it!', time: '1:05 PM', userId: 1, isSender: true },
  { id: 4, text: 'Let’s meet tomorrow.', time: '2:00 PM', userId: 2, isSender: false },
  { id: 5, text: 'Sounds perfect!', time: '2:10 PM', userId: 2, isSender: true },
  { id: 6, text: 'Let’s catch up soon.', time: '3:00 PM', userId: 3, isSender: false }
];

// ChatApp with both the user list and chatbox
const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState(initialMessages);

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="container-fluid app-container">
      <div className="row h-100">
        <ChatList users={users} onSelectUser={handleSelectUser} selectedUserId={selectedUserId} />
        <ChatBox messages={messages} setMessages={setMessages} selectedUserId={selectedUserId} />
      </div>
    </div>
  );
};

export default App;
