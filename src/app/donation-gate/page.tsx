import Link from "next/link";

const earlierStepsDoNotMean = [
  "Donation readiness does not mean donation links should be public.",
  "Provider selection does not mean the support path is approved for launch.",
  "Funding intent does not override public-copy, recognition, or governance safeguards.",
  "A prior release note does not authorize activation by default.",
  "The gate can still stop launch even if every upstream page looks complete.",
];

const gateConditions = [
  {
    title: "Public copy is safe",
    description:
      "Donation language clearly states what support can and cannot buy, with no implication of endorsement, approval, influence, priority, or certification.",
  },
  {
    title: "Provider setup is controlled",
    description:
      "The selected provider can be paused, removed, audited, and explained without creating operational ambiguity.",
  },
  {
    title: "Recognition rules are constrained",
    description:
      "Supporter acknowledgment, sponsor-like language, public thanks, and any names or logos are governed before activation.",
  },
  {
    title: "Records are traceable",
    description:
      "Transactions, fees, refunds, acknowledgments, changes, and provider decisions can be recorded and reviewed.",
  },
  {
    title: "Rollback path exists",
    description:
      "There is a clear stop, pause, edit, or removal path if public interpretation or incentive behavior drifts.",
  },
];

const stopConditions = [
  "Donation copy implies approval, trust, endorsement, certification, or status.",
  "Supporters appear to receive access, influence, ranking, review priority, or governance power.",
  "Recognition boundaries are unclear or expanding faster than controls.",
  "Provider mechanics cannot be paused or reversed cleanly.",
  "Funding pressure is being used to rush unresolved governance questions.",
];

const escalationPaths = [
  { label: "Donation Readiness", href: "/donation-readiness" },
  { label: "Donation Provider Decision", href: "/donation-provider-decision" },
  { label: "Funding", href: "/funding" },
  { label: "Recognition Boundaries", href: "/recognition-boundaries" },
  { label: "Supporter Copy", href: "/supporter-copy" },
  { label: "Governance", href: "/governance" },
];

export default function DonationGatePage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Launch control and activation boundary
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Donation Gate
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          The Donation Gate is the final control before donation mechanics
          become public. It keeps readiness work, provider selection, and
          funding intent from turning into automatic launch permission.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this gate is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to decide whether donation links, support language,
            provider mechanics, recognition rules, and rollback controls are
            safe enough for public activation.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Earlier steps do not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {earlierStepsDoNotMean.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Stop conditions
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {stopConditions.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {gateConditions.map((item) => (
            <article
              key={item.title}
              className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                {item.description}
              </p>
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
