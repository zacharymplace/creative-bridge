import Link from "next/link";

import { reviewIntakeGuide } from "@/content/review-intake/review-intake";

export default function ReviewIntakePage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {reviewIntakeGuide.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {reviewIntakeGuide.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {reviewIntakeGuide.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {reviewIntakeGuide.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Useful review pattern
          </h2>

          <div className="mt-6 grid gap-5">
            {reviewIntakeGuide.usefulReview.map((item, index) => (
              <article
                key={item.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Ask these questions
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {reviewIntakeGuide.prompts.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">
              Avoid
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--cb-body)]">
              {reviewIntakeGuide.avoid.map((item) => (
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
            {reviewIntakeGuide.links.map((link) => (
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
