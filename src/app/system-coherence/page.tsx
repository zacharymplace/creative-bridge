import Link from "next/link";

import { systemCoherence } from "@/content/system-coherence/system-coherence";

export default function SystemCoherencePage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {systemCoherence.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {systemCoherence.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {systemCoherence.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {systemCoherence.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            System lanes
          </h2>

          <div className="mt-6 grid gap-5">
            {systemCoherence.lanes.map((lane) => (
              <article
                key={lane.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-xl font-medium text-[var(--cb-ink)]">
                  {lane.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
                  {lane.purpose}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {lane.routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="rounded-full border border-[var(--cb-border)] bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Compression rules
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {systemCoherence.compressionRules.map((rule) => (
              <li key={rule}>— {rule}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Next decision
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            {systemCoherence.nextDecision}
          </p>
        </section>
      </section>
    </main>
  );
}
