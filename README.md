[![CI](https://github.com/KerryCX/kerryclements.com/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/KerryCX/kerryclements.com/actions/workflows/ci.yml)

# kerryclements.com

My personal website — a place to showcase my frontend and UX work, and
eventually home to some useful small apps.

**Live site:** https://kerryclements.com — start at the [portfolio](https://kerryclements.com/portfolio)

## Stack

- React
- TypeScript
- Vite

## Development workflow

Branch-based: feature branches merge into `dev` via PR, and `dev` merges
into a protected `main`. CI runs the test suite on every PR, and merging
is blocked until it passes.

## Running locally

```bash
npm install
npm run dev    # start the dev server
npm test       # run the test suite
```

## Deployment

Merging to `main` triggers an automatic deploy to Netlify.
