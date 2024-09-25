import React, { useState, useEffect } from 'react';
import ChatList from './ChatList';
import ChatBox from './ChatBox';
import './ChatApp.css'; // Additional global styles


const ChatApp = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
        setMessages(data.messages);
      });
  }, []);

  const handleUserSelect = (userId) => {
    const user = users.find((u) => u.id === userId);
    setSelectedUser(user);
  };

  return (
    <div className="container-fluid chat-app vh-100">
      <div className="row h-100">
        <ChatList users={users} onSelectUser={handleUserSelect} selectedUserId={selectedUser?.id} />
        {selectedUser && <ChatBox user={selectedUser} messages={messages[selectedUser.id] || []} />}
      </div>
    </div>
  );
};

export default ChatApp;
