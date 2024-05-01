import React, { useState } from "react";
import "./CreateNewGame.css";

const CreateNewGame = ({ isOpen, onClose, onStartGame }) => {
  const [username, setUsername] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const handleStartGame = () => {
    if (username && selectedDifficulty) {
      onStartGame(username, selectedDifficulty);
      setUsername("");
      setSelectedDifficulty("");
    } else {
      alert("Please enter a username and select a difficulty.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close-icon" onClick={onClose}>
          ×
        </span>
        <h2>Welcome to Simplified Bunco!</h2>
        <div className="modal-body">
          <p>Please enter a username:</p>
          <input
            type="text"
            placeholder=""
            value={username}
            onChange={handleInputChange}
          />
          <p>Please select a difficulty :</p>
          <div className="difficulty-buttons">
            <button
              className={selectedDifficulty === "Easy" ? "selected" : ""}
              onClick={() => handleDifficultySelect("Easy")}
            >
              Easy
            </button>
            <button
              className={selectedDifficulty === "Medium" ? "selected" : ""}
              onClick={() => handleDifficultySelect("Medium")}
            >
              Medium
            </button>
            <button
              className={selectedDifficulty === "Hard" ? "selected" : ""}
              onClick={() => handleDifficultySelect("Hard")}
            >
              Hard
            </button>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewGame;
