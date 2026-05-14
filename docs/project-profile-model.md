# Project profile model

**Status:** Draft (v0.1.2)  
**Scope:** Public, static **project profile** pages—documentation for humans, not an API schema.

## Purpose

A project profile is a **legible, voluntary disclosure** of how work is made: intent, tiers, roles, machine boundaries, and the path to human-finished release. It exists so collaborators can orient without logging in, signing up, or being tagged in public feeds.

## What a profile is not

- Not a form, CRM, or submission pipeline.
- Not a marketplace listing or discoverability surface.
- Not public collaborator tagging, messaging, or social graph features.

## Recommended fields

| Field | Intent |
|--------|--------|
| **Current tier** | Highest Creative Bridge tier that materially applies today (`tier-0` … `tier-3`). |
| **Intended next tier** | Honest forecast if the work is heading toward more embedded automation—helps collaborators plan consent and review. |
| **Intent** | Human-authored statement of what the work is for and who it serves. |
| **Creator statement** | Who carries responsibility for release and for relationships with contributors. |
| **AI-use disclosure** | Where machines participate and where humans must approve. |
| **Roles involved** | People already committed; include **collaboration type** per role (e.g. async, in-person, milestone-based). |
| **Roles needed** | Open seats described without turning the page into recruiting spam—still include collaboration type. |
| **Dream-team note** | Private, opt-in aspirations only—never a public list used for clout or discovery (see `docs/DECISIONS.md`). |
| **Human-finished pathway** | What “done” means in human terms: checkpoints, approvals, and forbidden shortcuts (e.g. auto-publish). |
| **Next milestone** | One concrete next step—keeps the profile honest over time. |
| **Boundary / ethics notes** | Consent, likeness, credit, and non-goals in plain language. |
| **Example payload link** | Pointer to a static JSON example (e.g. under `/docs/examples/`) that mirrors schema shape. |

## Typed content

Example implementation:

- Types and catalog: `src/content/projects/index.ts`, `src/content/projects/types.ts`
- Example profile: `src/content/projects/neighborhood-chorus.ts`

## Relationship to JSON Schema

Machine-readable project metadata remains defined by `src/content/schemas/project.schema.json` and mirrored at `/docs/project.schema.json`. Profiles are **narrative + structure for the site**; schemas remain validation-oriented envelopes.
