import Link from "next/link";

import { publicReview } from "@/content/review/public-review";

export default function ReviewPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {publicReview.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {publicReview.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {publicReview.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {publicReview.position}
          </p>
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Review questions
            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {publicReview.reviewAreas.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">
              Not for this review
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--cb-body)]">
              {publicReview.nonGoals.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Review materials
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {publicReview.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-5 text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
