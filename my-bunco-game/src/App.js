// App.js
import React from "react";
import "./App.css";
import { FaDiceD20 } from "react-icons/fa";

function App() {
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
      </header>

      {/* Main Content */}
      {/* Include MainFrame, DiceRollArea, FinalScoreTable, GameBoard components here */}
      {/* Footer */}
      <footer className="footer">
        <button className="button">Next Round</button>
        <button className="button">Show Final Result</button>
      </footer>
    </div>
  );
}

export default App;
