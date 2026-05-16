import Link from "next/link";

export default function LimitsPage() {
  const nonAuthority = [
    "Does not certify tools, creators, projects, datasets, models, vendors, or workflows.",
    "Does not verify that a project is ethical, safe, lawful, original, or fair.",
    "Does not endorse creators, collaborators, reviewers, sponsors, funders, or institutions.",
    "Does not replace legal, labor, privacy, safety, accessibility, or professional review.",
    "Does not create rankings, approval labels, verified status, or marketplace legitimacy.",
    "Does not prove that consent, credit, authorship, or disclosure issues have been resolved.",
  ];

  const overclaims = [
    "Approved by The Creative Bridge",
    "Certified under The Creative Bridge",
    "Verified AI-ethical project",
    "Creative Bridge compliant",
    "Trusted creator status",
    "Reviewed therefore safe",
    "Donation-supported therefore legitimate",
  ];

  const safeReferences = [
    "This project references The Creative Bridge as a public review standard.",
    "This project uses The Creative Bridge as a self-assessment and disclosure framework.",
    "This project is being reviewed against Creative Bridge questions, but no certification or endorsement is implied.",
  ];

  const nextSteps = [
    { label: "Read the standard", href: "/standard" },
    { label: "Review the system", href: "/review" },
    { label: "See whyfiles", href: "/whyfiles" },
    { label: "Return to start", href: "/start" },
  ];

  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Non-authority statement
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Limits
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          The Creative Bridge is a public standard and review framework. It is
          not an authority label, certification system, endorsement engine, or
          substitute for project-specific judgment.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page does
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            This page defines what The Creative Bridge cannot claim, cannot
            approve, and cannot safely imply. It exists to prevent the standard
            from being used as legitimacy theater.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            What The Creative Bridge does not do
          </h2>

          <div className="mt-6 grid gap-4">
            {nonAuthority.map((item) => (
              <article
                key={item}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-5"
              >
                <p className="text-sm leading-7 text-[var(--cb-body)]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Avoid these overclaims
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {overclaims.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Safer references
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {safeReferences.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Go next
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {nextSteps.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
