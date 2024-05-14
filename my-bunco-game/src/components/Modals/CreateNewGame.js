import React, { useState } from "react";
import "./CreateNewGame.css";

const CreateNewGame = ({ isOpen, onClose, onStartGame }) => {
  const [username, setUsername] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const resetStateAndClose = () => {
    setUsername("");
    setSelectedDifficulty("");
    onClose();
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const handleStartGame = () => {
    if (username === "") {
      alert("You must input a username!");
    }
    if (username.length < 3 || username.length > 10) {
      alert("Username must be between 3 and 15 characters.");
      return;
    }
    if (!selectedDifficulty) {
      alert("You must chose a difficulty!");
    }
    if (username && selectedDifficulty) {
      onStartGame(username, selectedDifficulty);
      setUsername("");
      setSelectedDifficulty("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={resetStateAndClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-icon" onClick={resetStateAndClose}>
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
