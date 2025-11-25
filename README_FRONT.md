Influence of Gods — Frontend enhancements

What's included:
- Floating rounded navbar that transforms into a burger on scroll
- Home page with hero and a cloud entrance animation
- Rules, Credits, Context, and Dice dedicated pages
- Dice popup modal in bottom-right, opens inline Dice component
- Global theme variables (colors, fonts)

How to run locally:

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm start
```

If port 3000 is in use, run with a different port:

```bash
PORT=3001 npm start
```

Files added / modified:
- `src/components/NavBar/NavBar.jsx`, `NavBar.css`
- `src/pages/Home/Home.jsx`, `Home.css`
- `src/pages/Rules/Rules.jsx`, `Rules.css`
- `src/pages/Credits/Credits.jsx`, `Credits.css`
- `src/pages/Context/Context.jsx`, `Context.css`
- `src/pages/DicePage/DicePage.jsx`, `DicePage.css`
- `src/components/DiceModal/DiceModal.jsx`, `DiceModal.css`
- `src/App.js` updated to handle routing and global components
- `src/index.css` updated with fonts and global theme variables
- `package.json` updated with `react-router-dom` dependency

Next steps / Suggestions:
- Add real logo asset and hero background illustration
- Hook up actual rules/context text and images
- Add card listing page and connect CardDeck
- Add transitions and small UI polish (icons, less bright backgrounds)
