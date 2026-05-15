import { copyFile, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDocs = join(root, "public", "docs");

await rm(publicDocs, { recursive: true, force: true });

const markdownFiles = [
  "creative-bridge-standard.md",
  "product-architecture.md",
  "roadmap.md",
  "DECISIONS.md",
  "project-profile-model.md",
  "project-profile-checklist.md",
  "templates/role-request-template.md",
  "templates/ai-use-disclosure-template.md",
  "templates/project-profile-template.md",
  "submission-packet.md",
  "templates/collaboration-boundaries-template.md",
  "templates/role-interest-template.md",
  "templates/collaborator-profile-template.md",
  "collaborator-readiness-checklist.md",
  "collaborator-profile-packet.md",
  "releases/v0.4.0.md",
  "releases/v0.5.0.md",
  "releases/v0.6.0.md",
  "releases/v0.7.0.md",
  "releases/v0.8.0.md",
  "releases/v0.9.0.md",
  "releases/v1.0.0.md",
  "releases/v1.1.0.md",
  "releases/v1.2.0.md",
  "releases/v1.2.1.md",
  "releases/v1.3.0.md",
  "releases/v1.4.0.md",
  "releases/v1.5.0.md",
  "releases/v1.6.0.md",
  "releases/v1.7.0.md",
  "releases/v1.8.0.md",
  "releases/v1.9.0.md",
  "releases/v2.0.0.md",
  "releases/v2.1.0.md",
  "releases/v2.2.0.md",
  "releases/v2.3.0.md",
  "releases/v2.4.0.md",
  "releases/v2.5.0.md",
  "releases/v2.6.0.md",
  "releases/v2.7.0.md",
  "releases/v2.8.0.md",
  "releases/v2.9.0.md",
  "releases/v3.0.0.md",
  "business/sustainability-freeze.md",
  "business/funding-and-pricing-principles.md",
  "review/feedback-seed-log.md",
  "review/public-review-launch-copy.md",
  "start-here.md",
  "limits-and-non-authority.md",
  "whyfiles/platform-capability-gating.md",
  "whyfiles/review-response-traceability.md",
  "whyfiles/collaborator-credit.md",
  "whyfiles/style-impersonation.md",
  "whyfiles/public-tagging.md",
  "whyfiles/criticism-over-approval.md",
  "whyfiles/static-first.md",
  "whyfiles/marketplace-gating.md",
  "whyfiles/readiness-is-not-certification.md",
  "whyfiles/dream-team-privacy.md",
  "whyfiles/ai-disclosure.md",
  "whyfiles/README.md",
  "public-review-operating-system-freeze.md",
  "review/review-response-log.md",
  "review/outreach-kit.md",
  "review/reviewer-brief-pack.md",
  "review/review-intake-guide.md",
  "stress-tests/governance-stress-tests.md",
  "incentive-drift-map.md",
  "abuse-case-library.md",
  "review/change-proposal-template.md",
  "review/public-review-packet.md",
  "public-standard-freeze.md",
  "system-map.md",
  "review-rubric.md",
  "rejected-patterns.md",
  "governance-layer.md",
  "trust-layer.md",
];
await mkdir(publicDocs, { recursive: true });
for (const name of markdownFiles) {
  const destination = join(publicDocs, name);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(join(root, "docs", name), destination);
}

const schemaDir = join(root, "src", "content", "schemas");
const schemaNames = await readdir(schemaDir);
for (const name of schemaNames) {
  if (!name.endsWith(".json")) continue;
  await copyFile(join(schemaDir, name), join(publicDocs, name));
}

const examplesSrc = join(root, "docs", "examples");
const examplesDest = join(publicDocs, "examples");
await mkdir(examplesDest, { recursive: true });
try {
  const exampleNames = await readdir(examplesSrc);
  for (const name of exampleNames) {
    if (!name.endsWith(".json")) continue;
    await copyFile(join(examplesSrc, name), join(examplesDest, name));
  }
} catch {
  /* optional */
}
