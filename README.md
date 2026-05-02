# Sigma Gym Fitness — React Website

## Quick Start

```bash
npm install
npm start        # → http://localhost:3000
npm run build    # production build
```

## The RTL Fix (What Was Wrong & How It's Fixed)

**Root cause:** `index.css` had `direction: rtl` on `html` and `body`.  
This flipped the layout direction of **every** section — not just the Arabic Hero.

**Symptoms:**
- All LTR sections (About, Coaches, Equipment, Footer) had content pushed to the wrong side
- Header logo and nav were mirrored
- Equipment card `borderLeft` accents appeared on the wrong edge

**Fix applied:**
1. `index.css` — removed global `direction: rtl`. Body is now explicitly `direction: ltr`.
2. `Hero.jsx` — `dir="rtl"` stays on the `<section>` tag only (scoped, doesn't leak).
3. `App.js` — root `<div>` has `direction: ltr` as a safety net.
4. `shared.jsx` — `Section` and `SectionTitle` both set `direction: ltr` explicitly.
5. All other components — `direction: ltr` inline on their root elements.
6. Fixed `cursor: poCairo` typo → `cursor: pointer` in Coaches, Footer, Header.

## Project Structure

```
sigma-gym-fitness/
├── public/index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css            ← LTR global, Tailwind directives
│   ├── tokens.js            ← Colors, animation variants, data
│   └── components/
│       ├── Logo.jsx
│       ├── Header.jsx       ← LTR, sticky navbar
│       ├── Hero.jsx         ← RTL scoped to <section dir="rtl">
│       ├── About.jsx        ← LTR
│       ├── Coaches.jsx      ← LTR
│       ├── Equipment.jsx    ← LTR, 3 galleries
│       ├── Footer.jsx       ← LTR, contact + map + form
│       └── shared.jsx       ← LTR Section, SectionTitle, hook
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Adding the Coach Photo

Place your coach image at `public/gym-coach.png`.  
It renders as a full-height background on the right side of the Hero (desktop only).

## Customization

| File | What to change |
|------|---------------|
| `tokens.js` | Brand colors, coaches array, gallery items |
| `Hero.jsx` | Arabic headline, badge text, stats |
| `Footer.jsx` | Phone, email, address, social links |
| `public/gym-coach.png` | Hero background photo |
