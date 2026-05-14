import { collaboratorsCopy } from "@/content/site-copy";
import { Section } from "./Section";

export function CollaboratorsSection() {
  return (
    <Section
      id={collaboratorsCopy.id}
      eyebrow={collaboratorsCopy.eyebrow}
      title={collaboratorsCopy.title}
    >
      {collaboratorsCopy.paragraphs.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
    </Section>
  );
}
