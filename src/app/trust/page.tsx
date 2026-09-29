import Link from "next/link";

const trustMeans = [
  {
    title: "Inspectable boundaries",
    description:
      "Readers should be able to see what the system does, what it refuses, and where authority stops.",
  },
  {
    title: "Traceable reasoning",
    description:
      "Important decisions should connect to rationale, review, governance, or refusal records instead of disappearing into informal judgment.",
  },
  {
    title: "Misuse resistance",
    description:
      "The system should make overclaims, incentive drift, disclosure theater, and approval laundering harder to normalize.",
  },
  {
    title: "Reviewable behavior",
    description:
      "Trust depends on how critique is invited, routed, answered, rejected, or converted into changes.",
  },
];

const trustDoesNotMean = [
  "Trust does not mean The Creative Bridge certifies, verifies, approves, or endorses projects.",
  "Trust does not mean a project, person, collaborator, funder, or reviewer receives status.",
  "Trust does not mean review equals approval.",
  "Trust does not mean funding or sponsorship buys influence.",
  "Trust does not mean the system is immune to misuse or complete.",
];

const controls = [
  "Limits define non-authority boundaries.",
  "Review workflows preserve critique and response traceability.",
  "Governance gates prevent premature features from becoming public authority signals.",
  "Whyfiles explain rationale behind important refusals and constraints.",
  "Abuse cases and stress tests make failure modes concrete.",
];

const failureSignals = [
  "People describe the system as a badge, certification, verification, or trust score.",
  "Public language implies reviewed equals approved.",
  "Funding or recognition is interpreted as influence.",
  "Critique becomes praise collection or endorsement gathering.",
  "New capabilities are added before abuse cases, rationale, or governance controls exist.",
];

const escalationPaths = [
  { label: "Limits", href: "/limits" },
  { label: "Governance", href: "/governance" },
  { label: "Review", href: "/review" },
  { label: "Whyfiles", href: "/whyfiles" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Stress Tests", href: "/stress-tests" },
];

export default function TrustPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Trust boundaries
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Trust
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Trust in The Creative Bridge comes from inspectable constraints,
          visible refusals, review handling, and clear limits. It does not come
          from badges, authority claims, social proof, or implied approval.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to understand how the system treats trust as a product
            of boundaries, rationale, review, and governance rather than a
            public status signal.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {trustMeans.map((item) => (
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

        <section className="mt-12 grid gap-8 lg:grid-cols-3">
          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Trust does not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {trustDoesNotMean.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Controls
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {controls.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Failure signals
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {failureSignals.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
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
