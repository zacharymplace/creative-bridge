import Link from "next/link";

const v1Means = [
  {
    title: "Reference stability",
    description:
      "v1 gives readers a stable public reference point for the current standard, limits, review model, and governance posture.",
  },
  {
    title: "Public review baseline",
    description:
      "v1 establishes what readers can inspect, critique, challenge, or pressure-test without chasing a moving target.",
  },
  {
    title: "Constraint snapshot",
    description:
      "v1 records the boundaries, refusals, and operating assumptions that should not drift silently.",
  },
];

const v1DoesNotMean = [
  "v1 does not mean The Creative Bridge is complete.",
  "v1 does not mean the system certifies, verifies, approves, or endorses projects.",
  "v1 does not mean every route is equally important for every reader.",
  "v1 does not mean future changes are blocked.",
  "v1 does not mean funding, sponsorship, or recognition can influence the standard.",
];

const frozenComponents = [
  "The public standard and its non-authority boundaries.",
  "The review posture: critique over praise, traceability over approval.",
  "The limits language around certification, verification, endorsement, and trust claims.",
  "The governance posture around gated capabilities and rejected patterns.",
  "The funding posture separating support from influence, status, or priority.",
];

const changeRules = [
  "Changes should be documented through release notes and reader-pass records.",
  "Material changes should preserve why the change was made, what risk it addresses, and what it does not authorize.",
  "New public capabilities should be gated until misuse, incentive, and governance risks are addressed.",
  "Reader-facing changes should improve comprehension without weakening limits.",
];

const escalationPaths = [
  { label: "Standard", href: "/standard" },
  { label: "Limits", href: "/limits" },
  { label: "Review", href: "/review" },
  { label: "Governance", href: "/governance" },
  { label: "Docs", href: "/docs" },
  { label: "System Map", href: "/system-map" },
];

export default function V1Page() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Public standard freeze
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          v1
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          v1 is a public reference freeze. It gives readers a stable baseline
          for review, critique, governance, and limits without claiming the
          system is finished, authoritative, certified, or complete.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to understand what the public freeze stabilizes, what
            it does not authorize, and how future changes should remain
            traceable.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {v1Means.map((item) => (
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
              v1 does not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {v1DoesNotMean.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Frozen components
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {frozenComponents.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Change rules
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {changeRules.map((item) => (
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
