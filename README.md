# Serene Coastline Portfolio (Single Page)

A light, elegant CV/portfolio single-page site using React + Vite + Tailwind v4 + Motion.
Theme: Serene Coastline (Deep Cyan + Light Blue + Mint), subtle hero gradient, calm animations.

## Quick start

1) Install dependencies
```bash
npm install
```

2) Run dev server
```bash
npm run dev
```

Open http://localhost:5173

## Editing your content

Update `src/data/portfolio.ts` (profile, skills, projects, experience, education).
Replace CV PDF at `public/assets/cv.pdf`.

## Optional: connect to Go backend

Create `.env` from `.env.example` and set:
```
VITE_API_BASE_URL=http://localhost:8080
```

Frontend will try to fetch:
- /api/profile
- /api/skills
- /api/projects
- /api/experience
- /api/education

If not set (default), it uses local data.

## Build

```bash
npm run build
npm run preview
```
