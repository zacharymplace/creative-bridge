import Link from "next/link";

import { systemMap } from "@/content/system-map/system-map";

export default function SystemMapPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {systemMap.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {systemMap.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {systemMap.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {systemMap.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Layers
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {systemMap.layers.map((layer) => (
              <article
                key={layer.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  <Link href={layer.href} className="underline-offset-4 hover:underline">
                    {layer.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {layer.role}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            How the system moves
          </h2>

          <ol className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {systemMap.flow.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
      </section>
    </main>
  );
}
