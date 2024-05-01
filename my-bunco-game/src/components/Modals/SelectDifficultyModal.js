const SelectDifficultyModal = ({ isOpen, onClose, onSelectDifficulty }) => {
    const handleDifficultySelect = (difficulty) => {
      onSelectDifficulty(difficulty);
      onClose();
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Select Game Difficulty</h2>
          <p>Choose your preferred difficulty level:</p>
          <div className="difficulty-buttons">
            <button onClick={() => handleDifficultySelect('Easy')}>Easy</button>
            <button onClick={() => handleDifficultySelect('Medium')}>Medium</button>
            <button onClick={() => handleDifficultySelect('Hard')}>Hard</button>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default SelectDifficultyModal;