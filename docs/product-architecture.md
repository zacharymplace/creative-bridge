# Product Architecture

**Product:** The Creative Bridge  
**Release:** v0.1.1 (static site + content kit + public documentation routes)

## North star

AI-assisted creation should help more people reach **human collaboration**, not replace artists. The architecture favors legibility, small surfaces, and explicit boundaries over feature depth.

## Layers (v0.1)

### 1. Public language layer

Structured copy and manifesto content (`src/content/`) define how the Bridge speaks to the world. This layer is versioned in git and intended to remain stable enough for downstream reuse.

### 2. Standard layer

The Creative Bridge Standard (`docs/creative-bridge-standard.md`, mirrored in `src/content/ethics-standard.ts`) encodes ethics commitments. Projects reference a **standard version** alongside a **tier**.

### 3. Tier layer

Project tiers (`src/content/project-tiers.ts`) are human-readable labels for how automation participates. Tiers are ordered; teams declare the **highest** tier that applies to any material stage.

### 4. Schema layer

JSON Schemas (`src/content/schemas/`) describe minimal envelopes for:

- **Project metadata:** intent, tier, standard version, optional disclosure URL, checkpoint owners.
- **Collaborator metadata:** roles, credit preferences, optional assist boundaries.

Example payloads ship alongside documentation in `docs/examples/`.

Schemas enable tooling without mandating a particular stack.

### 5. Presentation layer (this repository)

A static Next.js site renders the landing narrative plus public `/docs`, `/standard`, and `/manifesto` routes. `scripts/sync-public-assets.mjs` rebuilds `public/docs/` on each dev/build: Markdown from `docs/`, JSON Schemas from `src/content/schemas/`, and examples from `docs/examples/`—served alongside the `/docs` index as static files for diffing and archival.

## Non-goals (v0.1)

- No accounts, payments, or hosted collaboration product.
- No proprietary model routing or training pipeline.
- No implied certification authority; alignment is claimed and evidenced by the project.

## Evolution

Later versions may add exemplar workflows, validation CLIs, and registry-style discovery—only where they reduce ambiguity rather than increase compliance theater.
