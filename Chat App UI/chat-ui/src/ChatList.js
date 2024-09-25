import React from 'react';
import './ChatList.css'; // Additional custom styles

const ChatList = ({ users, onSelectUser, selectedUserId }) => {
  return (
    <div className="col-md-4 chat-list bg-light">
      <div className="p-3 d-flex flex-column justify-content-between">
        <h5 className="my-3 ml-2 pl-2">ChatApp</h5>
        <form className="mb-3">
          <input 
            type="text" 
            className="form-control search-input rounded-pill" 
            placeholder="Search chats..." 
          />
        </form>
      </div>
      <ul className="list-group list-group-flush">
        {users.map((user) => (
          <li
            key={user.id}
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${selectedUserId === user.id ? 'active' : ''}`}
            onClick={() => onSelectUser(user.id)}
          >
            <div className="d-flex align-items-center">
              <img src={user.profilePic} alt={`${user.name}'s profile`} className="profile-pic" />
              <div className="ml-2">
                <strong>{user.name}</strong>
                <div className="small text-muted text-color">{user.lastMessage}</div>
              </div>
            </div>
            <span className="badge badge-pill badge-light badge-properties">{user.lastActive}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
