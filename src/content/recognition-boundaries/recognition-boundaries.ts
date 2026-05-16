export const recognitionBoundaries = {
  title: "Recognition Boundaries",
  version: "3.4.0",
  summary:
    "Public rules for whether donors, supporters, sponsors, contributors, or reviewers may ever be named, credited, acknowledged, or displayed.",
  position:
    "Recognition can become social proof. The Creative Bridge should avoid public recognition mechanics unless they are plain, consent-based, non-promotional, and clearly separated from legitimacy, review, certification, ranking, and governance authority.",
  recognitionTypes: [
    {
      title: "Donors",
      defaultState: "Private by default",
      allowed:
        "Anonymous or private support. Optional public acknowledgment only if explicitly consented to and not displayed as legitimacy.",
      notAllowed:
        "Donor badges, donor rankings, public donor tiers, approval implication, or supporter status used as trust signal.",
    },
    {
      title: "Supporters",
      defaultState: "Private by default",
      allowed:
        "Plain acknowledgment may be considered later if recognition governance exists.",
      notAllowed:
        "Supporter walls, public status markers, priority labels, verified supporter claims, or influence implication.",
    },
    {
      title: "Sponsors",
      defaultState: "Separated by default",
      allowed:
        "Plain sponsor acknowledgment only in a clearly separated funding context with non-interference terms visible.",
      notAllowed:
        "Sponsor placement near review results, standards language, project profiles, rankings, certification, or governance decisions.",
    },
    {
      title: "Reviewers",
      defaultState: "Consent required",
      allowed:
        "Reviewer names may be recorded only with consent and should be tied to specific feedback, not broad endorsement.",
      notAllowed:
        "Reviewer names used as endorsement, expert approval, certification, or promotional authority.",
    },
    {
      title: "Contributors",
      defaultState: "Specific credit required",
      allowed:
        "Contributors may be credited for specific work, role, scope, and contribution type.",
      notAllowed:
        "Vague association, inflated credit, implied authorship, or legitimacy borrowing.",
    },
  ],
  publicRecognitionRules: [
    "Recognition must be opt-in.",
    "Recognition must be specific.",
    "Recognition must be plain.",
    "Recognition must not imply approval.",
    "Recognition must not create rankings.",
    "Recognition must not create certification.",
    "Recognition must not suggest governance authority.",
    "Recognition must remain separated from review outcomes.",
  ],
  prohibitedPatterns: [
    "Supporter badges",
    "Donor leaderboards",
    "Sponsor-backed standard language",
    "Reviewer-as-endorser framing",
    "Public names used as implied attachment",
    "Recognition tiers that resemble trust scores",
    "Paid visibility or placement",
    "Funding recognition near project legitimacy signals",
  ],
  releaseGate:
    "No public recognition feature should launch until it satisfies these boundaries and remains consistent with the Funding & Pricing Principles, Sponsor Non-Interference Terms, and Limits & Non-Authority Statement.",
} as const;
