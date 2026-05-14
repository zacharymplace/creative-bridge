import { creatorsCopy } from "@/content/site-copy";
import { Section } from "./Section";

export function CreatorsSection() {
  return (
    <Section
      id={creatorsCopy.id}
      eyebrow={creatorsCopy.eyebrow}
      title={creatorsCopy.title}
    >
      {creatorsCopy.paragraphs.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
    </Section>
  );
}
