import React from 'react';
import Dice from '../../components/Dice/Dice';
import './DicePage.css';

const DicePage = () => {
  return (
    <main className="dice-page">
      <div className="container">
        <h1>Dice</h1>
        <p>
          Use the dice here, or open the popup at the bottom-right for quick access.
        </p>
        <div className="dice-center">
          <Dice />
        </div>
      </div>
    </main>
  )
}

export default DicePage;
