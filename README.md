# Kaviya S M— Portfolio

A modern, responsive personal portfolio built with React (Vite), Framer Motion, and React Icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── assets/
├── context/
│   └── ThemeContext.jsx      # dark/light mode provider
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx               # typing animation + canvas node-field background
│   ├── About.jsx
│   ├── Skills.jsx             # animated progress bars, grouped by category
│   ├── Projects.jsx           # technology filter + project grid
│   ├── ProjectCard.jsx
│   ├── Education.jsx          # timeline
│   ├── Certifications.jsx     # certifications + animated achievement counters
│   ├── Contact.jsx            # contact info + form
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx
│   ├── ScrollProgress.jsx
│   └── BackToTop.jsx
├── App.jsx
├── main.jsx
└── index.css                  # design tokens, resets, utilities
```

## Customizing

- **Photo**: replace the initials placeholder in `Hero.jsx` (`.hero-photo`) with an `<img>` tag pointing to a photo in `src/assets/`.
- **Resume**: drop your PDF in the `public/` folder as `resume.pdf` — the Download Resume button already links to `/resume.pdf`.
- **Projects**: edit the `projects` array in `src/components/Projects.jsx` — add your real GitHub and live demo links.
- **Contact form**: the form currently only simulates a submission. Wire it up to a service like Formspree, EmailJS, or your own backend inside `handleSubmit` in `Contact.jsx`.
- **Colors**: all colors are CSS variables defined in `src/index.css` under `:root`, `[data-theme='dark']`, and `[data-theme='light']` — change them there to re-theme the whole site.

## Tech stack

- React 18 + Vite
- Framer Motion (scroll reveals, hover/hero animations)
- React Icons (Feather icon set)
- Plain CSS with a token-based theme system (no framework)

## Portfolio 
[My Portfolio](https://kaviya-protfolio.vercel.app)
