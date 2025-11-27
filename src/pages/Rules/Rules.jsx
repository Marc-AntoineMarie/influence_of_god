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
            Influence of Gods is a modern mythological board game where immortal gods live among mortals,
            struggle for popularity, and attempt to rebuild their divine image. Earn disciples, avoid scandals,
            and shape your destiny across 50 unpredictable squares.
          </p>
        </div>

        {/* SECTION 01 – GAMEPLAY */}
        <div className="rules-section">
          <div className="section-number">01</div>
          <div className="section-content">
            <h2>Gameplay</h2>
            <p>
              Each player embodies one of the 10 Greek gods now living in the modern world. Your goal is to
              rebuild your reputation by accumulating as many disciples as possible. Players advance on the
              board by rolling a dice, triggering events, interviews, blessings, curses, and special situations.
            </p>

            <div className="example-box">
              <h3>Example:</h3>
              <ul>
                <li><span className="bullet">•</span>You land on an Event square: another player reads an event card to you.</li>
                <li><span className="bullet">•</span>You answer a question on an Interview square to gain disciples.</li>
                <li><span className="bullet">•</span>You may move forward or backward depending on the card drawn.</li>
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
              The game includes 1 board of 50 squares, 4 meeples, 1 score sheet notepad, 1 pencil, 37 Interview cards,
              40 Benediction cards, 40 Malediction cards, 35 Event cards, and 10 God cards. The game is designed for
              players aged 12 and above.
            </p>
          </div>
        </div>

        {/* SECTION 03 – GOAL */}
        <div className="rules-section">
          <div className="section-number">03</div>
          <div className="section-content">
            <h2>Goal of the Game</h2>
            <p>
              Become the god with the highest number of disciples when a player passes the final (50th) square.
              All gods start with 200 disciples, and the one with the highest final total wins — even if they did not
              reach the end first.
            </p>
          </div>
        </div>

        {/* SECTION 04 – PREPARATION */}
        <div className="rules-section">
          <div className="section-number">04</div>
          <div className="section-content">
            <h2>Preparing the Game</h2>
            <p>
              Each player selects a god and places their God card next to the board. A designated player keeps track
              of disciple counts using the score sheet. All decks (Events, Interviews, Benedictions, Maledictions) are
              shuffled and placed near the board.
            </p>
          </div>
        </div>

        {/* SECTION 05 – MOVEMENT */}
        <div className="rules-section">
          <div className="section-number">05</div>
          <div className="section-content">
            <h2>Movement</h2>
            <p>
              Players play in clockwise order. On your turn, roll the dice and advance your meeple accordingly.
              Certain cards or squares may cause additional movement forward or backward.
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
                <li><span className="bullet">•</span>Event Square: Experience a social event. Another player reads the card.</li>
                <li><span className="bullet">•</span>Interview Square: Answer a mythology question (+10 or -5 disciples).</li>
                <li><span className="bullet">•</span>Benediction Square: Draw a blessing and follow instructions.</li>
                <li><span className="bullet">•</span>Malediction Square: Draw a curse and apply the effect.</li>
                <li><span className="bullet">•</span>Temple Square: MythTok scrolling — nothing happens.</li>
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
              Some squares appear only once and trigger major effects.
            </p>

            <div className="example-box">
              <ul>
                <li><span className="bullet">•</span>The Gods Birthday: Roll the dice; receive or give 50 disciples depending on the result.</li>
                <li><span className="bullet">•</span>Trojan Horse: Lose 200 disciples due to a hacking scandal.</li>
                <li><span className="bullet">•</span>Good Omen: Gain 500 disciples instantly.</li>
                <li><span className="bullet">•</span>Icarus’s Fall: Return to the starting square.</li>
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
              When a pile runs out of cards, shuffle the discarded cards to create a new deck.
              Event cards contain a short scenario, but only the consequence (gained or lost disciples) must be read aloud.
            </p>
          </div>
        </div>

        {/* SECTION 09 – END OF GAME */}
        <div className="rules-section">
          <div className="section-number">09</div>
          <div className="section-content">
            <h2>End of the Game</h2>
            <p>
              When a player moves past the final square, each remaining player gets one final turn.
              The player with the highest number of disciples wins — not necessarily the one who reached the end first.
            </p>
          </div>
        </div>

        {/* SECTION 10 – DIGITAL ADDONS */}
        <div className="rules-section">
          <div className="section-number">10</div>
          <div className="section-content">
            <h2>Digital Add-ons</h2>
            <p>
              Lost your dice? A QR code gives you access to an online dice roller and optional automatic disciple
              calculation tools.
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