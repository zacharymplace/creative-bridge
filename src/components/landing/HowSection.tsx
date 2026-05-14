import { howCopy } from "@/content/site-copy";
import { Section } from "./Section";

export function HowSection() {
  return (
    <Section id={howCopy.id} eyebrow={howCopy.eyebrow} title={howCopy.title}>
      <p>{howCopy.intro}</p>
      <ol className="mt-4 list-decimal space-y-8 pl-6 marker:text-[var(--cb-muted)]">
        {howCopy.steps.map((s) => (
          <li key={s.title}>
            <p className="font-medium text-[var(--cb-ink)]">{s.title}</p>
            <p className="mt-2 text-[var(--cb-body)]">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
