import { problemCopy } from "@/content/site-copy";
import { Section } from "./Section";

export function ProblemSection() {
  return (
    <Section
      id={problemCopy.id}
      eyebrow={problemCopy.eyebrow}
      title={problemCopy.title}
    >
      <ul className="space-y-10">
        {problemCopy.bullets.map((b) => (
          <li key={b.title} className="border-l border-[var(--cb-border-strong)] pl-6">
            <p className="font-medium text-[var(--cb-ink)]">{b.title}</p>
            <p className="mt-2 text-[var(--cb-body)]">{b.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
