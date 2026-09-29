import Link from "next/link";

import { whyfiles } from "@/content/whyfiles/whyfiles";

const categories = [
  {
    title: "Disclosure",
    body:
      "Rules explaining transparency, attribution, AI disclosure, and public honesty.",
  },
  {
    title: "Consent",
    body:
      "Rules protecting privacy, collaborator agency, tagging boundaries, and participation control.",
  },
  {
    title: "Credit",
    body:
      "Rules around authorship, acknowledgment, contribution, and impersonation boundaries.",
  },
  {
    title: "Governance",
    body:
      "Rules protecting the system from authority drift, marketplace capture, and legitimacy theater.",
  },
  {
    title: "Review",
    body:
      "Rules ensuring criticism stays more important than approval or promotion.",
  },
  {
    title: "Platform",
    body:
      "Rules governing rollout sequencing, capability gating, and implementation discipline.",
  },
];

export default function WhyfilesPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Rationale layer
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Whyfiles
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Whyfiles explain why decisions exist. They preserve reasoning so the
          system does not depend on implied authority, hidden judgment, or
          “trust us” governance.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            Why this layer exists
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            The standard, review layer, governance rules, and funding boundaries
            all create decisions that need explanation. Whyfiles preserve the
            rationale behind those decisions so the project remains reviewable,
            critiqueable, and resistant to authority drift.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Rationale categories
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.title}
                className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6"
              >
                <h3 className="text-xl font-medium text-[var(--cb-ink)]">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {category.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Rationale records
          </h2>

          <div className="mt-6 grid gap-4">
            {whyfiles.map((item) => (
              <Link
                key={item.slug}
                href={`/whyfiles/${item.slug}`}
                className="block border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-5 underline-offset-4 hover:underline"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                  {item.claim}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Go next
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/review"
              className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
            >
              Review
            </Link>

            <Link
              href="/governance"
              className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
            >
              Governance
            </Link>

            <Link
              href="/limits"
              className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
            >
              Limits
            </Link>

            <Link
              href="/system-coherence"
              className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
            >
              System
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
