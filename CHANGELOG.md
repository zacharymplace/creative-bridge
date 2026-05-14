# Changelog

All notable changes to this repository are documented here. The project favors **small, reviewable releases**.

## [0.2.1] - 2026-05-14

### Added

- Polished **README** (thesis, status, dev/export, source-of-truth map, structure, schemas, non-goals, license placeholder).
- **CONTRIBUTING** guide (principles, anti-hype, collaboration-first, where to edit).
- This **CHANGELOG**.
- **docs/DECISIONS.md** for durable architecture and content decisions.
- npm scripts **`check`** (lint + build) and **`docs:sync`** (run `scripts/sync-public-assets.mjs`).
- Footer **site navigation**: Home, Docs, Standard, Manifesto, and a **disabled GitHub** placeholder until a public remote exists.

## [0.1.1] - 2026-05-14

### Added

- Static **`/docs`** index, **`/standard`** (typed ethics standard), and **`/manifesto`** pages.
- **Version & transparency** block on the landing page with links to docs, schemas, and examples.
- **`public/docs/`** build mirror (Markdown, schemas, examples) for static hosting under `/docs/…`.
- **`docs/roadmap.md`** **Not Yet** section (scope discipline: no marketplace, payments, messaging, public tagging, AI hosting).

## [0.1.0] - 2026-05-14

### Added

- Initial **static-export** Next.js landing page (editorial layout, neutral palette).
- Typed **content modules** (`site-copy`, `manifesto`, `ethics-standard`, `project-tiers`, `docs-index`).
- **JSON Schemas** for project and collaborator envelopes under `src/content/schemas/`.
- Canonical **Markdown** docs under `docs/` and example payloads under `docs/examples/`.
