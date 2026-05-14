import type { ProjectProfile } from "./types";

/**
 * Example public profile: consent-first oral histories → short film.
 * Aligns in spirit with docs/examples/project.example.json (illustrative, not live data).
 */
export const neighborhoodChorusProfile = {
  slug: "neighborhood-chorus",
  title: "Neighborhood Chorus",
  summary:
    "A consent-first documentary short built from neighborhood voices—machine assistance bounded to research and rough assembly, never silent substitution.",
  currentTier: "tier-2",
  intendedNextTier: "tier-3",
  intent:
    "Record oral histories with explicit consent boundaries, credit every participant’s chosen visibility, and release a short film that reads as human-edited work—not generated wallpaper.",
  creatorStatement:
    "I am responsible for who is in frame, what is on the record, and what ships. AI may shorten my prep time; it may not shorten my duty of care to the people who trusted us with their stories.",
  aiUseDisclosure:
    "Generative tools are used for transcript cleanup drafts, alternate cut explorations, and research summaries. Every line that appears on screen is approved by a named editor; likeness and voice clips require separate written consent.",
  rolesInvolved: [
    { role: "Director / lead", collaborationType: "In-person interviews; async review on shared cuts" },
    { role: "Field audio", collaborationType: "In-person capture; remote handoff of logs" },
    { role: "Archival researcher", collaborationType: "Async desk research with weekly sync" },
  ],
  rolesNeeded: [
    { role: "Picture editor", collaborationType: "Remote, milestone-based sessions" },
    { role: "Legal / rights", collaborationType: "Async document review; one in-person clearance pass" },
  ],
  dreamTeamNote:
    "We keep a private list of people we would love to work with someday—opt-in only, never posted publicly, never used as social proof. Invitation stays personal.",
  humanFinishedPathway:
    "Rough assembly may be assisted; picture lock, sound pass, and release checklist are owned by named humans. No “auto-publish” step exists in the workflow.",
  nextMilestone:
    "Complete rights packet for three remaining interviewees before picture lock.",
  boundaryEthicsNotes:
    "No public tagging of participants. No scraping social media for B-roll. No synthetic voices standing in for real people. Tier bump to 3 only if generative material stays in the cut—and then disclosure moves to the front of the work, not the footnotes.",
  examplePayloadHref: "/docs/examples/project.example.json",
} as const satisfies ProjectProfile;
