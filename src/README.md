# Shonie.dev

Personal site for **Oleksandr Starnikov** — Solution Architect, full-stack developer & data engineer.
Built on the Shonie.dev design system (dark, mint-accented, restrained). Plain static
HTML + React (via Babel-in-browser) — no build step, no dependencies to install.

## Run it

It's a static site. Either:

- Open `index.html` directly in a browser, **or**
- Serve the folder: `npx serve .` (recommended — relative asset paths load most reliably over http).

## Pages

| File | What it is |
|---|---|
| `index.html` | The portfolio — one scroll-snapped page (hero → expertise → approach → reviews → CV → contact). |
| `cv.html` | Print-ready A4 CV. The **Download PDF** button runs `window.print()`; `cv.html?print=1` auto-opens the print dialog. Save as PDF for a clean two-page résumé. |

## Structure

```
index.html              portfolio shell (loads React, Babel, lucide, then the JSX below)
cv.html                 CV shell
styles/
  colors_and_type.css   design-system tokens (colors, fonts, type scale) — single source of truth
components/
  Components.jsx         header, buttons, badge, card, Reveal, BrandIcon, book modal
  Sections.jsx           page sections + all portfolio copy/data
  CV.jsx                 the A4 CV (career data, contacts, print styles)
  App.jsx                composes the portfolio + wires the Tweaks panel
tweaks-panel.jsx         the in-page Tweaks UI (toggle from the toolbar)
assets/                 portrait, favicon, CV contact icons
```

## Editing content

- **Portfolio copy, capabilities, tech stack, review quotes** → `components/Sections.jsx` (data arrays at the top).
- **CV career history, blocks, contacts** → `components/CV.jsx` (`JOBS` array + Page Two blocks).
- **Colors / fonts / sizes** → `styles/colors_and_type.css`. Don't hardcode hex values elsewhere; use the `var(--token)`s.

### To fill in / replace
- **Reviews** in `Sections.jsx` are clearly-marked placeholders — swap in real client quotes.
- **Legal address** in `CV.jsx` (Contacts) is a placeholder (`Redacted St. …`) — drop in the real registered address.

## Tweaks (design directions)

Turn on **Tweaks** from the toolbar to explore overall directions without touching code:
- **Hero composition** — `split` / `centered` / `editorial`
- **Headings** — `roboto` / `ultra` (heavy slab display)
- **Mint glow** behind the hero on/off

Defaults live in `components/App.jsx` (`TWEAK_DEFAULTS`) — set your favorite there to make it permanent.

## GitHub workflow

This is a static export. To put it under version control / collaborate:

1. Download the project from here.
2. `git init` (or drop the files into your existing `shonie.dev` repo), commit, and push.
3. Deploy anywhere that serves static files (GitHub Pages, Netlify, Vercel, etc.).

> Note: the original repo (`shonie/shonie.dev`) is a Next.js app. This implementation is a
> dependency-free static version of the same site — useful as a fast, portable build. If you
> want it merged back into the Next.js codebase, the components map 1:1 (Header, Badge, Card,
> Section, CV) and the design tokens already match your `globals.css`.
