import React from 'react';
import './Rules.css';

const Rules = () => {
  return (
    <main className="rules-page">
      <div className="rules-container">
        <div className="header-section">
          <div className="decorative-line"></div>
          <h1>Game Rules</h1>
          <div className="decorative-line"></div>
        </div>

        <div className="intro-text">
          <p>
            Influence of Gods is a board game where you embody one of the gods of Greek mythology that is now living in the modern world and trying to build its image from scratch. From now on, you are an old immortal god aiming to create the largest temple of disciples to restore your past glory. You may do that by participating in real life events or provoke sympathy through MythTok, the Gods social network. Players beware, you might gain or lose disciples depending on your choices along the way. Mortal and Greek Gods are not so different, both are imperfect, jealous, and occasionally enjoy a bad buzz.
          </p>
        </div>

        {/* SECTION 01 – GAMEPLAY */}
        <div className="rules-section">
          <div className="section-number">01</div>
          <div className="section-content">
            <h2>Gameplay</h2>
            <p>
              Taking turns in a clockwise direction, each player rolls the dice and moves their meeple the number of spaces indicated. Some cards will also make you move forward or backwards, when you arrive on the new space, you draw the card of the same color and get the effects of this card.
            </p>

            <div className="example-box">
              <h3>Example: Player Alex's Turn</h3>
              <p style={{fontStyle: 'italic', marginBottom: '16px', fontSize: '0.95rem'}}>
                (Case 7, playing as Athena with 150 disciples)
              </p>
              <ul>
                <li><span className="bullet">•</span>Alex rolls a 4 on the die.</li>
                <li><span className="bullet">•</span>Alex moves from case 7 to case 11 (Temple).</li>
                <li><span className="bullet">•</span>Alex lands on a Temple square and reads: "Oops! You spent too much time scrolling on MythTok..." (no effect, turn ends).</li>
                <li><span className="bullet">•</span>Scorekeeper announces: "Alex has 150 disciples."</li>
                <li><span className="bullet">•</span>Next Turn: Player next to Alex (clockwise) takes their turn.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 02 – GAME CONTENT */}
        <div className="rules-section">
          <div className="section-number">02</div>
          <div className="section-content">
            <h2>Game Contents</h2>
            <p>
              The game includes 1 board with 50 cases, 4 meeples, 1 score sheet notepad, 1 pencil, 37 Interview cards, 48 Benediction cards, 54 Malediction cards, 35 Event cards, and 10 cards representing different gods. For ages 12 and up.
            </p>
          </div>
        </div>

        {/* SECTION 03 – GOAL */}
        <div className="rules-section">
          <div className="section-number">03</div>
          <div className="section-content">
            <h2>Goal of the Game</h2>
            <p>
              Be the player with the most disciples at the end of the game. The goal is to have the maximum number of disciples when a player gets past the last square (50), provoking the end of the game. Each god starts with 100 disciples on its Temple (its social media page).
            </p>
          </div>
        </div>

        {/* SECTION 04 – PREPARATION */}
        <div className="rules-section">
          <div className="section-number">04</div>
          <div className="section-content">
            <h2>Preparing the Game</h2>
            <p>
              Select the god from the 10 Gods presented in the booklet you will embody, and put your Godcard in front of you. Take each sort of card and make neat piles next to the board. To define who starts the game each player will throw a dice. The one who has the highest number starts. If two players with the highest number have the same number, they redraw the dice until you reach an order. The rest of the game is played in clockwise order. All the gods start outside the board. If you throw a 1, you will land on square one. One of you will be in charge of keeping track of the scores on the score sheets notepad. Each change of score will be announced for every player to hear.
            </p>
          </div>
        </div>

        {/* SECTION 05 – MOVEMENT */}
        <div className="rules-section">
          <div className="section-number">05</div>
          <div className="section-content">
            <h2>Movement</h2>
            <p>
              Players play in clockwise order. On your turn, roll the dice and advance your meeple accordingly. Certain cards or squares may cause additional movement forward or backward.
            </p>
          </div>
        </div>

        {/* SECTION 06 – TYPES OF SQUARES */}
        <div className="rules-section">
          <div className="section-number">06</div>
          <div className="section-content">
            <h2>Types of Squares</h2>
            <p>
              Each color or icon on the board corresponds to a type of game action:
            </p>

            <div className="example-box">
              <ul>
                <li><span className="bullet">•</span><strong>EVENT Square (Orange):</strong> If you land on an EVENT square, you will be invited to experience a social event like mortals. The player to your right draws the top card from the EVENT deck and reads it to you. The text in italics, which tells you how many disciples you lost or gained, must only be read after you answered.</li>
                <li><span className="bullet">•</span><strong>INTERVIEW Square (Green):</strong> You have managed to land an Interview on Canal Olympos. You will now answer a question about general mythologic knowledge or related to antique Greece. You choose between 3 answers. The player to your right reads the card. (Correct answer +10 disciples, incorrect answer -10 disciples)</li>
                <li><span className="bullet">•</span><strong>BENEDICTION Square (Red):</strong> If you land on a BENEDICTION square, draw the top card from the BENEDICTION pile and follow the instructions.</li>
                <li><span className="bullet">•</span><strong>MALEDICTION Square (Red):</strong> If you land on a MALEDICTION square, draw the top card from the MALEDICTION pile and follow the instructions.</li>
                <li><span className="bullet">•</span><strong>TEMPLE Square (Grey):</strong> "Oops! You spent too much time scrolling on MythTok. Three hours passed and nothing happened. Lucky for you, you are an immortal god: time has no effect on you."</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 07 – SPECIAL SQUARES */}
        <div className="rules-section">
          <div className="section-number">07</div>
          <div className="section-content">
            <h2>Special Squares</h2>
            <p>
              Life in the 21st century is random. Those squares have a one occurrence on the board and something special happens when you land on it.
            </p>

            <div className="example-box">
              <ul>
                <li><span className="bullet">•</span><strong>The Gods Birthday:</strong> When you land on this square, someone receives a gift! Roll the dice: If the result is 1-4, it's YOUR BIRTHDAY. You throw a big party and receive 20 disciples from each god as a present. If the result is 5 or 6, you are invited to a big party for the birthday of a god. The player to your right receives 20 disciples from you.</li>
                <li><span className="bullet">•</span><strong>Trojan Horse:</strong> If you land on this square, your networks are hit by a hacking attempt. Unwanted messages appear and damage your reputation. You lose half your disciples.</li>
                <li><span className="bullet">•</span><strong>Good Omen:</strong> If you land on this square, Oraclr—the prediction-tech startup of Delphi—grants you 100 additional disciples.</li>
                <li><span className="bullet">•</span><strong>Icarus's Fall:</strong> If you land on this square, you return to the beginning of the game on square 1.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 08 – THE CARDS */}
        <div className="rules-section">
          <div className="section-number">08</div>
          <div className="section-content">
            <h2>Cards System</h2>
            <p>
              Every time you pick a card, put it on the side of the board, sorted by type. Once all the cards in a pile have been used up, shuffle the cards in the stock pile and use them to make new draws. If a card has an effect on your next turns, keep the card, face up next to your God Card. If a card makes you draw another card and addition or subtract the gains or losses of the two cards.
            </p>
          </div>
        </div>

        {/* SECTION 09 – END OF GAME */}
        <div className="rules-section">
          <div className="section-number">09</div>
          <div className="section-content">
            <h2>End of the Game</h2>
            <p>
              When a player passes the last square, it marks the end of the game. Each player that is still on the board gets to play one last time and has a chance to convert their last disciples. If a player reaches past the last square first but does not have the most disciples, they have lost. The player who has the most disciples will always win.
            </p>
          </div>
        </div>

        {/* SECTION 10 – DIGITAL ADDONS */}
        <div className="rules-section">
          <div className="section-number">10</div>
          <div className="section-content">
            <h2>Digital Add-ons</h2>
            <p>
              Lost your dice? Scan the QR code below to access an online platform that rolls the dice for you automatically. You can also find all the rules and more on our website.
            </p>
          </div>
        </div>

        <div className="footer-note">
          <div className="note-icon">ℹ</div>
          <p>These rules may slightly vary based on player count, experience level, or future expansions.</p>
        </div>
      </div>
    </main>
  );
};

export default Rules;