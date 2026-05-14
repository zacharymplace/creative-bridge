import Link from "next/link";
import {
  manifestoClosing,
  manifestoMeta,
  manifestoPreamble,
  manifestoSections,
} from "@/content/manifesto";

export function ManifestoDocument() {
  return (
    <main className="border-b border-[var(--cb-border)] bg-[var(--cb-canvas)]">
      <div className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Public statement
        </p>
        <h1 className="cb-display mt-4 max-w-2xl text-3xl tracking-tight text-[var(--cb-ink)] sm:text-4xl sm:leading-tight">
          {manifestoMeta.title}
        </h1>
        <p className="mt-6 max-w-xl font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
          Version {manifestoMeta.version} · recorded {manifestoMeta.lastReviewed}
        </p>
        <p className="cb-display mt-14 max-w-2xl text-2xl leading-snug text-[var(--cb-ink)] sm:text-3xl sm:leading-snug">
          {manifestoPreamble}
        </p>
        <div className="mt-16 max-w-3xl space-y-16">
          {manifestoSections.map((s) => (
            <section key={s.id}>
              <h2 className="text-lg font-medium text-[var(--cb-ink)]">{s.title}</h2>
              <ul className="mt-6 space-y-5 text-base leading-relaxed text-[var(--cb-body)]">
                {s.statements.map((line) => (
                  <li key={line} className="border-l border-[var(--cb-border-strong)] pl-5">
                    {line}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <section className="mt-20 max-w-2xl border-t border-[var(--cb-border)] pt-14">
          <h2 className="cb-display text-2xl text-[var(--cb-ink)]">{manifestoClosing.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--cb-body)]">{manifestoClosing.body}</p>
        </section>
        <div className="mt-12">
          <Link href="/" className="text-sm text-[var(--cb-body)] underline-offset-4 hover:underline">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
