import Link from "next/link";

import { publicStandardFreeze } from "@/content/v1/public-standard-freeze";

export default function V1Page() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {publicStandardFreeze.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {publicStandardFreeze.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {publicStandardFreeze.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {publicStandardFreeze.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Frozen public layers
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {publicStandardFreeze.frozenLayers.map((layer) => (
              <Link
                key={layer.href}
                href={layer.href}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-5 text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
              >
                {layer.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Frozen commitments
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {publicStandardFreeze.frozenCommitments.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">
              Future review triggers
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--cb-body)]">
              {publicStandardFreeze.futureReviewTriggers.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <p className="max-w-3xl text-sm leading-7 text-[var(--cb-muted)]">
            v1.0.0 is not the end of the project. It is the baseline future
            product behavior must justify itself against.
          </p>
        </div>
      </section>
    </main>
  );
}
