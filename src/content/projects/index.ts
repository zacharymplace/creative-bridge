import type { ProjectListEntry } from "./types";
import { neighborhoodChorusProfile } from "./neighborhood-chorus";

export type { ProjectListEntry, ProjectProfile, ProjectTierId, RoleWithCollaboration } from "./types";
export { neighborhoodChorusProfile } from "./neighborhood-chorus";

/** Published example projects (static routes under /projects). */
export const projectsCatalog: ProjectListEntry[] = [
  {
    slug: neighborhoodChorusProfile.slug,
    title: neighborhoodChorusProfile.title,
    summary: neighborhoodChorusProfile.summary,
  },
];
