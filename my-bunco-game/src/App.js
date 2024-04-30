// App.js
import React, { useState } from 'react';
import './App.css';
import MainFrame from './components/MainFrame/MainFrame';
import DiceRollArea from './components/DiceRollArea/DiceRollArea';
import FinalScoreTable from './components/FinalScoreTable/FinalScoreTable';
import GameBoard from './components/GameBoard/GameBoard';
import CreateUsername from './components/Modals/CreateUsername';
import GameRulesModal from './components/Modals/GameRulesModal';
import SelectDifficultyModal from './components/Modals/SelectDifficultyModal'; // Import SelectDifficultyModal

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleStartGame = (username) => {
    // Perform game start logic (e.g., set gameStarted to true, save username)
    console.log(`Game started with username: ${username} and difficulty: ${selectedDifficulty}`);
    setGameStarted(true);
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
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setGameStarted(true)}>Start Game</button>
        <button onClick={() => setShowRulesModal(true)}>View Game Rules</button>
        <button onClick={() => setShowDifficultyModal(true)}>Difficulty</button>
      </header>

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