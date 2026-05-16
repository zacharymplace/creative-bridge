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
            Thesis
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {startHere.thesis}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Choose your path
          </h2>

          <div className="mt-6 grid gap-5">
            {startHere.paths.map((path) => (
              <article
                key={path.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-xl font-medium text-[var(--cb-ink)]">
                  {path.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
                  {path.body}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={path.href}
                    className="rounded-full bg-[var(--cb-ink)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white underline-offset-4 hover:underline"
                  >
                    Start
                  </Link>
                  <Link
                    href={path.nextHref}
                    className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
                  >
                    {path.next}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            First read
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {startHere.firstRead.map((item) => (
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

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Not required
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            {startHere.notRequired}
          </p>
        </section>
      </section>
    </main>
  );
}
