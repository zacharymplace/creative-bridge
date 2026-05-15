export const outreachKit = {
  title: "Outreach Kit",
  version: "1.8.0",
  summary:
    "Copyable, role-specific reviewer messages for asking artists, writers, designers, developers, skeptics, collaborators, and creators to critique The Creative Bridge.",
  position:
    "Outreach should be specific, low-pressure, and review-oriented. The ask is not praise, promotion, participation, or endorsement. The ask is targeted criticism.",
  reviewUrl: "https://creative-bridge-wheat.vercel.app/review",
  briefsUrl: "https://creative-bridge-wheat.vercel.app/reviewer-briefs",
  messages: [
    {
      audience: "Artists",
      subject: "Quick critique request on an AI/collaboration standard",
      body:
        "I built a public standard called The Creative Bridge. It argues that AI-assisted creative work should move people toward human collaboration, not replace artists. I’m looking for criticism from an artist’s perspective: where does this still leave room for artist replacement, vague credit, style laundering, or AI-assisted work being passed off as human-made? Review entry: https://creative-bridge-wheat.vercel.app/review",
    },
    {
      audience: "Writers",
      subject: "Would value your read on this standard",
      body:
        "I built a public standard called The Creative Bridge. I’m trying to make the language clear, principled, and hard to misuse. I’d value your critique as a writer: where does the wording create loopholes, overclaim authority, soften a boundary, or fail to explain the standard clearly? Review entry: https://creative-bridge-wheat.vercel.app/review",
    },
    {
      audience: "Designers",
      subject: "Design critique request",
      body:
        "I built The Creative Bridge as a static public standard around AI-assisted creative work and human collaboration. I’d value your design critique: does the site structure make the standard easy to understand, or does it hide important boundaries, over-polish the seriousness, or make review harder than it should be? Review entry: https://creative-bridge-wheat.vercel.app/review",
    },
    {
      audience: "Developers",
      subject: "Repo/static architecture critique request",
      body:
        "I built The Creative Bridge as a static Next.js public standard with mirrored docs, schemas, QA checks, and versioned release notes. I’d value a developer critique: where is the repo fragile, overcomplicated, under-tested, or likely to break as more standards/docs/routes are added? Review entry: https://creative-bridge-wheat.vercel.app/review",
    },
    {
      audience: "Skeptics",
      subject: "Skeptical read wanted",
      body:
        "I built The Creative Bridge, a public standard for AI-assisted creative work that claims to prioritize human collaboration over artist replacement. I specifically want a skeptical read: where does this still become AI laundering, marketplace drift, fake legitimacy, review theater, or platform capture? Review entry: https://creative-bridge-wheat.vercel.app/review",
    },
    {
      audience: "Collaborators",
      subject: "Would value your critique on collaborator boundaries",
      body:
        "I built The Creative Bridge to define better boundaries for AI-assisted creative projects before they reach out to human collaborators. I’d value your critique: where could a collaborator still be pressured, under-credited, implied as attached, or pulled into unclear scope? Review entry: https://creative-bridge-wheat.vercel.app/review",
    },
    {
      audience: "Creators",
      subject: "Creator-side critique request",
      body:
        "I built The Creative Bridge to help AI-assisted creative projects move toward stronger human collaboration rather than away from it. I’d value your creator-side critique: where does the process feel useful, where does it feel too heavy, and where could it unintentionally reward shortcuts? Review entry: https://creative-bridge-wheat.vercel.app/review",
    },
  ],
  generalPost:
    "I built The Creative Bridge as a public standard for AI-assisted creative work that should move toward human collaboration, not artist replacement. I’m looking for focused criticism, not praise or feature requests. If you’re willing to pressure test the standard, start here: https://creative-bridge-wheat.vercel.app/review",
} as const;
