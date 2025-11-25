Influence of Gods — Frontend enhancements

What's included:
- Floating rounded navbar that transforms into a burger on scroll
- Home page with hero and a cloud entrance animation
- Rules, Credits, Context, and Dice dedicated pages
- Dice popup modal in bottom-right, opens inline Dice component
- Global theme variables (colors, fonts)
	- Colors:
		- Blanc: #eeeae8
		- Malediction (rouge): #c6694e
		- Benediction (bleu): #7fa8bd (predominant)
		- Event (orange): #e7a566
		- Interview (vert): #afb252

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
	- Add real logo asset and hero background illustration. Drop your card artwork in `public/aphrodite-card.png`. The home page loads `/aphrodite-card.png` as a hero card preview.
		- Add real logo asset and hero background illustration. Drop your card artwork in `public/aphrodite-card.png` if you want a default hero card preview (optional).
		- To use the LOST LATE font sitewide:
			1. Place the font file into `public/fonts/` (recommended file names):
				- `LOST-LATE.woff2` (preferred)
				- `LOST-LATE.woff`
				- `LOST-LATE.ttf`
			2. Then add the @font-face rule in `src/index.css` or `public/index.html`:

	```css
	@font-face{
		font-family: 'LOST LATE';
		src: url('/fonts/LOST LATE.ttf') format('truetype');
		font-weight: 400 900;
		font-style: normal;
		font-display: swap;
	}
	```

	*Les nuages ont été retirés* — si tu veux les réactiver plus tard, dis-moi.
		- The site now has a cloud intro animation (site appears from clouds). The animation runs on first visit; it can be skipped by pressing the "Passer" button or by swiping left/right on mobile.
		- If you'd like the clouds to replay, clear sessionStorage or remove the `intro_skipped` key in your session storage.
	## Cloud intro animation

	- The site now has a cloud intro animation (site appears from clouds). The animation runs on first visit; it can be skipped by pressing the "Passer" button or by swiping left/right on mobile.
	- If you'd like the clouds to replay, clear sessionStorage or remove the `intro_skipped` key in your session storage.

	Dynamic font loader
	- The site will try to detect LOST LATE automatically from `public/fonts/` at runtime and register it dynamically using multiple filename candidates (WOFF2/WOFF/TTF). If a compatible font is found the site will show the proper typography. If not found, the site falls back to Inter / system fonts.
- Hook up actual rules/context text and images
- Add card listing page and connect CardDeck
- Add transitions and small UI polish (icons, less bright backgrounds)
