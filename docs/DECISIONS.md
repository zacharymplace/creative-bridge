# Architecture & content decisions

Short log of **durable** choices for The Creative Bridge repository. For release notes, see [CHANGELOG.md](../CHANGELOG.md).

---

## Static export first

- **Decision:** Ship as **`output: "export"`** static HTML/CSS/JS—no Node server required to read the standard.
- **Why:** Maximizes auditability and hosting independence; matches “public standard artifact” over “product demo.”

---

## Docs source lives in `/docs`

- **Decision:** Canonical long-form prose lives in the **`docs/`** directory in git.
- **Why:** Markdown diffs well in review, archives cleanly, and stays readable outside Next.js.

---

## `public/docs` is generated

- **Decision:** **`public/docs/`** is **rebuilt** by `scripts/sync-public-assets.mjs` and is **gitignored**—not hand-edited.
- **Why:** Avoids drift between repo sources and what static hosts serve; keeps a single edit path (`docs/` + `src/content/` + schemas).

---

## Typed content modules drive pages

- **Decision:** `/standard` and `/manifesto` render from **`src/content/*.ts`**, not from ad-hoc strings in components.
- **Why:** Type-checking and a single import surface reduce accidental contradictions between pages.

---

## JSON Schemas are public artifacts

- **Decision:** Schemas live under `src/content/schemas/` and are **mirrored** to `/docs/*.schema.json` at build time.
- **Why:** Lets validators, CI, and other repos consume the same definitions the site advertises—without a registry or backend.

---

## No marketplace / auth / backend (for now)

- **Decision:** This repo intentionally excludes accounts, payments, chat, model marketplaces, and hosted media pipelines.
- **Why:** Preserve trust boundaries; see **Not Yet** in `docs/roadmap.md`.

---

## “Dream teams” and collaboration discovery

- **Decision:** Any notion of **dream teams** or similar is treated as an **opt-in, private aspiration** between people who already work together—not as **public collaborator tagging**, discovery feeds, or social graph features in this project.
- **Why:** Public tagging optimizes for scale at the expense of consent, context, and credit; the Bridge prioritizes legibility and human relationships.

## Project profile readiness is self-assessment, not certification

Project profiles may include a Bridge Readiness section. This is a lightweight self-assessment against the Creative Bridge standard.

It is not verification, certification, endorsement, or a scoring algorithm.

The goal is to make profile quality visible without creating a gatekeeping or marketplace system.

## Submission packet remains static

The Creator Submission Packet is intentionally static.

It provides templates and preparation structure without collecting submissions, creating accounts, enabling messaging, or implying review/certification.

This keeps The Creative Bridge focused on standards and public trust before platform behavior.

## Collaborator packet remains opt-in and non-platform

The Collaborator Profile Packet mirrors the creator-side submission packet without creating public profiles, accounts, messaging, or hiring behavior.

It exists to protect collaborators from being treated as interchangeable labor and to make consent, credit, scope, and AI-adjacent comfort visible before outreach.

## Trust layer before platform capability

The project now includes a Public Trust Layer before adding any accounts, submissions, messaging, marketplace behavior, or public profiles.

This is intentional: the standard should become easier to inspect and govern before the product becomes more capable.
