import Link from "next/link";

export function StartHereSection() {
  return (
    <section className="border-y border-[var(--cb-border)] bg-[var(--cb-surface)]">
      <div className="cb-container py-10 sm:py-12">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Public standard system
        </p>

        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <h2 className="cb-display max-w-3xl text-3xl text-[var(--cb-ink)]">
              Start with the router, then review the standard.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--cb-body)]">
              The Creative Bridge is now a public review and rationale system for AI-assisted creative work. New readers should start with the guided entry route before entering the deeper standard, review, governance, and Whyfiles layers.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/start"
              className=" border-[1.5px] border-[var(--cb-ink)] bg-[var(--cb-ink)] px-5 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--paper)]"
            >
              Start here
            </Link>
            <Link
              href="/review"
              className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-5 py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--cb-ink)]"
            >
              Review the standard
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
