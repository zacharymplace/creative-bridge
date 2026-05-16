import Link from "next/link";

const lanes = [
  {
    title: "Start",
    href: "/start",
    body:
      "The reader router. It helps new readers choose the right path without needing the full archive.",
    links: [
      { label: "Start", href: "/start" },
      { label: "Standard", href: "/standard" },
      { label: "Limits", href: "/limits" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    title: "Review",
    href: "/review",
    body:
      "The critique layer. It turns external pressure into traceable improvement instead of vague approval.",
    links: [
      { label: "Review", href: "/review" },
      { label: "Review Intake", href: "/review-intake" },
      { label: "Reviewer Briefs", href: "/reviewer-briefs" },
      { label: "Response Log", href: "/review-response-log" },
      { label: "Feedback Seeds", href: "/feedback-seeds" },
    ],
  },
  {
    title: "Governance",
    href: "/governance",
    body:
      "The misuse-resistance layer. It tracks failure modes, incentive drift, abuse cases, and rejected patterns.",
    links: [
      { label: "Governance", href: "/governance" },
      { label: "Abuse Cases", href: "/abuse-cases" },
      { label: "Incentive Drift", href: "/incentive-drift" },
      { label: "Stress Tests", href: "/stress-tests" },
      { label: "Rejected Patterns", href: "/rejected-patterns" },
    ],
  },
  {
    title: "Rationale",
    href: "/whyfiles",
    body:
      "The explanation layer. It documents why decisions exist so the project does not rely on vibes or authority claims.",
    links: [
      { label: "Whyfiles", href: "/whyfiles" },
      { label: "Trust", href: "/trust" },
      { label: "System Map", href: "/system-map" },
      { label: "Review OS", href: "/review-os" },
    ],
  },
  {
    title: "Funding",
    href: "/funding",
    body:
      "The sustainability layer. It defines what support can maintain without buying influence, legitimacy, or priority.",
    links: [
      { label: "Funding", href: "/funding" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Donation Gate", href: "/donation-gate" },
      { label: "Launch Review", href: "/donation-launch-review" },
    ],
  },
];

const gated = [
  "Payment buttons and live donation links",
  "Supporter recognition mechanics",
  "Sponsor visibility mechanics",
  "Marketplace behavior",
  "Creator rankings, verification, or certification",
  "Any feature that could imply legitimacy, priority, endorsement, or approval",
];

const archive = [
  "Release notes",
  "Markdown decision records",
  "Templates and schemas",
  "Older review artifacts",
  "Deep rationale records",
  "Implementation staging documents",
];

export default function SystemCoherencePage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Executive map
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          System Coherence
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          The Creative Bridge is organized as a public operating system: start
          with the standard, invite pressure through review, preserve reasoning
          through governance and rationale, and keep funding constrained by
          explicit non-interference rules.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page does
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            This page explains how the system fits together. It is not meant to
            expose every artifact equally. Deep pages remain available for
            traceability, but the main lanes define the operating shape.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {lanes.map((lane) => (
            <article
              key={lane.title}
              className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                    {lane.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
                    {lane.body}
                  </p>
                </div>

                <Link
                  href={lane.href}
                  className="w-fit rounded-full bg-[var(--cb-ink)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white underline-offset-4 hover:underline"
                >
                  Open
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {lane.links.map((item) => (
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

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Intentionally gated
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {gated.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Deep archive
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {archive.map((item) => (
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
            <Link
              href="/start"
              className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
            >
              Start
            </Link>
            <Link
              href="/docs"
              className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
            >
              Docs
            </Link>
            <Link
              href="/review"
              className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
            >
              Review
            </Link>
            <Link
              href="/funding"
              className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
            >
              Funding
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
