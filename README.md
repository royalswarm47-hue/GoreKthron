# GoreKthron — Minecraft Cheat Client Website

Premium 2-page marketing and purchase website for **GoreKthron**, a Minecraft cheat client. Built as static HTML/CSS/JS files served from a TanStack Start / Netlify project's `public/` directory.

## Pages

| Page | File | Description |
|------|------|-------------|
| Landing | `public/index.html` | Hero, features, stats, showcase, pricing, testimonials, FAQ, footer |
| Purchase | `public/buy.html` | Plan selection, checkout form, payment, order summary, success state |

## Tech Stack

- **Three.js** (CDN) — interactive 3D particle system in the hero section
- **CSS** — glassmorphism, 3D transforms, scroll animations, Intersection Observer
- **Vanilla JS** — no framework required; all logic in `public/script.js`
- **Google Fonts** — Orbitron (headings), Inter (body), Rajdhani (prices)
- **TanStack Start** — project scaffold and Netlify deployment

## Key Features

- **3D Particle Hero** — 700 particles morph between sphere → helix → crystal; react to mouse movement
- **RU/EN Language System** — full bilingual content, saved to localStorage, defaults to Russian
- **3D Feature Cards** — CSS perspective tilt on mouse movement
- **Animated Stats Counter** — counts up from 0 when scrolled into view
- **3D Carousel** — auto-rotating screenshot showcase with dot/arrow controls
- **Pricing Cards** — center "popular" card elevated, 3D hover lift
- **Auto-scroll Testimonials** — infinite marquee, pauses on hover
- **FAQ Accordion** — smooth CSS max-height expand/collapse
- **Buy Page** — plan selector, floating label form, payment method switcher, sticky order summary, success overlay with confetti
- **Fully Responsive** — mobile-first, reduced particles on mobile, hamburger menu

## Running Locally

```bash
npm install
npm run dev
# Visit http://localhost:3000 or http://localhost:8888 (Netlify CLI)
```

Or simply open `public/index.html` directly in a browser (no server required for static pages).

## Design System

All CSS custom properties are defined in `public/style.css` under `:root`. Primary palette is deep purple (`#050508` background → `#B54CFF` neon) with cyan accent (`#00E5FF`).
