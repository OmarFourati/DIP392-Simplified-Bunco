import React, { useState } from 'react';
import './App.css';
import MainFrame from './components/MainFrame/MainFrame';
import DiceRollArea from './components/DiceRollArea/DiceRollArea';
import FinalScoreTable from './components/FinalScoreTable/FinalScoreTable';
import GameBoard from './components/GameBoard/GameBoard';
import CreateUsername from './components/CreateUsername/CreateUsername'; // Updated import

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
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setGameStarted(true)}>Start Game</button>
      </header>

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