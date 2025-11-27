import React, { useState } from 'react';
import Dice from '../Dice/Dice';
import './DiceModal.css';

const DiceModal = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className={`dice-modal-root ${open ? 'open' : ''}`}>
      <button className="dice-btn" aria-label="Open dice popup" onClick={toggle}>
        🎲
      </button>

      {open && (
        <div className="dice-popup">
          <div className="popup-header">
            <strong>Dice</strong>
            <button onClick={toggle} aria-label="Close">✕</button>
          </div>
          <div className="popup-body">
            <Dice />
          </div>
        </div>
      )}
    </div>
  );
};

export default DiceModal;
