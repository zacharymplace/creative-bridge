export const limitsStatement = {
  title: "Limits & Non-Authority Statement",
  version: "2.4.0",
  summary:
    "A clear statement of what The Creative Bridge does not certify, verify, approve, legalize, or endorse.",
  position:
    "The Creative Bridge is a public standard and review system. It is not an authority, certification body, legal shield, audit program, rights registry, or ethics approval service.",
  doesNot: [
    {
      title: "Does not certify AI tools",
      body:
        "The standard does not certify that any AI model, tool, dataset, or vendor is ethical, lawful, licensed, safe, or consent-based.",
    },
    {
      title: "Does not verify training data",
      body:
        "The standard does not verify whether a model was trained on licensed, consented, public-domain, synthetic, or copyrighted material.",
    },
    {
      title: "Does not legalize projects",
      body:
        "Using this standard does not resolve copyright, trademark, publicity, privacy, labor, contract, or licensing questions.",
    },
    {
      title: "Does not approve creators",
      body:
        "A creator following the standard should not imply endorsement, approval, certification, or moral clearance.",
    },
    {
      title: "Does not endorse projects",
      body:
        "Project profiles, review materials, readiness language, or rubric alignment are not endorsements.",
    },
    {
      title: "Does not replace legal review",
      body:
        "The standard is not legal advice and does not replace counsel, rights review, contract review, or professional clearance.",
    },
    {
      title: "Does not guarantee ethical status",
      body:
        "Disclosure, credit specificity, consent boundaries, and review logs can improve accountability, but they do not guarantee that a project is ethical.",
    },
    {
      title: "Does not resolve labor fairness",
      body:
        "The standard can require clarity around roles, scope, credit, and compensation, but it does not guarantee fair terms or adequate pay.",
    },
  ],
  useProperly: [
    "Use it to make process, boundaries, and risks more visible.",
    "Use it to improve collaborator-facing clarity before outreach.",
    "Use it to separate disclosure from endorsement.",
    "Use it to document decisions and rejected patterns.",
    "Use it to ask better review questions.",
  ],
  misuseWarning:
    "If this standard is used to imply certification, legality, endorsement, safety, or moral approval, it is being misused.",
} as const;
