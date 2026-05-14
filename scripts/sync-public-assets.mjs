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
];
await mkdir(publicDocs, { recursive: true });
for (const name of markdownFiles) {
  await copyFile(join(root, "docs", name), join(publicDocs, name));
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
