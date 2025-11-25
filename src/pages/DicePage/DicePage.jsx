import React from 'react';
import Dice from '../../components/Dice/Dice';
import './DicePage.css';

const DicePage = () => {
  return (
    <main className="dice-page">
      <div className="container">
        <h1>Dé</h1>
        <p>
          Utilisez le dé ici, ou ouvrez le popup situé en bas à droite pour un
          accès rapide.
        </p>
        <div className="dice-center">
          <Dice />
        </div>
      </div>
    </main>
  )
}

export default DicePage;
