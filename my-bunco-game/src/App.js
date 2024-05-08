// App.js
import React, { useState } from "react";
import "./App.css";

import DiceRollArea from "./components/DiceRollArea/DiceRollArea";
import FinalScoreTable from "./components/FinalScoreTable/FinalScoreTable";
import GameBoard from "./components/GameBoard/GameBoard";
import CreateNewname from "./components/Modals/CreateNewGame";
import GameRulesModal from "./components/Modals/GameRulesModal";
import { Box } from "@mui/material";

// App.js

function App() {
  const [startGame, setStartGame] = useState(false);
  const [newGameModal, setNewGameModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [username, setUsername] = useState(""); // State to store the username
  const [IAPlayerScore, setIAPlayerScore] = useState([]);
  const [roundNumber, setRoundNumber] = useState();
  const [score, setScore] = useState();
  const [finalWinnerPlayer, setFinalWinnerPlayer] = useState([]);
  const [finalWinnerTable, setFinalWinnerTable] = useState([]);
  const [finalResultsModalOpen, setFinalResultsModalOpen] = useState(false); // New state

  // Function to update scores for all players
  const updateIAPlayerScore = (newIAPlayerScore) => {
    setIAPlayerScore(newIAPlayerScore);
  };

  // Function to update round
  const updateRound = (round) => {
    setRoundNumber(round);
  };

  // Send Player Score
  const sendScore = (score) => {
    setScore(score);
  };

  const handleStartGame = (username, difficulty) => {
    setUsername(username);
    setSelectedDifficulty(difficulty);
    setNewGameModal(false);
    setStartGame(true);
  };

  const closeModal = () => {
    // Implement closing modal logic
    setNewGameModal(false);
    setShowRulesModal(false);
  };

  const handleShowFinalResults = () => {
    setFinalResultsModalOpen(true);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        {/* Logo and App Name */}
        <div className="app-title">
          <div className="bunco-logo"></div>
          <div className="bunco-title">
            <p>Bunco</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button onClick={() => setNewGameModal(true)} className="button">
            New Game
          </button>
          <button onClick={() => setShowRulesModal(true)} className="button">
            Game Rules
          </button>
          {username && <p className="player-name">Player : {username}</p>}
        </div>
      </header>

      <CreateNewname
        isOpen={newGameModal && !showRulesModal}
        onClose={closeModal}
        onStartGame={handleStartGame}
      />

      <GameRulesModal isOpen={showRulesModal} onClose={closeModal} />

      {/* Other components can be rendered conditionally based on gameStarted */}
      {startGame && (
        <div style={{ marginTop: "5px" }}>
          <DiceRollArea
            selectedDifficulty={selectedDifficulty}
            updateIAPlayerScore={updateIAPlayerScore}
            updateRound={updateRound}
            sendScore={sendScore}
          />
          <div style={{ marginTop: "20px" }}>
            <GameBoard
              scores={IAPlayerScore}
              round={roundNumber}
              score={score}
              setFinalWinnerPlayer={setFinalWinnerPlayer}
              setFinalWinnerTable={setFinalWinnerTable}
              username={username}
              handleShowFinalResults={handleShowFinalResults}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <FinalScoreTable
              finalResultsModal={finalResultsModalOpen} // Pass the state to the FinalScoreTable component
              finalWinnerPlayer={finalWinnerPlayer}
              finalWinnerTable={finalWinnerTable}
            />
          </div>
        </div>
      )}
      <footer className="footer">
        {startGame && (
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px", // Adjust the border radius as needed
              padding: "5px 3px 2px 3px", // Adjust the padding as needed
              width: "100%", // Take full width of the parent container
            }}
          >
            {" "}
            <h5 style={{ textAlign: "center", fontStyle: "italic" }}>
              Game Developed based on the existing game Bunco. Experimental only
              and for University Project matters.
            </h5>
          </Box>
        )}
      </footer>
    </div>
  );
}
export default App;
