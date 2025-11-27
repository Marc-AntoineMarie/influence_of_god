import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import Logo from '../Logo/Logo';

const NavBar = () => {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const pathToColor = {
    '/': 'blue',
    '/rules': 'orange',
    '/dice': 'dice',
    '/context': 'green',
    '/credits': 'red',
  };
  const activeColor = pathToColor[location.pathname] || 'blue';

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
    <nav className={`floating-nav ${compact ? 'compact' : ''} color-${activeColor}`} aria-label="Main navigation" role="navigation">
      <div className="nav-inner">
        <div className="nav-left" aria-hidden>
          {/* left placeholder - we keep it for possible left actions */}
        </div>
        <div className="nav-center">
          <Link to="/" className="nav-logo" aria-label="Home">
            <Logo className={compact ? 'compact' : ''} />
          </Link>
        </div>

        <div className={`nav-links ${open ? 'open' : ''} color-${activeColor}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined}>Home</Link>
          <Link to="/rules" className={`nav-link ${location.pathname === '/rules' ? 'active' : ''}`} aria-current={location.pathname === '/rules' ? 'page' : undefined}>Rules</Link>
          {/* <Link to="/dice" className={`nav-link ${location.pathname === '/dice' ? 'active' : ''}`} aria-current={location.pathname === '/dice' ? 'page' : undefined}>Dice</Link> */}
          <Link to="/context" className={`nav-link ${location.pathname === '/context' ? 'active' : ''}`} aria-current={location.pathname === '/context' ? 'page' : undefined}>Context</Link>
          <Link to="/credits" className={`nav-link ${location.pathname === '/credits' ? 'active' : ''}`} aria-current={location.pathname === '/credits' ? 'page' : undefined}>Credits</Link>
        </div>

        <button className={`nav-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;