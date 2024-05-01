import React from 'react';
import './Modal.css';

const GameRulesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Game Rules - Simplified Bunco</h2>
        <p>
          Bunco is a social dice game involving 100% luck and no skill. Players take turns rolling
          three dice and attempting to match the target number for that round.
        </p>
        <p>Here are the basic rules:</p>
        <ul>
          <li>Players take turns rolling three dice per round.</li>
          <li>The target number changes each round (1 to 6).</li>
          <li>Players score points by rolling matches to the target number.</li>
          <li>A Bunco is achieved by rolling three-of-a-kind of the current target number.</li>
          <li>The game typically consists of 6 rounds.</li>
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default GameRulesModal;