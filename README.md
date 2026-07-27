# Chroma Kitchen

A synthwave-themed restaurant landing page — a **practice project from **The Odin Project** curriculum.

## Live Preview
https://bochangzhu.github.io/Restaurant-Page/

### 1. Webpack Configuration
Got hands-on with configuring Webpack from scratch.
- **Module rules** to handle different asset types — images (`.png`, `.svg`), fonts (`.woff`/`.woff2`), and CSS — so they can be `import`-ed directly in JS (see `homeUtil.js`, `style.css`).
- **Plugins** to inject the bundled CSS/JS into the HTML template and generate the final output.

### 2. npm Configuration
Managing `package.json`.
- using the `overrides` field to manually switch dependency (`fast-uri`) to a patched version.

### 3. Page Layout
- Nested grids for the Home, Menu, and About sections (`grid-template`, `place-items`, responsive column/row spans).
- Custom fonts, neon-style text shadows, and background overlays.

### 4. Basic UI Logic
vanilla JS to control page state:
- A single `#content` container that swaps sections (Home / Menu / About) based on nav button clicks.

## Stack

Vanilla JavaScript, CSS Grid, Webpack.

## Deployment

Use git subtree command to push the built dist contents to the gh-pages branch.
