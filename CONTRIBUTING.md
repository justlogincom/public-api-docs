# Contributing to public-api-docs

This document describes the architecture, coding patterns, and standards for this repository. The AI PR reviewer reads this file — keep it accurate.

---

## Architecture

### Overview

`public-api-docs` is a static documentation site built with [Astro](https://astro.build) and the [Starlight](https://starlight.astro.build) theme. It publishes JustLogin's public API documentation to GitHub Pages from the `gh-pages` branch.

```
src/
├── assets/          # Images and static assets referenced in docs
├── content/
│   ├── docs/        # Markdown/MDX documentation pages (one file = one route)
│   └── config.ts    # Starlight content collection schema
└── env.d.ts
astro.config.mjs     # Astro + Starlight site configuration
```

There is no backend, no database, and no authentication layer — this is a purely static site.

### Content

All documentation lives in `src/content/docs/` as `.md` or `.mdx` files. File paths map directly to URL routes. Starlight auto-generates the sidebar from the directory structure and frontmatter.

### Build Output

`npm run build` produces a static `./dist/` folder deployed to GitHub Pages.

---

## Coding Standards

### Adding or Updating Documentation

1. Create or edit `.md` / `.mdx` files under `src/content/docs/`.
2. Include a frontmatter block with at least `title`:
   ```yaml
   ---
   title: Your Page Title
   description: Optional short description shown in meta tags
   ---
   ```
3. Use standard Markdown for content. MDX is available for embedding Astro components.
4. Images go in `src/assets/` and are referenced with relative paths.
5. Static files (e.g. PDFs, favicons) go in `public/`.

### Naming Conventions

| Artifact | Convention | Example |
|---|---|---|
| Doc pages | `kebab-case.md` | `authentication-overview.md` |
| Directories | `kebab-case/` | `payroll/`, `leave-management/` |
| Assets | `kebab-case.ext` | `architecture-diagram.png` |

### Configuration Changes

Edit `astro.config.mjs` for sidebar structure, site metadata, and Starlight theme options. Keep sidebar entries ordered logically (overview first, then detail pages).

---

## Pull Request Guidelines

- Target the `gh-pages` branch for all content and configuration PRs.
- Every PR must build with **0 errors** (`npm run build`).
- Keep PRs focused — one topic area or feature per PR.
- PR title should be imperative and concise (e.g., `Add payroll API reference docs`).
- The AI reviewer will APPROVE or REQUEST_CHANGES automatically. Address all `critical` and `warning` severity issues before requesting human review.
