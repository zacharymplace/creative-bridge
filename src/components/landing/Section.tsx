import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-[var(--cb-border)] bg-[var(--cb-surface)] ${className}`}
    >
      <div className="cb-container cb-section-y">
        {eyebrow ? (
          <p className="cb-eyebrow font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="cb-display mt-4 max-w-2xl text-3xl sm:text-4xl tracking-tight text-[var(--cb-ink)]">
          {title}
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--cb-body)]">
          {children}
        </div>
      </div>
    </section>
  );
}
