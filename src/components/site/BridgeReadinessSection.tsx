import Link from "next/link";

import { neighborhoodChorusScorecard } from "@/content/projects/neighborhood-chorus-scorecard";

export function BridgeReadinessSection() {
  return (
    <section className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] p-6 md:p-8">
      <div className="max-w-3xl">
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
          Self-assessment
        </p>

        <h2 className="mt-3 font-[family-name:var(--font-condensed)] font-bold uppercase text-3xl text-[var(--cb-ink)]">
          {neighborhoodChorusScorecard.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[var(--cb-muted)]">
          {neighborhoodChorusScorecard.note}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {neighborhoodChorusScorecard.scores.map((score) => (
          <article
            key={score.category}
            className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-paper)] p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-[family-name:var(--font-condensed)] font-bold uppercase text-xl text-[var(--cb-ink)]">
                {score.category}
              </h3>

              <span className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)]">
                {score.rating}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-[var(--cb-muted)]">
              {score.rationale}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/docs/project-profile-checklist.md"
          className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--cb-ink)] underline decoration-[var(--cb-border)] underline-offset-4"
        >
          Read the project profile checklist
        </Link>
      </div>
    </section>
  );
}
