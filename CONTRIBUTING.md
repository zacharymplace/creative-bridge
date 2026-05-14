# Contributing to The Creative Bridge

Thank you for helping keep this project **trustworthy, legible, and calm**.

## Principles first

- Prefer **discussion grounded in principles** (transparency, credit, consent, collaboration) over feature brainstorming.
- **No hype language** and no “move fast / disrupt” framing.
- **No artist-replacement framing.** The Bridge exists to widen the doorway to **human collaboration**, not to justify displacing makers.

## What we preserve

Proposed changes should **strengthen or clarify**, not quietly remove:

- **Transparency** about machine roles and tiers.
- **Fair credit** and human accountability.
- **Collaboration-first** positioning—tools as scaffolding, not substitutes for relationship and judgment.

If a change trades clarity for spectacle, it will likely need revision.

## Where to edit what

| Change type | Where to work |
|-------------|----------------|
| Public ethics text (Standard) | `src/content/ethics-standard.ts` **and** `docs/creative-bridge-standard.md` (keep aligned; note version bumps). |
| Manifesto | `src/content/manifesto.ts` |
| Landing / site copy | `src/content/site-copy.ts` and `src/components/landing/` |
| Architecture / roadmap prose | `docs/product-architecture.md`, `docs/roadmap.md` |
| JSON Schemas | `src/content/schemas/*.json` (update version patterns if you change shape). |
| Decision log | `docs/DECISIONS.md` for durable “why we did X” notes. |

After editing Markdown under `docs/`, run **`npm run docs:sync`** (or `npm run dev` / `npm run build`, which run sync via `predev` / `prebuild`) so `public/docs/` stays consistent locally.

## Suggesting a change

1. Open an issue or PR with a **short problem statement** (who is confused, what broke, what trust risk exists).
2. Propose **concrete diffs** to the smallest set of files above.
3. Call out **version impact** (Standard version, schema `schemaVersion` patterns, site release line in CHANGELOG).

We may ask for copy to be tightened for **readability in static export**—long pages should still feel editorial, not like SaaS documentation.
