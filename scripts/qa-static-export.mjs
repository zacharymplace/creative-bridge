import { access } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");

const requiredFiles = [
  "index.html",
  "docs.html",
  "manifesto.html",
  "standard.html",
  "submit.html",
  "projects.html",
  "projects/neighborhood-chorus.html",
  "docs/creative-bridge-standard.md",
  "docs/product-architecture.md",
  "docs/roadmap.md",
  "docs/DECISIONS.md",
  "docs/project-profile-model.md",
  "docs/project-profile-checklist.md",
  "docs/submission-packet.md",
  "docs/project.schema.json",
  "docs/collaborator.schema.json",
  "docs/examples/project.example.json",
  "docs/examples/collaborator.example.json",
  "docs/templates/project-profile-template.md",
  "docs/templates/ai-use-disclosure-template.md",
  "docs/templates/role-request-template.md",
  "docs/templates/collaboration-boundaries-template.md",
  "docs/templates/role-interest-template.md",
  "docs/templates/collaborator-profile-template.md",
  "docs/collaborator-readiness-checklist.md",
  "docs/collaborator-profile-packet.md",
  "docs/releases/v0.4.0.md",
  "docs/releases/v0.5.0.md",
  "docs/releases/v0.6.0.md",
  "docs/releases/v0.7.0.md",
  "docs/releases/v0.8.0.md",
  "docs/releases/v0.9.0.md",
  "docs/releases/v1.0.0.md",
  "docs/releases/v1.1.0.md",
  "docs/releases/v1.2.0.md",
  "docs/releases/v1.2.1.md",
  "docs/releases/v1.3.0.md",
  "docs/releases/v1.4.0.md",
  "docs/releases/v1.5.0.md",
  "docs/releases/v1.6.0.md",
  "docs/releases/v1.7.0.md",
  "docs/releases/v1.8.0.md",
  "docs/releases/v1.9.0.md",
  "docs/releases/v2.0.0.md",
  "docs/public-review-operating-system-freeze.md",
  "review-os.html",
  "docs/review/review-response-log.md",
  "review-response-log.html",
  "docs/review/outreach-kit.md",
  "outreach-kit.html",
  "docs/review/reviewer-brief-pack.md",
  "reviewer-briefs.html",
  "docs/review/review-intake-guide.md",
  "review-intake.html",
  "docs/stress-tests/governance-stress-tests.md",
  "stress-tests.html",
  "docs/incentive-drift-map.md",
  "incentive-drift.html",
  "docs/abuse-case-library.md",
  "abuse-cases.html",
  "review.html",
  "docs/review/change-proposal-template.md",
  "docs/review/public-review-packet.md",
  "docs/public-standard-freeze.md",
  "v1.html",
  "docs/system-map.md",
  "system-map.html",
  "docs/review-rubric.md",
  "review-rubric.html",
  "docs/rejected-patterns.md",
  "rejected-patterns.html",
  "docs/governance-layer.md",
  "governance.html",
  "docs/trust-layer.md",
  "trust.html",
];

const missing = [];

for (const file of requiredFiles) {
  try {
    await access(join(outDir, file));
  } catch {
    missing.push(file);
  }
}

if (missing.length > 0) {
  console.error("Static export QA failed. Missing files:");
  for (const file of missing) {
    console.error(`- out/${file}`);
  }
  process.exit(1);
}

console.log("Static export QA passed.");
for (const file of requiredFiles) {
  console.log(`✓ out/${file}`);
}
