/**
 * Typed public project profile (v0.1.2+).
 * Static pages only—no accounts, forms, or messaging.
 */

export type ProjectTierId = "tier-0" | "tier-1" | "tier-2" | "tier-3";

export type RoleWithCollaboration = {
  role: string;
  collaborationType: string;
};

export type ProjectProfile = {
  slug: string;
  title: string;
  summary: string;
  currentTier: ProjectTierId;
  intendedNextTier: ProjectTierId;
  intent: string;
  creatorStatement: string;
  aiUseDisclosure: string;
  rolesInvolved: RoleWithCollaboration[];
  rolesNeeded: RoleWithCollaboration[];
  dreamTeamNote: string;
  humanFinishedPathway: string;
  nextMilestone: string;
  boundaryEthicsNotes: string;
  /** Static URL to an example JSON payload (e.g. under /docs/examples/). */
  examplePayloadHref: string;
};

export type ProjectListEntry = {
  slug: string;
  title: string;
  summary: string;
};
