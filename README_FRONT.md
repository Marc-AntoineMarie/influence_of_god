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
			1. Place the font file into `public/fonts/` (recommended file names — avoid spaces in the filename):
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

	*Clouds were removed* — if you'd like them re-enabled later, tell me.
			- The site name runs a cloud intro animation (site appears from clouds). The animation runs on first visit; it can be skipped by pressing the "Skip" button or by swiping left/right on mobile.
		- If you'd like the clouds to replay, clear sessionStorage or remove the `intro_skipped` key in your session storage.
	## Cloud intro animation

	- The site now has a cloud intro animation (site appears from clouds). The animation runs on first visit; it can be skipped by pressing the "Passer" button or by swiping left/right on mobile.
	- If you'd like the clouds to replay, clear sessionStorage or remove the `intro_skipped` key in your session storage.

	Dynamic font loader
		- The site will try to detect LOST LATE automatically from `public/fonts/` at runtime and register it dynamically using multiple filename candidates (WOFF2/WOFF/TTF). The dynamic loader handles common filename variants (`LOST-LATE`, `LOST_LATE`, and `LOST LATE` / escaped `%20`), but using hyphens or underscores is recommended. If a compatible font is found the site will show the proper typography. If not found, the site falls back to Inter / system fonts.

Debug steps if you still don't see LOST LATE:
1. Confirm the font file is in `public/fonts/` and **not** `public/font/` (plural is required).
2. Rename the file to a safe name (no spaces) like `LOST-LATE.woff2`.
3. Open developer tools → Network tab → reload page and filter by "font" — you should see a request for `/fonts/LOST-LATE.woff2` (or the filename you used).
4. Check the console for the message: `[LOST LATE] Font loaded from /fonts/LOST-LATE.woff2` (or similar).
5. If you still don't see it, put this explicit rule in `src/index.css` (or `public/index.html`) to reference the font directly:

```css
@font-face{
	font-family: 'LOST LATE';
	src: url('/fonts/LOST-LATE.woff2') format('woff2');
	font-weight: 400 900;
	font-style: normal;
	font-display: swap;
}
```
- Hook up actual rules/context text and images
- Add card listing page and connect CardDeck
- Add transitions and small UI polish (icons, less bright backgrounds)

Add an official app logo
------------------------
To replace the textual title and the default lightning mark with your official app logo, follow these steps:

1. Add your logo file to the `public/` folder. Recommended filename candidates:
	- `logo.svg` (preferred for crisp scaling)
	- `logo.png` (high-res fallback)
	- `logo@2x.png` (optional high-DPI fallback)

2. The project includes a reusable `Logo` component (`src/components/Logo/Logo.jsx`) that tries to load `/logo.svg`, then several fallback names if the first attempt fails. The component automatically renders text fallback if no logo file is available.

3. The `NavBar` and the home hero now use this `Logo` component. If you want to remove the lightning mark entirely, edit `src/components/NavBar/NavBar.jsx` and remove the `<div className="logo-mark">⚡</div>` node, or replace it with a brand mark image:

	- Replace the lightning mark with an image:

	```jsx
	<div className="logo-mark">
	  <img src="/brand-mark.svg" alt="App mark" />
	</div>
	```

4. Alternatively, hide the mark using CSS by changing or removing the `.logo-mark` styles in `src/components/NavBar/NavBar.css`.

Notes:
- The `Logo` component accepts a `className` prop for variants (e.g., `logo-hero` for the large hero form or `compact` for the smaller navbar usage). Adjust the image in `public/` to match the desired aspect ratio.
- Prefer `SVG` for logos for infinite scaling.
