import React, { useState } from "react";
import "./App.css";
import MainFrame from "./components/MainFrame/MainFrame";
import DiceRollArea from "./components/DiceRollArea/DiceRollArea";
import FinalScoreTable from "./components/FinalScoreTable/FinalScoreTable";
import GameBoard from "./components/GameBoard/GameBoard";
import CreateUsername from "./components/CreateUsername/CreateUsername"; // Updated import
// App.js
import { FaDiceD20 } from "react-icons/fa";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = (username) => {
    // Perform game start logic (e.g., set gameStarted to true, save username)
    console.log(`Game started with username: ${username}`);
    setGameStarted(true);
  };

  const closeModal = () => {
    // Implement closing modal logic if needed
    setGameStarted(false);
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
          <button className="button">New Game</button>
          <button className="button">Game Rules</button>
          <button className="button">Difficulty</button>
          <p className="player-name">Player : </p>
        </div>
        <button onClick={() => setGameStarted(true)}>Start Game</button>
      </header>

      {/* Main Content */}
      {/* Include MainFrame, DiceRollArea, FinalScoreTable, GameBoard components here */}
      {/* Footer */}
      <footer className="footer">
        <button className="button">Next Round</button>
        <button className="button">Show Final Result</button>
      </footer>

      <CreateUsername
        isOpen={gameStarted}
        onClose={closeModal}
        onStartGame={handleStartGame}
      />

      {/* Other components can be rendered conditionally based on gameStarted */}
      {gameStarted && (
        <>
          <MainFrame />
          <DiceRollArea />
          <FinalScoreTable />
          <GameBoard />
        </>
      )}
    </div>
  );
}

export default App;
