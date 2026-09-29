import Link from "next/link";

const driftPatterns = [
  {
    title: "Review becomes approval",
    drift:
      "The review layer starts functioning like endorsement, validation, or public permission.",
    warning:
      "Readers ask whether a project has been approved instead of asking what pressure it has survived.",
    control:
      "Keep review framed around criticism, response logs, rejected suggestions, and unresolved risks.",
  },
  {
    title: "Funding becomes influence",
    drift:
      "Donations, sponsorship, or supporter status begin shaping visibility, priority, language, or governance.",
    warning:
      "Supporters expect faster responses, recognition advantages, public standing, or policy influence.",
    control:
      "Route through Funding, Sponsor Terms, Recognition Boundaries, and Donation Gate before adding mechanics.",
  },
  {
    title: "Documentation becomes theater",
    drift:
      "Artifacts exist but stop improving real understanding, auditability, or decision quality.",
    warning:
      "Pages multiply without clearer reader paths, stronger controls, or better traceability.",
    control:
      "Use Docs, System Coherence, and reader-pass releases to compress navigation and preserve purpose.",
  },
  {
    title: "Rationale becomes justification",
    drift:
      "Whyfiles are used to defend existing decisions instead of making tradeoffs critiqueable.",
    warning:
      "Rationale records stop accepting pressure, exceptions, or evidence that a boundary needs revision.",
    control:
      "Keep Whyfiles connected to review, abuse cases, and response logs.",
  },
  {
    title: "Platform becomes marketplace",
    drift:
      "The system starts ranking, matching, certifying, featuring, or validating projects before governance is ready.",
    warning:
      "Requests for badges, profiles, featured creators, rankings, matching flows, or trusted status increase.",
    control:
      "Keep platform capability gated until misuse resistance is stronger than growth pressure.",
  },
  {
    title: "Clarity becomes rigidity",
    drift:
      "The standard becomes so defensive that legitimate creators cannot understand or use it.",
    warning:
      "Readers understand what is forbidden but not how to participate safely.",
    control:
      "Balance Limits with Start, Standard, Review, Docs, and safe-reference language.",
  },
];

const escalationPaths = [
  { label: "Governance", href: "/governance" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Review", href: "/review" },
  { label: "Whyfiles", href: "/whyfiles" },
  { label: "Funding", href: "/funding" },
  { label: "System Coherence", href: "/system-coherence" },
];

export default function IncentiveDriftPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Drift detection
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Incentive Drift
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Incentive drift is what happens when a system keeps its public
          language but slowly changes what it rewards. This page names the
          drift patterns The Creative Bridge needs to detect early.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            The goal is not to assume failure. The goal is to make the warning
            signs visible before review, funding, documentation, or platform
            mechanics start rewarding the wrong behavior.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {driftPatterns.map((item) => (
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
                    Drift
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.drift}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Warning sign
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.warning}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Control
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.control}
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
