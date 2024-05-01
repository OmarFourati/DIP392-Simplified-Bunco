import React from "react";
import "./GameRulesModal.css";

const GameRulesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close-icon-game-rules" onClick={onClose}>
          ×
        </span>
        <h2>Game Rules - Simplified Bunco</h2>
        <div className="rule">
          <p>
            Bunco is a social dice game involving 100% luck and no skill.
            Players take turns rolling three dice and attempting to match the
            target number for that round.
          </p>
        </div>
        <div className="rule">
          <p>Here are the basic rules:</p>
          <ul>
            <li>Players take turns rolling three dice per round.</li>
            <li>The target number changes each round (1 to 6).</li>
            <li>
              Players score points by rolling matches to the target number.
            </li>
            <li>
              A Bunco is achieved by rolling three-of-a-kind of the current
              target number.
            </li>
            <li>The game typically consists of 6 rounds.</li>
          </ul>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default GameRulesModal;
