import Link from "next/link";

const stagingDoesNotMean = [
  "Staging does not mean donation links are public.",
  "Staging does not mean donation readiness has passed.",
  "Staging does not mean the Donation Gate has passed.",
  "Staging does not authorize live supporter recognition, sponsor language, or public funding claims.",
  "Staging does not remove the need for final launch review.",
];

const stagingChecks = [
  {
    title: "Copy behaves safely",
    description:
      "Donation language can be previewed without implying certification, endorsement, influence, priority, or trust status.",
  },
  {
    title: "Provider flow is understandable",
    description:
      "The staged payment path, provider labels, confirmation screens, and receipts are clear enough to evaluate before launch.",
  },
  {
    title: "Records can be traced",
    description:
      "Test records, transaction metadata, fee handling, refund behavior, and acknowledgment logic can be reviewed.",
  },
  {
    title: "Recognition remains constrained",
    description:
      "Any supporter, sponsor, public thanks, logo, or acknowledgment language remains bounded and non-authoritative.",
  },
  {
    title: "Rollback is proven",
    description:
      "The staged path can be paused, hidden, removed, or revised without leaving public-facing residue.",
  },
];

const unsafeSignals = [
  "Staging URLs or copy are being shared as if launch is active.",
  "Support language implies approval, status, trust, priority, or influence.",
  "Provider screens introduce claims that the site copy avoids.",
  "Recognition language is expanding before boundaries are finalized.",
  "Staging pressure is being used to skip Donation Gate or Launch Review.",
];

const escalationPaths = [
  { label: "Donation Launch Review", href: "/donation-launch-review" },
  { label: "Donation Gate", href: "/donation-gate" },
  { label: "Donation Readiness", href: "/donation-readiness" },
  { label: "Donation Provider Decision", href: "/donation-provider-decision" },
  { label: "Funding", href: "/funding" },
  { label: "Supporter Copy", href: "/supporter-copy" },
];

export default function DonationStagingPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Staging environment and prelaunch safety
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Donation Staging
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Donation staging is where support mechanics, language, provider flow,
          records, and rollback behavior can be tested before anything becomes
          public.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What staging is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to test the donation path safely before activation.
            Staging should reveal language problems, provider risks,
            operational gaps, and rollback issues while the public surface is
            still protected.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Staging does not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {stagingDoesNotMean.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Unsafe staging signals
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {unsafeSignals.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {stagingChecks.map((item) => (
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
