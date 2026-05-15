import Link from "next/link";

import { startHere } from "@/content/start/start-here";

export default function StartPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {startHere.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {startHere.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {startHere.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {startHere.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Choose a path
          </h2>

          <div className="mt-6 grid gap-5">
            {startHere.paths.map((path) => (
              <article
                key={path.href}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  <Link
                    href={path.href}
                    className="underline-offset-4 hover:underline"
                  >
                    {path.title}
                  </Link>
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {path.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {path.next.map((href) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-full border border-[var(--cb-border)] bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
                    >
                      {href}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
