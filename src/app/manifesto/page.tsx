
import Link from "next/link";

const coreBeliefs = [

  {

    title: "Creative work deserves disclosure without shame",

    description:

      "AI-assisted creative work should be explainable without forcing creators into apology, mystique, or vague process language.",

  },

  {

    title: "Review should find pressure, not collect praise",

    description:

      "Useful review looks for weak claims, unclear boundaries, misuse risk, missing consent, and incentive drift.",

  },

  {

    title: "Authority should be constrained",

    description:

      "The Creative Bridge should not become a badge, certification layer, approval machine, or public status system.",

  },

  {

    title: "Systems should show their refusals",

    description:

      "Rejected patterns, gated capabilities, abuse cases, and rationale records should remain visible enough to prevent quiet drift.",

  },

];

const doesNotClaim = [

  "The manifesto does not certify, verify, approve, or endorse creative work.",

  "The manifesto does not claim moral superiority over other creative processes.",

  "The manifesto does not require a single correct way to use AI.",

  "The manifesto does not turn participation, support, or review into status.",

  "The manifesto does not replace the standard, limits, governance, or review pages.",

];

const operatingPosture = [

  "Prefer clear boundaries over broad promises.",

  "Prefer critique over praise capture.",

  "Prefer traceability over vibes.",

  "Prefer consent and attribution over implied association.",

  "Prefer gated capability over premature platform expansion.",

  "Prefer practical language over institutional theater.",

];

const escalationPaths = [

  { label: "Standard", href: "/standard" },

  { label: "Limits", href: "/limits" },

  { label: "Review", href: "/review" },

  { label: "Governance", href: "/governance" },

  { label: "Whyfiles", href: "/whyfiles" },

  { label: "System Map", href: "/system-map" },

];

export default function ManifestoPage() {

  return (

    <main>

      <section className="cb-container cb-section-y">

        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">

          Principles and posture

        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">

          Manifesto

        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">

          The manifesto explains the posture behind The Creative Bridge. It is

          a statement of principles, not a certification claim, authority layer,

          moral ranking, or launch slogan.

        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">

          <h2 className="text-lg font-medium text-[var(--cb-ink)]">

            What this page is for

          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">

            Use this page to understand the values behind the standard before

            moving into rules, limits, review mechanics, governance, and

            rationale records.

          </p>

        </section>

        <section className="mt-12 grid gap-6">

          {coreBeliefs.map((item) => (

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

        <section className="mt-12 grid gap-8 lg:grid-cols-2">

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">

            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">

              What it does not claim

            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">

              {doesNotClaim.map((item) => (

                <li key={item}>— {item}</li>

              ))}

            </ul>

          </article>

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">

            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">

              Operating posture

            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">

              {operatingPosture.map((item) => (

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

