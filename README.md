[![CI](https://github.com/KerryCX/kerryclements.com/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/KerryCX/kerryclements.com/actions/workflows/ci.yml)

# kerryclements.com

My personal website. A place to showcase my frontend and UX work, and
eventually home to some useful small apps.

**Live site:** https://kerryclements.com - start at the [portfolio](https://kerryclements.com/portfolio)

## Stack

- React
- TypeScript
- Vite

## Project structure

src/
├── components/ # Shared components used across multiple pages (Nav, Footer, ExternalRedirect)
├── pages/ # Route-level page components
│ ├── portfolio/ # Case study pages for each project
│ ├── personal/ # Personal articles (outside the professional portfolio)
│ └── apps/ # Small standalone apps
├── routes/ # Route definitions, grouped by section
│ ├── router.tsx # createBrowserRouter, composes all route arrays
│ ├── portfolioRoutes.tsx # /portfolio/_ routes
│ └── personalRoutes.tsx # /personal/_ routes
└── styles/ # Shared, non-module CSS (design tokens, global scope files)

### Routing convention

Routes are grouped by section into their own file under `routes/`
(e.g. `portfolioRoutes.tsx`, `personalRoutes.tsx`), each exporting a
`RouteObject[]`. `routes/router.tsx` composes these arrays alongside
any standalone top-level routes into a single `createBrowserRouter`
call. `App.tsx` only renders `RouterProvider`, it doesn't define
routes itself.

When a section's routes grow past a handful of entries, it gets its
own file following this pattern rather than staying inline in the
main router.

### Styling

Each page or component that needs its own styles uses a CSS Module
(`ComponentName.module.css`), scoped locally. Design tokens shared
across a group of related pages (for example, everything under
`/personal`) live in a plain, non-module CSS file in `styles/` and are
imported directly, so the custom properties resolve globally within
that scope without duplicating the token block per file.

### Code conventions

- Full descriptive names for variables and functions (`humanVsHuman`,
  not `hvh`)
- JSDoc (`/** */`) comments only above functions and components, so
  they surface on hover in editors
- Regular (`//`) comments elsewhere outside function bodies; no
  inline comments inside function bodies
- Conventional Commits for branch names and commit messages
  (`feat/`, `fix/`, `chore/`, `docs/`, `refactor/`)

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
