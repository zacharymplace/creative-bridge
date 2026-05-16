# Donation Provider Decision Record

Version: 3.6.0

## Decision

Use GitHub Sponsors as the preferred first provider if available and properly configured.

Keep Ko-fi as the fallback lightweight provider.

Do not integrate Stripe, Patreon, Open Collective, or Buy Me a Coffee yet.

## Position

The first donation provider should minimize legitimacy drift, supporter status pressure, ranking behavior, and productization while allowing low-friction voluntary support.

## Preferred provider: GitHub Sponsors

Status: preferred first provider.

Rationale:

GitHub Sponsors best matches public maintenance, open documentation, and stewardship framing without requiring a marketplace, content gate, or product checkout structure.

Conditions:

- No supporter badges on The Creative Bridge site.
- No donor ranking.
- No review priority.
- No governance influence.
- No certification, verification, approval, or endorsement language.
- Support copy must remain aligned with Supporter Copy Guardrails.

## Fallback provider: Ko-fi

Status: fallback lightweight provider.

Rationale:

Ko-fi can support simple optional donations if GitHub Sponsors is unavailable or unsuitable, but recognition features must be minimized.

Conditions:

- Disable or avoid public supporter-wall framing where possible.
- Use plain donation language.
- Avoid membership/status language.
- Do not offer special access, recognition, review priority, or governance influence.

## Deferred providers

### Stripe

Too powerful for the current stage. Better reserved for future toolkits, workshops, institutional payments, or mature supporter flows.

### Open Collective

Strong transparency fit, but likely too institutionally heavy before external review and governance maturity.

### Patreon

Membership-tier patterns create access, status, exclusivity, and content-gating pressure.

### Buy Me a Coffee

Simple, but less aligned than GitHub Sponsors or Ko-fi with public-standard stewardship.

## Integration boundary

This decision record does not add payment links.

A future release must still add donation implementation only after confirming copy, recognition, and governance boundaries remain intact.
