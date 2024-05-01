import React, { useState } from 'react';
import './CreateUsername.css';

const CreateUsername = ({ isOpen, onClose, onStartGame }) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleStartGame = () => {
    onStartGame(username);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Welcome to Simplified Bunco!</h2>
        <p>Please enter your username:</p>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleInputChange}
        />
        <button onClick={handleStartGame}>Start Game</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CreateUsername;