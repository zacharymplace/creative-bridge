import Link from "next/link";
import {
  ethicsCommitments,
  ethicsDefinitions,
  ethicsPublicDisclosure,
  ethicsStandardMeta,
} from "@/content/ethics-standard";

export function StandardDocument() {
  return (
    <main className="border-b border-[var(--cb-border)] bg-[var(--cb-canvas)]">
      <div className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          {ethicsStandardMeta.status === "draft" ? "Draft standard" : "Standard"}
        </p>
        <h1 className="cb-display mt-4 max-w-3xl text-3xl tracking-tight text-[var(--cb-ink)] sm:text-4xl sm:leading-tight">
          {ethicsStandardMeta.name}
        </h1>
        <div className="mt-6 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
          <span>{ethicsStandardMeta.publicLabel}</span>
        </div>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--cb-body)]">{ethicsStandardMeta.scope}</p>
        <div className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">Definitions</h2>
          <dl className="mt-6 space-y-6 text-base leading-relaxed text-[var(--cb-body)]">
            <div>
              <dt className="font-medium text-[var(--cb-ink)]">Human checkpoint</dt>
              <dd className="mt-2">{ethicsDefinitions.humanCheckpoint}</dd>
            </div>
            <div>
              <dt className="font-medium text-[var(--cb-ink)]">Material assistance</dt>
              <dd className="mt-2">{ethicsDefinitions.materialAssistance}</dd>
            </div>
          </dl>
        </div>
        <div className="mt-14">
          <h2 className="cb-display text-2xl text-[var(--cb-ink)]">Commitments</h2>
          <div className="mt-10 space-y-8">
            {ethicsCommitments.map((c) => (
              <section
                key={c.id}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">{c.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">{c.requirement}</p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--cb-muted)]">{c.rationale}</p>
              </section>
            ))}
          </div>
        </div>
        <section className="mt-14 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">Disclosure</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--cb-body)]">{ethicsPublicDisclosure}</p>
        </section>
        <div className="mt-14 border-t border-[var(--cb-border)] pt-10">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Machine-readable sources
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/docs/project.schema.json" className="text-[var(--cb-body)] underline-offset-4 hover:underline">
                /docs/project.schema.json
              </Link>
            </li>
            <li>
              <Link
                href="/docs/collaborator.schema.json"
                className="text-[var(--cb-body)] underline-offset-4 hover:underline"
              >
                /docs/collaborator.schema.json
              </Link>
            </li>
            <li>
              <Link
                href="/docs/creative-bridge-standard.md"
                className="text-[var(--cb-body)] underline-offset-4 hover:underline"
              >
                /docs/creative-bridge-standard.md
              </Link>
            </li>
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/docs" className="text-sm text-[var(--cb-body)] underline-offset-4 hover:underline">
              Documentation index
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
