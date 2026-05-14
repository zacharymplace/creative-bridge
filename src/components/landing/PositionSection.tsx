import { positionCopy } from "@/content/site-copy";
import { Section } from "./Section";

export function PositionSection() {
  return (
    <Section
      id={positionCopy.id}
      eyebrow={positionCopy.eyebrow}
      title={positionCopy.title}
    >
      {positionCopy.paragraphs.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
    </Section>
  );
}
