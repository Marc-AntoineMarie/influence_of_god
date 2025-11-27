import React from 'react';
import './Rules.css';

const Rules = () => {
  return (
    <main className="rules-page">
      <div className="container">
        <div className="header-section">
          <div className="decorative-line"></div>
          <h1>Game Rules</h1>
          <div className="decorative-line"></div>
        </div>
        
        <div className="intro-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
            semper nisl. Phasellus non lorem vel sapien gravida efficitur. Nullam
            ultricies, tellus sed faucibus tincidunt, sapien turpis efficitur
            sapien, sed varius nibh arcu in libero.
          </p>
        </div>

        <div className="rules-section">
          <div className="section-number">01</div>
          <div className="section-content">
            <h2>Gameplay</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pharetra, ligula at dapibus auctor, elit dui feugiat neque, sed
              fermentum velit lorem et neque.
            </p>

            <div className="example-box">
              <h3>Example:</h3>
              <ul>
                <li><span className="bullet">•</span>Lorem ipsum dolor sit amet</li>
                <li><span className="bullet">•</span>Consectetur adipiscing elit</li>
                <li><span className="bullet">•</span>Praesent sit amet tortor a sapien</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rules-section">
          <div className="section-number">02</div>
          <div className="section-content">
            <h2>Scoring System</h2>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
              cubilia curae. Donec velit neque, auctor sit amet aliquam vel.
            </p>
          </div>
        </div>

        <div className="rules-section">
          <div className="section-number">03</div>
          <div className="section-content">
            <h2>Victory Conditions</h2>
            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
          </div>
        </div>

        <div className="footer-note">
          <div className="note-icon">ℹ</div>
          <p>Remember: These rules are subject to variations based on player count and experience level.</p>
        </div>
      </div>
    </main>
  );
};

export default Rules;