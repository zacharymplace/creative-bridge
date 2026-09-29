import Link from "next/link";

const rejectedPatterns = [
  {
    title: "Certification badges",
    refused:
      "Badges that imply a project, creator, tool, or dataset is approved, verified, ethical, safe, or trusted.",
    why:
      "Badges compress complex review into a status signal and invite legitimacy laundering.",
    safer:
      "Use plain-language reference links to the standard, limits, review records, and unresolved risks.",
  },
  {
    title: "Pay-to-prioritize review",
    refused:
      "Any funding model where donors, supporters, sponsors, or customers receive faster or more favorable review.",
    why:
      "Review priority becomes purchasable influence, even if the underlying review remains honest.",
    safer:
      "Keep funding separate from review handling. Use response logs and donation gate checks.",
  },
  {
    title: "Verified creator rankings",
    refused:
      "Ranking, scoring, featuring, or validating creators before governance can prevent marketplace drift.",
    why:
      "Rankings turn the standard into a discovery marketplace and create incentive pressure around visibility.",
    safer:
      "Keep project pages descriptive, not ranked. Route marketplace requests through governance first.",
  },
  {
    title: "Sponsor influence language",
    refused:
      "Copy that suggests sponsors help steer priorities, shape standards, gain standing, or enable preferred access.",
    why:
      "Sponsor recognition can become governance capture if the boundary is not explicit.",
    safer:
      "Use sponsor non-interference terms and recognition boundaries before any sponsor surface goes live.",
  },
  {
    title: "AI-use minimalism",
    refused:
      "Disclosure language that technically admits AI use while hiding material impact on process, claims, labor, or output.",
    why:
      "Minimal disclosure creates the appearance of transparency without real reader understanding.",
    safer:
      "Use material-use disclosure: where AI shaped the work, what was human-led, and what remains uncertain.",
  },
  {
    title: "Approval-centered review",
    refused:
      "Review flows that ask readers to validate, endorse, praise, or publicly support the standard.",
    why:
      "Approval signals reduce pressure and turn public review into launch marketing.",
    safer:
      "Ask for misuse cases, missing protections, incentive drift, false authority risk, and unclear language.",
  },
];

const escalationPaths = [
  { label: "Governance", href: "/governance" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Incentive Drift", href: "/incentive-drift" },
  { label: "Limits", href: "/limits" },
  { label: "Review", href: "/review" },
  { label: "Funding", href: "/funding" },
];

export default function RejectedPatternsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Refusal library
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Rejected Patterns
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Rejected patterns are design options the system refuses because they
          create false authority, incentive drift, sponsor capture, review
          theater, or marketplace pressure.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            This page makes refusal explicit. If a proposed feature or message
            appears here, it should not be added unless the underlying risk has
            been resolved through governance, limits, review, and rationale.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {rejectedPatterns.map((item) => (
            <article
              key={item.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Refused
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.refused}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Why
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.why}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Safer alternative
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.safer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Escalate to
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {escalationPaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
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
