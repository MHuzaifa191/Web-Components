import React, { useState, useEffect, useRef } from 'react';
import './ChatBox.css'; // Custom styles if needed
import '@fortawesome/fontawesome-free/css/all.min.css';

const ChatBox = ({ user, messages }) => {
  const [newMessage, setNewMessage] = useState('');
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // Handle sending the message
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="col-md-8 chat-box d-flex flex-column">
      <div className="card-header card-header-border bg-white d-flex justify-content-between align-items-center">
        <h5 className="mt-3 mb-3">{user.name}</h5>
        <span className="text-muted fw-light">Last seen {user.lastActive}</span>
      </div>
      <div className="card-body bg-light flex-grow-1 overflow-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 ${msg.from === 'You' ? 'text-end' : ''}`}>
            <div className={`d-inline-block px-4 py-3 rounded-pill ${msg.from === 'You' ? 'bg-primary text-white' : 'bg-secondary text-light'}`}>
              {msg.content}
            </div>
            <div className="small fw-light mr-2 ml-2">{msg.timestamp}</div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>
      <div className="card-footer card-top bg-white p-3">
        <div className="input-group border-set">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="input-group-append">
            <button className="btn send-button" onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
