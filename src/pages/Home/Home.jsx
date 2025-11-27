import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Logo from '../../components/Logo/Logo';

const Home = () => {
  

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-container">
          <h1 className="hero-title"><Logo className="logo-hero" src="/logo3.svg" text="Influence of Gods" /></h1>
          <p className="hero-sub">From forgotten temples to glowing screens — the gods still want followers.</p>
          <div className="hero-actions">
            <Link to="/rules" className="button primary">Read the rules</Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
