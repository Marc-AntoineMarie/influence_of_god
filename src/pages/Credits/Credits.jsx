import React from 'react';
import './Credits.css';

const Credits = () => {
  return (
    <main className="credits-page">
      <div className="container">
        <h1>Credits</h1>

        <div className="credit-section">
          <span className="credit-label">Design</span>
          <a 
            href="https://linktr.ee/ChloeHeurtebise" 
            target="_blank" 
            rel="noopener noreferrer"
            className="credit-link"
          >
            Chloé Heurtebise
          </a>
        </div>

        <div className="credit-section">
          <span className="credit-label">Marketing</span>
          <a 
            href="https://www.linkedin.com/in/emma-foli-54618922a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="credit-link"
          >
            Emma Foli
          </a>
        </div>
        
        <div className="credit-section">
          <span className="credit-label">Development</span>
          <a 
            href="https://www.linkedin.com/in/marc-antoine-marie-6a132820a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="credit-link"
          >
            Marie Marc-Antoine
          </a>
        </div>
        
         <div className="credit-section">
          <span className="credit-label">Editor</span>
          <a 
            href="https://www.linkedin.com/in/marc-antoine-marie-6a132820a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="credit-link"
          >
            Clara Duponcheli
          </a>
        </div>

        <div className="thanks-section">
          <p>Thanks to contributors and playtesters.</p>
        </div>
      </div>
    </main>
  );
};

export default Credits;