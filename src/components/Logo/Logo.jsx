import React, { useState } from 'react';
import './Logo.css';

const Logo = ({ src = '/logo.jpg', text = 'Influence of Gods', className = '' }) => {
  // try multiple candidates for logo file (svg/png/webp) in order
  const candidates = [src, '/logo.svg', '/logo.png', '/logo@2x.png', '/logo.webp'];
  const [logoUrl] = useState(candidates[0]);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`logo-root ${className}`}>
      <img
        className={`logo-image ${loaded ? 'visible' : 'hidden'}`}
        src={logoUrl}
        alt={text}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Logo;