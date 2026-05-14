import Link from "next/link";
import { neighborhoodChorusScorecard } from "@/content/projects/neighborhood-chorus-scorecard";
import { projectTiers } from "@/content/project-tiers";
import type { ProjectProfile, RoleWithCollaboration } from "@/content/projects/types";

function tierLabel(id: ProjectProfile["currentTier"]) {
  return projectTiers.find((t) => t.id === id)?.label ?? id;
}

function RoleList({ title, rows }: { title: string; rows: readonly RoleWithCollaboration[] }) {
  return (
    <section className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
      <h2 className="text-base font-medium text-[var(--cb-ink)]">{title}</h2>
      <ul className="mt-6 space-y-5">
        {rows.map((r) => (
          <li key={`${r.role}-${r.collaborationType}`} className="border-l border-[var(--cb-border-strong)] pl-5">
            <p className="font-medium text-[var(--cb-ink)]">{r.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--cb-body)]">{r.collaborationType}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

type ProjectProfileDocumentProps = {
  profile: ProjectProfile;
};

export function ProjectProfileDocument({ profile }: ProjectProfileDocumentProps) {
  return (
    <main className="border-b border-[var(--cb-border)] bg-[var(--cb-canvas)]">
      <div className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">Project profile</p>
        <h1 className="cb-display mt-4 max-w-3xl text-3xl tracking-tight text-[var(--cb-ink)] sm:text-4xl sm:leading-tight">
          {profile.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--cb-body)]">{profile.summary}</p>

        <div className="mt-12 grid gap-6 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">Current tier</h2>
            <p className="cb-display mt-3 text-lg text-[var(--cb-ink)]">{tierLabel(profile.currentTier)}</p>
          </div>
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">Intended next tier</h2>
            <p className="cb-display mt-3 text-lg text-[var(--cb-ink)]">{tierLabel(profile.intendedNextTier)}</p>
          </div>
        </div>

        <section className="mt-10 space-y-6">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">Intent</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">{profile.intent}</p>
          </div>
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">Creator statement</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">{profile.creatorStatement}</p>
          </div>
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">AI-use disclosure</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">{profile.aiUseDisclosure}</p>
          </div>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <RoleList title="Roles involved" rows={profile.rolesInvolved} />
          <RoleList title="Roles needed" rows={profile.rolesNeeded} />
        </div>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">Dream team (private / opt-in)</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">{profile.dreamTeamNote}</p>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">Human-finished pathway</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">{profile.humanFinishedPathway}</p>
          </section>
          <section className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">Next milestone</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">{profile.nextMilestone}</p>
          </section>
        </div>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">Boundary & ethics notes</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">{profile.boundaryEthicsNotes}</p>
        </section>

        <div className="mt-12 border-t border-[var(--cb-border)] pt-10">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">Example payload</h2>
          <p className="mt-3 text-sm text-[var(--cb-body)]">
            <Link href={profile.examplePayloadHref} className="underline-offset-4 hover:underline">
              {profile.examplePayloadHref}
            </Link>
          </p>
          <p className="mt-6">
            <Link href="/projects" className="text-sm text-[var(--cb-body)] underline-offset-4 hover:underline">
              All example projects
            </Link>
            {" · "}
            <Link href="/docs/project-profile-model.md" className="text-sm text-[var(--cb-body)] underline-offset-4 hover:underline">
              Profile model (Markdown)
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
