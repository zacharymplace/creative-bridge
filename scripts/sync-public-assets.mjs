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
