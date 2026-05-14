# The Creative Bridge

**The Creative Bridge** is a small, versioned public standard for creative work in the age of machine assistance. It names how humans stay accountable, how credit and consent stay legible, and how AI is bounded so it **helps people reach collaboration**—not replace artists.

**Current status:** **v0.1.1 public draft** (the Standard and manifesto are draft-quality language; the repository may ship tooling releases such as **v0.4.0** without implying the ethics text is final—see [CHANGELOG.md](./CHANGELOG.md)).

**Core thesis:** AI-assisted creation should help more people reach **human collaboration**, not replace artists.

---

## Local development

Prerequisites: **Node.js 20+** and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `predev` runs `docs:sync` so mirrored files exist under `public/docs/` during development.

Other useful commands:

```bash
npm run lint          # ESLint
npm run docs:sync     # Regenerate public/docs from sources
npm run check         # lint + production build
```

---

## Static export

This project uses Next.js **`output: "export"`**. The deployable site is emitted to **`out/`**.

```bash
rm -rf out && npm run build
```

Serve `out/` with any static file host (S3, nginx, GitHub Pages, etc.). Routes include `/`, `/docs`, `/projects`, `/projects/neighborhood-chorus`, `/standard`, and `/manifesto`.

---

## Source of truth

| Layer | Location | Role |
|--------|----------|------|
| **Canonical prose** | [`docs/`](./docs/) | Human-readable Markdown (Standard, architecture, roadmap, decisions, project profile model). |
| **Generated mirror** | `public/docs/` (gitignored) | Built by [`scripts/sync-public-assets.mjs`](./scripts/sync-public-assets.mjs); copied into `out/docs/` so URLs like `/docs/creative-bridge-standard.md` work in static export. **Do not edit generated files.** |
| **Typed site content** | [`src/content/`](./src/content/) | TypeScript modules backing the landing page, `/standard`, `/manifesto`, and `/projects` example profiles. |
| **JSON Schemas** | [`src/content/schemas/`](./src/content/schemas/) | Source schemas; mirrored to `public/docs/*.schema.json` at build time. |

If Markdown and typed content disagree, **resolve in git** and bump the relevant version fields (see [CONTRIBUTING.md](./CONTRIBUTING.md)).

---

## Content structure (overview)

```
docs/                      # Canonical Markdown + examples
  examples/                # Example JSON payloads
src/content/               # Typed copy, ethics standard, manifesto, tiers, docs index, projects
src/content/projects/      # Example project profiles (typed)
src/content/schemas/       # JSON Schema source files
src/app/                   # Next.js App Router pages (static)
src/components/landing/    # Landing sections
src/components/site/       # /docs, /standard, /manifesto, /projects layouts
scripts/sync-public-assets.mjs
```

---

## Schema locations

- **Project envelope:** [`src/content/schemas/project.schema.json`](./src/content/schemas/project.schema.json) → mirrored as **`/docs/project.schema.json`**
- **Collaborator envelope:** [`src/content/schemas/collaborator.schema.json`](./src/content/schemas/collaborator.schema.json) → **`/docs/collaborator.schema.json`**
- **Examples:** [`docs/examples/`](./docs/examples/) → **`/docs/examples/*.json`**

---

## Non-goals

- No marketplace, payments, messaging, public collaborator tagging, or hosted AI asset pipeline (see [docs/roadmap.md](./docs/roadmap.md) **Not Yet**).
- No backend, accounts, or auth in this repository.
- No “ethics washing”: the Bridge is language and artifacts you can adopt voluntarily—not a certification authority.

---

## License

**License:** *Placeholder*—specify SPDX identifier and copyright holders before first wide redistribution (e.g. MIT, Apache-2.0, or CC BY 4.0 for prose-only portions). Until then, assume **all rights reserved** unless you add a `LICENSE` file stating otherwise.

---

## Further reading

- [CONTRIBUTING.md](./CONTRIBUTING.md) — how to propose changes.
- [CHANGELOG.md](./CHANGELOG.md) — release history.
- [docs/DECISIONS.md](./docs/DECISIONS.md) — architecture and content decisions.


## Static export QA

After building, verify expected exported routes, docs, schemas, examples, and templates:

```bash
npm run build
npm run qa:static
```

Or run both together:

```bash
npm run check:static
```


## Current public routes

- `/`
- `/docs`
- `/standard`
- `/manifesto`
- `/projects`
- `/projects/neighborhood-chorus`
- `/submit`
- `/collaborate`


## Latest release note

- [`docs/releases/v0.4.0.md`](./docs/releases/v0.4.0.md)
