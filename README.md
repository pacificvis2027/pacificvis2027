# PacificVis 2027 — Busan, South Korea

The 20th IEEE Pacific Visualization Conference (PacificVis 2027) website, hosted in **Busan, South Korea**. Built as a 100% **static site** with **Next.js (App Router)**, **JavaScript (JSX)**, and **Tailwind CSS** — designed to be deployed on **GitHub Pages**.

## Tech stack

- **Framework**: Next.js 14 (App Router) — `output: 'export'` (Static Site Generation only, no SSR / no API routes)
- **Language**: JavaScript only (`.jsx` / `.js`). **No TypeScript.**
- **Styling**: Tailwind CSS 3 with a custom Busan ocean palette
- **Images**: regular HTML `<img>` tags + `images.unoptimized: true` to prevent broken images on GitHub Pages
- **Deployment target**: GitHub Pages (static `out/` directory)

## Project structure

```
.
├── app/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navbar with dropdowns + mobile menu
│   │   ├── Footer.jsx          # Footer + contact info
│   │   ├── Hero.jsx            # Busan ocean themed hero section
│   │   ├── About.jsx           # Conference history & host city
│   │   ├── ImportantDates.jsx  # Submission/notification dates (TBA)
│   │   ├── CallForPapers.jsx   # TVCG / Conference / Short / Posters / Storytelling / Workshops
│   │   ├── Keynotes.jsx        # Keynote speakers (TBA)
│   │   ├── Venue.jsx           # Busan map + venue details
│   │   ├── News.jsx            # Latest news / announcements
│   │   ├── Sponsors.jsx        # Sponsor placeholders
│   │   └── PreviousEvents.jsx  # 2008 → 2026 history table
│   ├── globals.css             # Tailwind base + custom utilities
│   ├── layout.jsx              # Root layout & metadata
│   └── page.jsx                # Home page composition
├── next.config.mjs             # `output: 'export'` + image / basePath notes
├── tailwind.config.js          # Busan ocean color palette & animations
├── postcss.config.js
├── jsconfig.json
├── package.json
└── README.md
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (http://localhost:3000)
npm run dev

# 3. Build a static export for GitHub Pages
npm run build
# → outputs the static site to ./out
```

## Deployment to GitHub Pages

The site is configured with `output: 'export'` and `trailingSlash: true`, so `npm run build` produces a fully static `out/` directory you can publish.

### 1) Root domain deploy (e.g. `pacificvis2027.github.io`)

No extra configuration is needed — just publish the contents of `out/` to the `main`/`gh-pages` branch.

### 2) Sub-path deploy (e.g. `pacificvis.github.io/2027/`)

Open `next.config.mjs` and uncomment the `basePath` and `assetPrefix` options:

```js
basePath: '/2027',
assetPrefix: '/2027/',
```

This ensures `/_next/...` and other static asset URLs resolve correctly under the sub-path. Re-run `npm run build` after changing.

### Disabling Jekyll on GitHub Pages

If you publish to GitHub Pages, add an empty file named `.nojekyll` at the root of your published artifact (e.g. inside `out/`) so that GitHub Pages does not strip files/folders that begin with an underscore (such as `_next`).

```bash
touch out/.nojekyll
```

## Design notes — Busan ocean theme

The palette evokes the **deep blue ocean of Busan**, the sparkling lights of the **Gwangan Bridge**, and the energy of the **Haeundae waves**:

- `ocean-950 → ocean-700` for backgrounds
- `wave-400 / wave-500` (cyan) as the primary accent
- A soft `linear-gradient(135deg, #062451 → #0c3a7a → #1f59cf → #06b6d4)` ocean gradient on the hero
- Animated floating pill, subtle radial glows, and a stylized SVG of Busan's skyline + bridge + waves

## Content TODO (post-skeleton)

The skeleton is intentionally filled with **TBA / placeholder content**. As organizing details solidify, the following should be filled in:

- [ ] Final conference dates and venue
- [ ] Keynote speakers (replace placeholders in `Keynotes.jsx`)
- [ ] Important dates (replace `'TBA'` values in `ImportantDates.jsx`)
- [ ] Committee members (a `Committee` page/section can be added)
- [ ] Sponsor logos (replace text placeholders in `Sponsors.jsx`)
- [ ] Real news items in `News.jsx`
- [ ] Travel pages (Airport, Visa, Accommodations, Tourist Attractions, Food)

## License

MIT — see `LICENSE` (to be added).
