import Link from "next/link";

const docGroups = [
  {
    title: "First read",
    body: "Start here if you are new and need the clearest path through the system.",
    links: [
      { label: "Start Here", href: "/start" },
      { label: "Standard", href: "/standard" },
      { label: "Limits", href: "/limits" },
      { label: "Review", href: "/review" },
      { label: "System Coherence", href: "/system-coherence" },
    ],
  },
  {
    title: "Review path",
    body: "Use these when you want to critique the standard or see how criticism is handled.",
    links: [
      { label: "Review Intake", href: "/review-intake" },
      { label: "Reviewer Briefs", href: "/reviewer-briefs" },
      { label: "Review Response Log", href: "/review-response-log" },
      { label: "Feedback Seeds", href: "/feedback-seeds" },
      { label: "Launch Copy", href: "/launch-copy" },
    ],
  },
  {
    title: "Governance path",
    body: "Use these to inspect misuse resistance, drift controls, stress tests, and boundaries.",
    links: [
      { label: "Governance", href: "/governance" },
      { label: "Abuse Cases", href: "/abuse-cases" },
      { label: "Incentive Drift", href: "/incentive-drift" },
      { label: "Stress Tests", href: "/stress-tests" },
      { label: "Rejected Patterns", href: "/rejected-patterns" },
    ],
  },
  {
    title: "Rationale path",
    body: "Use these to understand why the rules exist and how decisions are justified.",
    links: [
      { label: "Whyfiles", href: "/whyfiles" },
      { label: "Trust Layer", href: "/trust" },
      { label: "System Map", href: "/system-map" },
      { label: "Review OS", href: "/review-os" },
    ],
  },
  {
    title: "Funding path",
    body: "Use these to inspect sustainability logic without confusing support with legitimacy.",
    links: [
      { label: "Funding", href: "/funding" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Donation Readiness", href: "/donation-readiness" },
      { label: "Supporter Copy", href: "/supporter-copy" },
      { label: "Sponsor Terms", href: "/sponsor-terms" },
      { label: "Recognition Boundaries", href: "/recognition-boundaries" },
      { label: "Payment Provider Evaluation", href: "/payment-provider-evaluation" },
      { label: "Donation Provider Decision", href: "/donation-provider-decision" },
      { label: "Donation Gate", href: "/donation-gate" },
      { label: "Donation Staging", href: "/donation-staging" },
      { label: "Donation Launch Review", href: "/donation-launch-review" },
    ],
  },
];

export default function DocsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Documentation
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Docs
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          A curated map of the public standard, review system, governance layer,
          rationale records, funding boundaries, and traceability archive.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            Start with the reader path, not the archive
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Most readers do not need every artifact. Use the groups below to
            choose the right path first. The full archive remains preserved
            through deep links and release documentation.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {docGroups.map((group) => (
            <article
              key={group.title}
              className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {group.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
                {group.body}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Archive
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            Release notes, Markdown files, templates, schemas, and supporting
            artifacts remain part of the traceability archive. They are preserved
            for auditability, not promoted as the first reading path.
          </p>
        </section>
      </section>
    </main>
  );
}
