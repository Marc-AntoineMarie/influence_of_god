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

      {/* Enlevez le {open &&} pour garder la popup dans le DOM */}
      <div className="dice-popup">
        <div className="popup-header">
          <strong>Dice</strong>
          <button onClick={toggle} aria-label="Close">✕</button>
        </div>
        <div className="popup-body">
          <Dice />
        </div>
      </div>

      {/* Overlay pour fermer en cliquant à l'extérieur */}
      {open && <div className="dice-overlay" onClick={toggle} />}
    </div>
  );
};

export default DiceModal;