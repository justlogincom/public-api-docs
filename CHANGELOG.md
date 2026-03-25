# public-api-docs — Changelog

All notable changes to this repository are documented here.

---

## 2026-03-25 — CI/CD

### Fixed

- **Deprecated GitHub Actions versions** (`.github/workflows/deploy.yaml`)

  Updated `actions/checkout` v3→v4, `withastro/action` v0→v3, and `actions/deploy-pages` v1→v4 to resolve deployment failure caused by deprecated `upload-artifact: v3` dependency.

  **Branch:** `sre-claude-20260325_fix-deploy-workflow/1` | **PR:** #TBD

---

## 2026-03-25 — Site Configuration

### Added

- **Password protection overlay** (`astro.config.mjs`)

  Added a client-side password gate injected into every page via Starlight's `head` script config. Visitors are shown a full-screen overlay prompting for a password before the documentation content is accessible. The authenticated state is stored in `sessionStorage` so users are not re-prompted within the same browser session.

  **Branch:** `sre-claude-20260325_add-password-protection/1` | **PR:** #TBD
