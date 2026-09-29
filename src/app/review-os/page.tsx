import Link from "next/link";

import { reviewOsFreeze } from "@/content/review-os/review-os-freeze";

export default function ReviewOsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {reviewOsFreeze.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {reviewOsFreeze.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {reviewOsFreeze.summary}
        </p>

        <div className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {reviewOsFreeze.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Frozen review operating system
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reviewOsFreeze.frozenSystem.map((layer) => (
              <Link
                key={layer.href}
                href={layer.href}
                className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-5 text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
              >
                {layer.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Freeze principles
          </h2>

          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {reviewOsFreeze.freezePrinciples.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Next layer
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            {reviewOsFreeze.nextLayer}
          </p>
        </section>
      </section>
    </main>
  );
}
