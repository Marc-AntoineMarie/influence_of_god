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
          <p className="hero-sub">Ancient myths and modern design — follow the gods.</p>
          <div className="hero-actions">
            <Link to="/rules" className="button primary">Read the rules</Link>
            <Link to="/dice" className="button secondary">Roll the dice</Link>
          </div>

        </div>
      </section>

      <section className="content intro">
        <div className="card">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
            risus non velit tincidunt facilisis. Integer porttitor arcu et tellus
            ultrices, nec faucibus urna dictum.
          </p>
        </div>
        <div className="card">
          <h2>Features</h2>
          <ul>
            <li>Design inspired by antiquity</li>
            <li>Modern animations and interactions</li>
            <li>Dice popup and dedicated dice page</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
