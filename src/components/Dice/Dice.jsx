import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Dice.css';

const Dice = () => {
  const [value, setValue] = useState(1);
  const [displayValue, setDisplayValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    
    // Génère le résultat final AVANT l'animation
    const finalValue = Math.floor(Math.random() * 6) + 1;
    setValue(finalValue); // ← Important : on set la valeur AVANT l'animation
    setDisplayValue(finalValue);
    
    // Arrête juste l'état "isRolling" après l'animation
    setTimeout(() => {
      setIsRolling(false);
    }, 1500);
  };

  // Rotations pour afficher la bonne face en fonction de la valeur
  const getFaceRotation = (faceValue) => {
    const rotations = {
      1: { x: 0, y: 0 },
      2: { x: 0, y: 180 },
      3: { x: 0, y: -90 },
      4: { x: 0, y: 90 },
      5: { x: -90, y: 0 },
      6: { x: 90, y: 0 },
    };
    return rotations[faceValue];
  };

  const finalRotation = getFaceRotation(value);

  return (
    <div className="dice-container">
      <div className="dice-scene">
        <motion.div
          className="dice-cube" 
          onClick={rollDice}
         animate={isRolling ? {
          rotateX: isRolling ? 720 + finalRotation.x : finalRotation.x,
          rotateY: isRolling ? 720 + finalRotation.y : finalRotation.y,
          z: [0],
        } : {
          rotateX: finalRotation.x,
          rotateY: finalRotation.y,
          z: 0,
        }}
        transition={{
          duration: isRolling ? 1.5 : 0,
          ease: "easeOut", // Ralentit à la fin naturellement
        }}
        >
          {/* Face 1 (devant) */}
          <div className="dice-face dice-face-1">
            {renderDots(displayValue === 1 && isRolling ? displayValue : 1)}
          </div>
          
          {/* Face 2 (derrière) */}
          <div className="dice-face dice-face-2">
            {renderDots(displayValue === 2 && isRolling ? displayValue : 2)}
          </div>
          
          {/* Face 3 (droite) */}
          <div className="dice-face dice-face-3">
            {renderDots(displayValue === 3 && isRolling ? displayValue : 3)}
          </div>
          
          {/* Face 4 (gauche) */}
          <div className="dice-face dice-face-4">
            {renderDots(displayValue === 4 && isRolling ? displayValue : 4)}
          </div>
          
          {/* Face 5 (haut) */}
          <div className="dice-face dice-face-5">
            {renderDots(displayValue === 5 && isRolling ? displayValue : 5)}
          </div>
          
          {/* Face 6 (bas) */}
          <div className="dice-face dice-face-6">
            {renderDots(displayValue === 6 && isRolling ? displayValue : 6)}
          </div>
        </motion.div>
      </div>
      
      <p className="dice-instruction">
        {isRolling ? "🎲 Lancer en cours..." : "Cliquez sur le dé pour lancer"}
      </p>
      <p className="dice-result">Résultat : {value}</p>
    </div>
  );
};

const renderDots = (value) => {
  const dots = [];
  
  const positions = {
    1: [[50, 50]],
    2: [[25, 25], [75, 75]],
    3: [[25, 25], [50, 50], [75, 75]],
    4: [[25, 25], [75, 25], [25, 75], [75, 75]],
    5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
    6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
  };

  positions[value].forEach((pos, index) => {
    dots.push(
      <div
        key={index}
        className="dot"
        style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
      />
    );
  });

  return dots;
};

export default Dice;