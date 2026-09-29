import Link from "next/link";

const reviewDoesNotMean = [
  "Launch review does not mean donation links are live.",
  "Launch review does not mean the Donation Gate has passed.",
  "Launch review does not mean provider selection is permanent.",
  "Launch review does not allow support language to imply endorsement, certification, trust, status, or influence.",
  "Launch review does not override unresolved governance, recognition, or funding risks.",
];

const reviewDimensions = [
  {
    title: "Copy clarity",
    description:
      "Public launch language must clearly explain what support does and does not buy without implying authority or approval.",
  },
  {
    title: "Gate alignment",
    description:
      "Donation Readiness, Provider Decision, Donation Gate, Funding, and Recognition Boundaries should agree before activation.",
  },
  {
    title: "Operational handling",
    description:
      "Transactions, refunds, fees, records, acknowledgments, pause paths, and provider changes must be understandable.",
  },
  {
    title: "Misuse resistance",
    description:
      "The launch path should resist certification laundering, supporter influence, sponsor capture, and trust overclaims.",
  },
  {
    title: "Rollback readiness",
    description:
      "The system should be able to pause or remove donation mechanics if public interpretation or incentives drift.",
  },
];

const launchBlockers = [
  "Support copy implies approval, endorsement, certification, trust, priority, or influence.",
  "Recognition boundaries are unclear or sponsor-like acknowledgments are expanding.",
  "Provider setup cannot be paused, removed, audited, or explained.",
  "Refund, fee, acknowledgment, or transaction records are not traceable.",
  "The Donation Gate has not explicitly passed.",
];

const escalationPaths = [
  { label: "Donation Gate", href: "/donation-gate" },
  { label: "Donation Readiness", href: "/donation-readiness" },
  { label: "Donation Provider Decision", href: "/donation-provider-decision" },
  { label: "Funding", href: "/funding" },
  { label: "Recognition Boundaries", href: "/recognition-boundaries" },
  { label: "Supporter Copy", href: "/supporter-copy" },
];

export default function DonationLaunchReviewPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Final review and launch risk
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Donation Launch Review
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Donation Launch Review checks whether public activation would create
          unresolved risk. It is a final inspection layer, not automatic launch
          permission.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this review is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to inspect donation copy, provider setup, recognition
            rules, operational handling, gate alignment, and rollback readiness
            before public launch.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Launch review does not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {reviewDoesNotMean.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Launch blockers
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {launchBlockers.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {reviewDimensions.map((item) => (
            <article
              key={item.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
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
