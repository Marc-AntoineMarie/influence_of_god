<!--
  README for the 'Influence of Gods' project.
  This file presents a clean project overview, how to run the site locally and edit core game content.
-->

# Influence of Gods — Digital Companion & Board Game

Influence of Gods is a small React-powered web app that serves as a digital companion for a tabletop board game. The project pairs a mythic theme of gods and fate with a modern, refined interface: a hero presentation, route-specific themed pages and a small interactive dice mechanic.

The app is a frontend skeleton built with React. It exposes a clear set of pages for rules, context, credits, and an interactive dice module (click to roll) that can be used directly from a floating modal or a dedicated dice page.

---

## Table of contents
- About the project
- Gameplay (summary & suggestions)
- Features
- Tech stack
- Project structure
- Run & build
- Fonts, logos & assets
- Customization / Theming
- Contribution & Next steps

---

## About the project
This repository contains a responsive single-page React app that acts as a polished UI companion for the board game: it helps players read rules, roll dice, see the narrative context, and preview cards.

Key goals:
- Provide a lightweight, modern presentation for the game's rules and assets
- Offer a consistent, accessible UI with an elegant typographic theme
- Provide a robust dice component suitable for digital roll resolution

The interface is intentionally minimalistic, with a floating, rounded navigation that compresses into a burger menu on scroll. Colors are driven by CSS variables to maintain a consistent brand palette.

---

## Gameplay (summary & suggestions)
The site content is currently a companion to the board game: the rules are intentionally concise and ready to be replaced with your final rule book. Below is a suggested high-level rules summary that fits the app’s design (addresses dice + cards + turn structure). Use these as a starting point for the rules page (`src/pages/Rules/Rules.jsx`).

Suggested overview:
- Number of players: 2–6 (plays best with 3–5)
- Objective: Accruing the most Influence points (or highest standing with the gods) before the final round.
- Game flow:
  1. Setup — Shuffle the god cards / card deck and deal starting items to each player.
 2. Turn structure — Players take turns performing actions (draw a card, play an ability card, or roll a die to resolve a challenge). The dice roll determines success or triggers a divine reaction.
 3. Influence & cards — Cards represent gods, blessings, or curses. Cards modify dice outcomes or grant bonuses that change how influence is scored.
 4. End-of-round and scoring — After the round limit (or after a set number of phases), collect earned Influence and determine the winner.

Why the app is useful: roll resolution (via the 3D cube) is animated and visual. The dice modal is a quick alternative to the physical dice for playtesting or remote sessions.

Note: The actual rules are stored on the Rules page — if you want them reflected here automatically, update `src/pages/Rules/Rules.jsx` and the main README will remain a short and friendly project overview.

---

## Features (what the app includes)
- Floating, rounded `NavBar` that compresses into a burger on scroll
- Hero page with title and subtitle (uses the `LOST LATE` font) and a centered hero logo
- `Rules`, `Context`, and `Credits` pages for text content and documentation
- `Dice` component: 3D cube with animated roll and a disappearing/returning state
- `DiceModal`: floating dice quick access button (bottom-right) and a dedicated `/dice` page
- Card preview and card deck placeholders for art and interactivity
- Global design tokens (colors & fonts) are defined in `src/index.css` and used across components

---

## Tech stack
- React (Create React App)
- React Router
- CSS with variables for theming
- framer-motion for the dice animation
- Static asset hosting served from `public/`

---

## Project structure (important pages and components)
- `src/App.js` – Router & global container
- `src/pages/Home/Home.jsx` – Hero / CTA and introductory content
- `src/pages/Rules/Rules.jsx` – Game rules (editable)
- `src/pages/Context/Context.jsx` – Story & domain background
- `src/pages/Credits/Credits.jsx` – Credits & acknowledgements
- `src/pages/DicePage/DicePage.jsx` – dedicated dice page
- `src/components/NavBar` – floating nav with theming
- `src/components/Dice` – 3D dice component (framer-motion)
- `src/components/DiceModal` – floating dice quick access
- `src/components/Logo` – reusable Logo component with fallback text
- `src/components/CardPreview` – preview card component that displays art on the home page
- `public/` – static assets, fonts, and uploaded images (place your logo and fonts here)

---

## Run locally
Make sure Node (>=16) / npm are installed. Then:

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser. Use `npm run build` to produce the optimized production build.

---

## Fonts, logos & assets
The project expects a custom font `LOST LATE` in `public/fonts/` if you want to show the correct typographic style.

Recommended filenames (runtime auto-detect):
- `LOST-LATE.woff2` (preferred)
- `LOST-LATE.woff`
- `LOST-LATE.ttf`

If you have a hero image or app logo, add them to `public/` and the `Logo` component will try to load `logo.svg`, `logo.png`, `logo@2x.png`, `logo.webp` or use the fallback text.

If you want to force-add the font, add a static `@font-face` rule either in `public/index.html` or `src/index.css`:

```css
@font-face {
  font-family: 'LOST LATE';
  src: url('/fonts/LOST-LATE.woff2') format('woff2');
  font-weight: 400 900;
  font-style: normal;
  font-display: swap;
}
```

---

## Theming & colors
The app exposes theme tokens in `src/index.css` (e.g. `--benediction`, `--malediction`, `--dice`) and RGB variants — use these tokens to customize accents consistently. The nav uses per-route color mapping to apply a small colorized accent per page.

---

## Dice component implementation details
- The `Dice` component uses framer-motion and an animated cube. A click on the die triggers a 1.5s animation and the final face is shown.
- The dice modal at bottom-right opens the dice inline and the dedicated dice page presents the same dice in bigger size.

---

## TODO / Next steps
- Replace placeholder lorem text in pages with the final rules and story text
- Add card deck listing and wire interactive card mechanics
- Add multi-language support with i18n for French & English (the site started as French-first)
- Add automated tests and CI for build checks

---

## Contributing
All contributions are welcome. If you are not sure where to start, open an issue describing the feature or bug and assign a label.

Common tasks:
- Replace `public/logo3.jpg` with a hero logo asset
- Add rules content in `src/pages/Rules/Rules.jsx` and update the list of examples
- Provide `LOST-LATE.woff2` in `public/fonts/` so headings render correctly

---

## License & credits
Add here your license statement (MIT, GPL, etc.). Credit any assets and contributors in `src/pages/Credits/Credits.jsx`.

---

If you'd like, I can also generate a simplified 'Game rules' PDF, format the site content as a printable rules page, or add a language switcher for French / English translations.# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
