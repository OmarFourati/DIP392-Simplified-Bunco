import React, { useState } from "react";
import "./CreateUsername.css";

const CreateUsername = ({ isOpen, onClose, onStartGame }) => {
  const [username, setUsername] = useState("");

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
        <div className="modal-header">
          <span className="close-icon" onClick={onClose}>
            ×
          </span>
          <h2>Welcome to Simplified Bunco!</h2>
        </div>
        <div className="modal-body">
          <p>Please enter a username:</p>
          <input
            type="text"
            placeholder=""
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-footer">
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      </div>
    </div>
  );
};

export default CreateUsername;
