import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Dynamic font loader: looks in /public/fonts for LOST-LATE with common filenames.
const tryLoadLostLate = async () => {
  const candidates = [
    '/fonts/LOST-LATE.woff2',
    '/fonts/LOST-LATE.woff',
    '/fonts/LOST-LATE.ttf',
    '/fonts/LOST_LATE.woff2',
    '/fonts/LOST_LATE.ttf',
    '/fonts/LOST LATE.ttf',
  ];
  const getFormat = url => {
    if (url.endsWith('.woff2')) return 'woff2';
    if (url.endsWith('.woff')) return 'woff';
    if (url.endsWith('.ttf')) return 'truetype';
    return 'truetype';
  };
  for (const url of candidates) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res && res.ok) {
        const fmt = getFormat(url);
        const style = document.createElement('style');
        style.innerHTML = `@font-face{ font-family: 'LOST LATE'; src: url('${url}') format('${fmt}'); font-weight: 400 900; font-style: normal; font-display: swap; }`;
        document.head.appendChild(style);
        console.log('[LOST LATE] Font loaded from', url);
        return true;
      }
    } catch (err) {
      // ignore, try next
    }
  }
  return false;
};
tryLoadLostLate();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
