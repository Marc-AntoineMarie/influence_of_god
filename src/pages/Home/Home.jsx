import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-container">
          <h1 className="hero-title">Influence of Gods</h1>
          <p className="hero-sub">Mythes antiques et design moderne — suivez les dieux.</p>
          <div className="hero-actions">
            <Link to="/rules" className="button primary">Lire les règles</Link>
            <Link to="/dice" className="button secondary">Lancer le dé</Link>
          </div>
        </div>
      </section>

      <section className="content intro">
        <div className="card">
          <h2>À propos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
            risus non velit tincidunt facilisis. Integer porttitor arcu et tellus
            ultrices, nec faucibus urna dictum.
          </p>
        </div>
        <div className="card">
          <h2>Fonctionnalités</h2>
          <ul>
            <li>Design inspiré par l'antique</li>
            <li>Animations modernes et interactions</li>
            <li>Popup dé et page dédiée au dé</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
