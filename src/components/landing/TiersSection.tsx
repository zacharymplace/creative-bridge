import { projectTiers, projectTiersMeta } from "@/content/project-tiers";
import { Section } from "./Section";

export function TiersSection() {
  return (
    <Section id="tiers" eyebrow="Labels" title="Project tiers">
      <p>{projectTiersMeta.usage}</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projectTiers.map((tier) => (
          <article
            key={tier.id}
            className="flex flex-col border border-[var(--cb-border)] bg-[var(--cb-canvas)] p-6 sm:p-8"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
              {tier.id}
            </p>
            <h3 className="cb-display mt-3 text-xl text-[var(--cb-ink)]">{tier.label}</h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">{tier.summary}</p>
            <div className="mt-6 border-t border-[var(--cb-border)] pt-6">
              <p className="text-sm font-medium text-[var(--cb-ink)]">Machine role</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--cb-body)]">{tier.machineRole}</p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-[var(--cb-ink)]">Human expectations</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--cb-body)]">
                {tier.humanExpectations.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
