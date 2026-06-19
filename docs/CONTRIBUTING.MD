# Branch naming conventions

Branch prefixes follow [Conventional Commits](https://www.conventionalcommits.org/) vocabulary.
Format: `prefix/short-kebab-case-description`

## Prefixes

| Prefix      | Use for                                             | Example                      |
| ----------- | --------------------------------------------------- | ---------------------------- |
| `feat/`     | New capability that didn't exist before             | `feat/homepage`              |
| `fix/`      | Something that exists but behaves wrongly           | `fix/accessible-lightbox`    |
| `docs/`     | Documentation-only changes                          | `docs/ci-badge`              |
| `chore/`    | Tooling, config, dependencies no user-facing change | `chore/update-vite`          |
| `refactor/` | Restructuring with no behaviour change              | `refactor/extract-constants` |

## Deciding fix vs feat

Ask: does the capability already exist?

- Exists but broken for some users → `fix/`
- Doesn't exist at all → `feat/`

Accessibility gaps are **defects, not missing features**. A feature that works
for mouse users but not keyboard users is broken, not incomplete, WCAG
classifies these as failures. So accessibility repairs use `fix/`.

## Workflow reminder

`feature branch → dev → main via PR`

- `main` is protected; deploys to Netlify on push
- One concern per branch, one branch per PR
