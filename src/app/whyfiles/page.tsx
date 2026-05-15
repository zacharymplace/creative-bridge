import Link from "next/link";

import { whyfiles, whyfilesMeta } from "@/content/whyfiles/whyfiles";

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
          <h2 className="text-base font-medium text-[var(--cb-ink)]">Position</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {whyfilesMeta.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">Rationale records</h2>
          <div className="mt-6 grid gap-5">
            {whyfiles.map((whyfile) => (
              <article key={whyfile.slug} className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  <Link href={`/whyfiles/${whyfile.slug}`} className="underline-offset-4 hover:underline">
                    {whyfile.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {whyfile.claim}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
