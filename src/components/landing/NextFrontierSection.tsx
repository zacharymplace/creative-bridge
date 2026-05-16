import Link from "next/link";

import { narrativeHierarchy } from "@/content/next-frontier/narrative-hierarchy";

export function NextFrontierSection() {
  return (
    <section className="border-y border-[var(--cb-border)] bg-[var(--cb-surface)]">
      <div className="cb-container py-14 sm:py-16">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
          Start here
        </p>

        <h2 className="cb-display mt-4 max-w-4xl text-3xl tracking-tight text-[var(--cb-ink)] sm:text-4xl">
          {narrativeHierarchy.thesis}
        </h2>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
          A reviewable standard, not a certification program. A collaboration
          bridge, not a replacement engine. A governance-first archive of
          decisions, limits, risks, and rationale.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {narrativeHierarchy.entryPaths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="block border border-[var(--cb-border)] bg-white p-5 underline-offset-4 hover:underline"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                Primary path
              </span>
              <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                {path.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--cb-body)]">
                {path.body}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 border-t border-[var(--cb-border)] pt-6">
          <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            System lanes
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {narrativeHierarchy.systemLanes.map((lane) => (
              <Link
                key={lane.href}
                href={lane.href}
                className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
                title={lane.body}
              >
                {lane.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
