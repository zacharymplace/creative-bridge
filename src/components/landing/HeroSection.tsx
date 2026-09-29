import Link from "next/link";

export function HeroSection() {
  return (
    <section className="border-b border-[var(--cb-border)] bg-[var(--cb-canvas)]">
      <div className="cb-container py-20 sm:py-24">
        <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[var(--cb-muted)]">
          The Creative Bridge
        </p>

        <h1 className="cb-display mt-5 max-w-5xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-6xl sm:leading-[1.05]">
          A public standard for AI-assisted creative work.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Built around collaboration, traceability, critique, and misuse
          resistance — not certification, ranking, or replacement.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/start"
            className=" bg-[var(--cb-ink)] px-5 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--paper)] underline-offset-4 hover:underline"
          >
            Start here
          </Link>
          <Link
            href="/review"
            className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-5 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--cb-ink)] underline-offset-4 hover:underline"
          >
            Review
          </Link>
          <Link
            href="/standard"
            className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-5 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--cb-ink)] underline-offset-4 hover:underline"
          >
            Standard
          </Link>
        </div>
      </div>
    </section>
  );
}
