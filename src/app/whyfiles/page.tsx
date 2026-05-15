import Link from "next/link";

import { whyfileCategories, whyfilesMeta } from "@/content/whyfiles/whyfiles";

export default function WhyfilesPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {whyfilesMeta.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {whyfilesMeta.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {whyfilesMeta.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {whyfilesMeta.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Rationale system
          </h2>

          <div className="mt-6 grid gap-8">
            {whyfileCategories.map((category) => (
              <section
                key={category.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <div className="max-w-3xl">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                    Category
                  </p>
                  <h3 className="mt-3 text-2xl font-medium text-[var(--cb-ink)]">
                    {category.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                    {category.description}
                  </p>
                </div>

                <div className="mt-6 grid gap-4">
                  {category.items.map((whyfile) => (
                    <article
                      key={whyfile.slug}
                      className="border border-[var(--cb-border)] bg-white p-5"
                    >
                      <h4 className="text-base font-medium text-[var(--cb-ink)]">
                        <Link
                          href={`/whyfiles/${whyfile.slug}`}
                          className="underline-offset-4 hover:underline"
                        >
                          {whyfile.title}
                        </Link>
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                        {whyfile.claim}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
