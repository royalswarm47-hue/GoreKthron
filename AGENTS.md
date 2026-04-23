# AGENTS.md — GoreKthron Project

## Project Overview

Premium 2-page static website for GoreKthron (Minecraft cheat client), scaffolded on TanStack Start and deployed to Netlify. The actual website lives in `public/` as static HTML/CSS/JS — the TanStack Start framework is present but the main deliverable is the static site.

## Directory Structure

```
public/
├── index.html       # Landing page (hero, features, stats, carousel, pricing, testimonials, FAQ, footer)
├── buy.html         # Purchase page (plan selection, checkout form, payment, order summary)
├── style.css        # All styles — single file, organized by section with clear comments
└── script.js        # All JS — Three.js 3D, i18n, animations, form logic

src/                 # TanStack Start app (not modified; coexists with static pages)
netlify.toml         # Build/deploy config
```

## Architecture Decisions

### Static Files in `public/`
The marketing site is fully static HTML/CSS/JS placed in `public/`. Netlify serves this directory directly. No build step needed for the website itself.

### Single CSS + JS File
All styles in `style.css`, all logic in `script.js`. Avoids module complexity for a static site. Use `/* ── SECTION ── */` comment markers for navigation.

### JavaScript Structure
`script.js` has these major sections:
1. **TRANSLATIONS** object — all RU/EN strings, keyed by language code
2. **Three.js Particle System** — `initThree()`, lazy-loaded via dynamic `<script>` tag
3. **Language System** — `setLang()`, `applyTranslations()` rebuilds DOM sections
4. **UI Modules** — `initStats()`, `initCarousel()`, `initTiltCards()`, `initFAQ()`, `initScrollAnimations()`
5. **Buy Page Logic** — `initBuyPage()` (plan selection, payment method, form validation, success overlay)

### i18n Pattern
Content-heavy sections (features, stats, testimonials, FAQ, pricing) are rendered entirely by `applyTranslations()` using `innerHTML`. Changing language re-renders those sections. Static sections use `data-i18n` attributes for simple text swap.

### Three.js Particle Morphing
Three shapes are pre-computed as `Float32Array` buffers (posA=sphere, posB=helix, posC=crystal). Morphing lerps between buffers each frame with cubic easing. Shape holds for 5s, morphs over 3s. Mouse interaction adds parallax rotation.

## Coding Conventions

- **No framework** for the static pages — vanilla JS, no npm dependencies at runtime
- **CSS custom properties** for all design tokens in `:root`
- **Glassmorphism**: `backdrop-filter: blur(20px)` + `rgba()` backgrounds + subtle borders
- **Responsive**: mobile breakpoint at 768px (hamburger, single-column), 1024px (reduced columns)
- Three.js loaded via CDN with dynamic `<script>` after DOMContentLoaded to avoid blocking render
- Connection lines between particles are desktop-only for performance
- Buy page reads `?plan=0|1|2` from URL so pricing "Buy Now" links pre-select the correct plan
- Testimonials duplicate the array for seamless infinite CSS marquee
- `applyTranslations()` serves as the single render function for all dynamic sections

## Project Overview

An interactive resume/portfolio application with an AI-powered assistant. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI with multi-provider support |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   ├── logo.png
│   ├── tanstack-circle-logo.png
│   └── tanstack-word-logo-white.svg  # TanStack wordmark logo (white) used in header/nav.
├── src
│   ├── components
│   │   ├── Header.tsx  # Header.
│   │   ├── HeaderNav.tsx  # Navigation sidebar template: mobile menu, Home link, add-on routes; EJS-driven for dynamic route generation.
│   │   ├── ProductAIAssistant.tsx  # AI marketing assistant.
│   │   └── ProductRecommendation.tsx  # Product recommendation card.
│   ├── data
│   │   └── products.ts  # Product catalog data template.
│   ├── lib
│   │   ├── product-ai-hook.ts  # useProductChat hook.
│   │   └── product-tools.ts  # AI tools: getProducts, recommendProduct.
│   ├── routes
│   │   ├── products
│   │   │   └── $productId.tsx  # Product detail page with recommendation.
│   │   ├── __root.tsx  # Root layout: Header, styles.
│   │   ├── api.product-chat.ts  # POST handler for product AI chat.
│   │   └── index.tsx  # Marketing home with ProductAIAssistant.
│   ├── store
│   │   └── product-assistant.ts  # Zustand store for assistant state.
│   ├── router.tsx  # TanStack Router setup: creates router from generated routeTree with scroll restoration.
│   └── styles.css  # Global styles.
├── .gitignore  # Template for .gitignore: node_modules, dist, .env, .netlify, .tanstack, etc.
├── AGENTS.md  # This document provides an overview of the project structure for developers and AI agents working on this codebase.
├── netlify.toml  # Netlify deployment config: build command (vite build), publish directory (dist/client), and dev server settings (port 8888, target 3000).
├── package.json  # Project manifest with TanStack Start, React 19, Vite 7, Tailwind CSS 4, and Netlify plugin dependencies; defines dev and build scripts.
├── pnpm-lock.yaml
├── tsconfig.json  # TypeScript config: ES2022 target, strict mode, @/* path alias for src/*, bundler module resolution.
└── vite.config.ts  # Vite config template: TanStack Start, React, Tailwind, Netlify plugin, and optional add-on integrations; processed by EJS.
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - Route for `/`
- `api.*.ts` - Server API endpoints (e.g., `api.resume-chat.ts` → `/api/resume-chat`)

### Component Architecture

**UI Primitives** (`src/components/ui/`):
- Radix UI-based, Tailwind-styled
- Card, Badge, Checkbox, Separator, HoverCard

**Feature Components** (`src/components/`):
- Header, HeaderNav, ResumeAssistant

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind, Content Collections |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `content-collections.ts` | Zod schemas for jobs and education frontmatter |
| `styles.css` | Tailwind imports + CSS custom properties (oklch colors) |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

### Naming
- Components: PascalCase
- Utilities/hooks: camelCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes
- `cn()` helper for conditional class merging
- CSS variables for theme tokens in `styles.css`

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
- Zod for runtime validation
- Type-only imports with `type` keyword

### State Management
- React hooks for local state
- Zustand if you need it for global state
### Marketing Site with AI Assistant

Marketing site with TanStack AI chat assistant. No Stripe checkout.

**AI tools available:**
- `getProducts` - Get all products from catalog
- `recommendProduct` - Display product recommendation card (MUST use for recommendations)

**Components:** ProductAIAssistant, ProductRecommendation

**Dependencies:** @tanstack/ai, streamdown

## Environment Variables

For AI: ANTHROPIC_API_KEY, OPENAI_API_KEY, GEMINI_API_KEY, or OLLAMA_BASE_URL (same as ai add-on).

## Application Name

This starter uses "Application Name" as a placeholder throughout the UI and metadata. Replace it with the user's desired application name in the following locations:

### UI Components
- `src/components/Header.tsx` — app name displayed in the header
- `src/components/HeaderNav.tsx` — app name in the mobile navigation header

### SEO Metadata
- `src/routes/__root.tsx` — the `title` field in the `head()` configuration

Search for all occurrences of "Application Name" in the `src/` directory and replace with the user's application name.
