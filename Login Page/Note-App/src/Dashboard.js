import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Ensure this CSS file has the styling

const Dashboard = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    if (!userData) {
      navigate('/');
    } else {
      const savedNotes = JSON.parse(localStorage.getItem('userNotes')) || [];
      setNotes(savedNotes);
    }
  }, [navigate, userData]);

  const handleAddNote = () => {
    if (noteTitle.trim() === '' || noteContent.trim() === '') {
      alert("Both title and content can't be empty");
      return;
    }
    const updatedNotes = [...notes, { title: noteTitle, content: noteContent }];
    setNotes(updatedNotes);
    localStorage.setItem('userNotes', JSON.stringify(updatedNotes));
    setNoteTitle('');
    setNoteContent('');
  };

  const handleNoteClick = (index) => {
    setIsEditing(index);
    setEditTitle(notes[index].title);
    setEditContent(notes[index].content);
    setIsBlurred(true);
  };

  const handleSaveEdit = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = { title: editTitle, content: editContent };
    setNotes(updatedNotes);
    localStorage.setItem('userNotes', JSON.stringify(updatedNotes));
    setIsEditing(null);
    setIsBlurred(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
    setIsBlurred(false);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem('userNotes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="dashboard-container">
      {userData && <h1>Welcome, {userData.fullName}!</h1>}
      <p>Glad to have you here. You can create a note below:</p>

      <div className="note-input-container">
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Note Title"
          className="note-title-input"
        />
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Write your note content here..."
          className="note-input"
        />
        <button className="add-note-button" onClick={handleAddNote}>
          Add Note
        </button>
      </div>

      <div className={`notes-container ${isBlurred ? 'blurred' : ''}`}>
        <h2>Your Notes</h2>
        {notes.length === 0 ? (
          <p>No notes available. Start by adding one!</p>
        ) : (
          <div className="notes-list">
            {notes.map((note, index) => (
              <div key={index} className="note-card">
                {isEditing === index ? (
                  <div className="edit-container">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="edit-title-input"
                    />
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="edit-input"
                    />
                    <button onClick={() => handleSaveEdit(index)} className="save-button">
                      Save
                    </button>
                    <button onClick={handleCancelEdit} className="cancel-button">
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className='note-title'>{note.title}</h3>
                    <p>{note.content}</p>
                    <div className="note-actions">
                      <FontAwesomeIcon 
                        icon={faEdit} 
                        className="edit-icon" 
                        onClick={() => handleNoteClick(index)}
                      />
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        className="delete-icon" 
                        onClick={() => handleDeleteNote(index)}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
