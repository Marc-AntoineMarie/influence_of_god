import React from 'react';
import './Context.css';

const Context = () => {
  return (
    <main className="context-page">
      <div className="context-container">

        {/* HEADER */}
        <div className="context-header">
          <div className="timeline-dot"></div>
          <h1>Context</h1>
          <div className="corner-ornament top-right"></div>
          <div className="corner-ornament bottom-left"></div>
        </div>

        {/* TIMELINE */}
        <div className="timeline">
          <div className="timeline-line"></div>

          {/* BEGINNING */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>The Fall of Olympus</h2>
              <p>
                Long after mortals stopped praying, the gods slowly lost their power. 
                Temples turned to dust, myths faded into stories, and divine glory became 
                nothing more than history. Olympus still stands, but its influence has vanished.
              </p>
            </div>
          </div>

          {/* PRESENT */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Return in the Modern Age</h2>
              <p>
                In a world dominated by screens and social networks, the gods discovered 
                a new source of power: influence. Instead of temples, mortals now gather 
                on Mythoc, the largest divine platform ever created. Followers replaced 
                worshippers, and trends replaced rituals.
              </p>
            </div>
          </div>

          {/* CHALLENGE */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
            </div>
            <div className="context-content">
              <h2>The Challenge</h2>
              <p>
                Each god must rebuild influence from scratch while adapting to mortal 
                culture. Viral clips, interviews, events, blessings and curses now shape 
                their destiny. Fame is the new ambrosia. One mistake can cost thousands 
                of followers. One good moment can restore ancient glory.
              </p>
            </div>
          </div>
        </div>

        {/* LORE QUOTE */}
        <div className="lore-quote">
          <div className="quote-mark">"</div>
          <p>
            In this new world, power belongs not to the strongest, but to the most followed.
          </p>
          <div className="quote-author">— Mythoc Codex</div>
        </div>

        {/* GODS SECTION */}
        <div className="timeline gods-section">
          <div className="timeline-line"></div>

          {/* Poseidon */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Poseidon – God of the Oceans</h2>
              <p>
                Poseidon dominates Mythoc with wave-crashing clips and tempest energy. 
                His momentum is powerful but unstable; one wrong current and followers 
                scatter like foam. Ride the tide wisely to keep influence rising.
              </p>
            </div>
          </div>

          {/* Athena */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Athena – Goddess of Wisdom</h2>
              <p>
                Athena treats the board like a strategic puzzle. Every move is calculated, 
                every opportunity transformed into clever content. Calm and precise, she 
                inspires loyalty through intelligence alone.
              </p>
            </div>
          </div>

          {/* Aphrodite */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Aphrodite – Goddess of Beauty</h2>
              <p>
                Aphrodite captivates instantly. Trends bloom wherever she steps. Bonuses 
                turn into waves of admiration, and even penalties become iconic moments. 
                But influence gained quickly must be maintained carefully.
              </p>
            </div>
          </div>

          {/* Zeus */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Zeus – King of the Gods</h2>
              <p>
                Zeus rules with thunderous authority. His announcements shake the board, 
                drawing followers through sheer presence. But one flash of temper can 
                strike his influence down instantly.
              </p>
            </div>
          </div>

          {/* Artemis */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Artemis – Goddess of the Hunt</h2>
              <p>
                Artemis never moves randomly. Each step is a targeted strike, turning 
                bonus squares into legendary hunts. She doesn’t chase followers; 
                they chase her.
              </p>
            </div>
          </div>

          {/* Dionysos */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Dionysos – God of Festivals</h2>
              <p>
                Chaos, parties, and viral madness define Dionysos. Even penalties become 
                wild events that boost influence. Unpredictable, brilliant, and impossible 
                to ignore.
              </p>
            </div>
          </div>

          {/* Demeter */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Demeter – Goddess of Harvest</h2>
              <p>
                Demeter grows influence patiently. Soft nature clips and warm presence 
                transform simple squares into fields of opportunity. Even penalties 
                become chances to regrow stronger.
              </p>
            </div>
          </div>

          {/* Apollo */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Apollo – God of Light</h2>
              <p>
                Apollo shines with musical flair and radiant visuals. Bonus squares 
                become concerts; malus squares become dramatic twists. Stay in rhythm 
                to keep the spotlight.
              </p>
            </div>
          </div>

          {/* Hermes */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>
            <div className="context-content">
              <h2>Hermes – God of Speed</h2>
              <p>
                Fast-paced updates and witty messages make Hermes a master of momentum. 
                He moves quickly, turning tiny chances into massive influence—but speed 
                can make him miss key moments.
              </p>
            </div>
          </div>

          {/* Hephaistos */}
          <div className="context-block">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
            </div>
            <div className="context-content">
              <h2>Hephaistos – God of Creation</h2>
              <p>
                Hephaistos builds influence with creativity and craftsmanship. Ordinary 
                squares become clever inventions. Slow and deliberate, but unbreakable 
                when played wisely.
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};

export default Context;
