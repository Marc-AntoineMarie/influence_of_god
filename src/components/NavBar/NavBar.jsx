import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 80;
      setCompact(scrolled);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing route
    setOpen(false);
  }, [location]);

  return (
    <nav className={`floating-nav ${compact ? 'compact' : ''}`} aria-label="Main navigation" role="navigation">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <div className="logo-mark">⚡</div>
            <div className="logo-text">Influence of Gods</div>
          </Link>
        </div>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/rules" className="nav-link highlight">Règles</Link>
          <Link to="/dice" className="nav-link">Dé</Link>
          <Link to="/context" className="nav-link">Contexte</Link>
          <Link to="/credits" className="nav-link">Crédits</Link>
        </div>

        <button className={`nav-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
