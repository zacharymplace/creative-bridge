import Link from "next/link";

import { governanceLayer } from "@/content/governance/governance-layer";

export default function GovernancePage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {governanceLayer.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {governanceLayer.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {governanceLayer.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {governanceLayer.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Governance commitments
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {governanceLayer.sections.map((section) => (
              <article
                key={section.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  {section.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Governance artifacts
            </h2>
            <div className="mt-6 grid gap-3">
              {governanceLayer.artifacts.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-[var(--cb-border)] bg-white p-4 text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">
              Requires explicit review
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--cb-body)]">
              {governanceLayer.escalationTriggers.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <p className="max-w-3xl text-sm leading-7 text-[var(--cb-muted)]">
            Governance is intentionally static at this stage. The point is to
            create review pressure before the project gains platform power.
          </p>
        </div>
      </section>
    </main>
  );
}
