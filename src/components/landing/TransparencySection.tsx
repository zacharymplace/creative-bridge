import Link from "next/link";
import { ethicsStandardMeta } from "@/content/ethics-standard";
import { transparencyCopy } from "@/content/site-copy";

const referenceLinks = [
  { label: "Documentation index", href: "/docs" },
  { label: "Standard (readable)", href: "/standard" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Creative Bridge Standard (Markdown)", href: "/docs/creative-bridge-standard.md" },
  { label: "Example project payload", href: "/docs/examples/project.example.json" },
  { label: "Example collaborator payload", href: "/docs/examples/collaborator.example.json" },
  { label: "project.schema.json", href: "/docs/project.schema.json" },
  { label: "collaborator.schema.json", href: "/docs/collaborator.schema.json" },
] as const;

export function TransparencySection() {
  return (
    <section
      id={transparencyCopy.id}
      className="border-b border-[var(--cb-border)] bg-[var(--cb-surface)]"
    >
      <div className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          {transparencyCopy.eyebrow}
        </p>
        <h2 className="cb-display mt-4 max-w-2xl text-3xl tracking-tight text-[var(--cb-ink)] sm:text-4xl">
          {transparencyCopy.title}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--cb-body)]">{transparencyCopy.intro}</p>
        <div className="mt-10 grid gap-8 border border-[var(--cb-border)] bg-[var(--cb-canvas)] p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
              {transparencyCopy.standardVersionLabel}
            </p>
            <p className="cb-display mt-3 text-2xl text-[var(--cb-ink)]">{ethicsStandardMeta.publicLabel}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
              {transparencyCopy.siteLastUpdatedLabel}
            </p>
            <p className="cb-display mt-3 text-lg leading-snug text-[var(--cb-body)]">
              {transparencyCopy.siteLastUpdatedPlaceholder}
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            {transparencyCopy.referencesHeading}
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {referenceLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
