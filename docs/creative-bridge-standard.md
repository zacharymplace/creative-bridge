# Creative Bridge Standard

**Version:** 0.1.0  
**Status:** Draft  
**Scope:** Creative and cultural work where AI may assist research, drafting, or production—and humans remain accountable for what is released.

## Purpose

The Creative Bridge Standard is a compact, versioned set of commitments. It exists so collaborators can trust the process: clear roles, clear assistance, and clear accountability.

This document is normative for projects that claim Bridge alignment. It is not legal advice; teams should still satisfy contracts, platform policies, and applicable law.

## Definitions

- **Human checkpoint:** A documented moment where a named person reviews work for release—distinct from automated checks.
- **Material assistance:** Assistance that would change a reasonable person’s understanding of who authored the work or how it was made.

## Commitments

### 1. Transparency

Publish the project tier (see `src/content/project-tiers.ts`) and disclose material machine assistance that affects authorship, likeness, or provenance.

**Rationale:** Collaborators and audiences cannot consent to what they cannot see.

### 2. Human checkpoint

Before public release or commercial use, a named human approves the work for accuracy, rights, and alignment with stated intent.

**Rationale:** Automation must not silently become accountability.

### 3. Consent

Obtain informed consent when a person’s voice, likeness, private data, or unreleased work is involved.

**Rationale:** Creative velocity is not a license to bypass care.

### 4. Credit

Credit humans for human judgment; label machine assistance where it materially shaped outcomes.

**Rationale:** Fair credit protects livelihoods and clarifies responsibility.

### 5. Non-substitution default

Do not present machine output as finished human work without revision, review, and explicit disclosure.

**Rationale:** Substitution erodes craft, trust, and the conditions for collaboration.

## Versioning

Minor revisions clarify language. Major revisions may add obligations; when they do, increment the major version and publish a migration note.

## Relationship to schemas

Machine-readable commitments live in `src/content/ethics-standard.ts`. Project and collaborator envelopes live in `src/content/schemas/`. Example payloads live in `docs/examples/`.
