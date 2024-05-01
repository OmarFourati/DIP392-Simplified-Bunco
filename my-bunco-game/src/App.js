// App.js
import React, { useState } from "react";
import "./App.css";
import MainFrame from "./components/MainFrame/MainFrame";
import DiceRollArea from "./components/DiceRollArea/DiceRollArea";
import FinalScoreTable from "./components/FinalScoreTable/FinalScoreTable";
import GameBoard from "./components/GameBoard/GameBoard";
import CreateUsername from "./components/Modals/CreateUsername";
import GameRulesModal from "./components/Modals/GameRulesModal";
import SelectDifficultyModal from "./components/Modals/SelectDifficultyModal"; // Import SelectDifficultyModal
// App.js
import { FaDiceD20 } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
