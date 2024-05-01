// App.js
import React, { useState } from "react";
import "./App.css";
import { FaDiceD20 } from "react-icons/fa";
import DiceRollArea from "./components/DiceRollArea/DiceRollArea";
import FinalScoreTable from "./components/FinalScoreTable/FinalScoreTable";
import GameBoard from "./components/GameBoard/GameBoard";
import CreateUsername from "./components/Modals/CreateUsername";
import GameRulesModal from "./components/Modals/GameRulesModal";
import SelectDifficultyModal from "./components/Modals/SelectDifficultyModal"; // Import SelectDifficultyModal
// App.js

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [username, setUsername] = useState(""); // State to store the username
  const handleStartGame = (username) => {
    // Perform game start logic (e.g., set gameStarted to true, save username)
    console.log(
      `Game started with username: ${username} and difficulty: ${selectedDifficulty}`
    );
    setUsername(username);
    setSelectedDifficulty(selectedDifficulty);
    setGameStarted(false);
    //
  };

  const closeModal = () => {
    // Implement closing modal logic
    setGameStarted(false);
    setShowRulesModal(false);
    setShowDifficultyModal(false);
  };

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    handleStartGame(); // You can modify this to pass username if needed
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        {/* Logo and App Name */}
        <div className="app-title">
          <div className="bunco-logo">
            <FaDiceD20 />
          </div>
          <div className="bunco-title">
            <p>Bunco</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button onClick={() => setGameStarted(true)} className="button">
            New Game
          </button>
          <button onClick={() => setShowRulesModal(true)} className="button">
            Game Rules
          </button>
          <button
            onClick={() => setShowDifficultyModal(true)}
            className="button"
          >
            Difficulty
          </button>
          <p className="player-name">Player : {username}</p>
        </div>
      </header>

      {/* Main Content */}
      {/* Include MainFrame, DiceRollArea, FinalScoreTable, GameBoard components here */}
      {/* Footer */}
      <footer className="footer">
        <button className="button">Next Round</button>
        <button className="button">Show Final Result</button>
      </footer>

      <CreateUsername
        isOpen={gameStarted && !showRulesModal && !showDifficultyModal}
        onClose={closeModal}
        onStartGame={handleStartGame}
      />

      <GameRulesModal isOpen={showRulesModal} onClose={closeModal} />

      <SelectDifficultyModal
        isOpen={showDifficultyModal}
        onClose={closeModal}
        onSelectDifficulty={handleSelectDifficulty}
      />

      {/* Other components can be rendered conditionally based on gameStarted */}
      {/* {gameStarted && (
        <>
          <DiceRollArea />
          <FinalScoreTable />
          <GameBoard />
        </>
      )} */}
    </div>
  );
}
export default App;
