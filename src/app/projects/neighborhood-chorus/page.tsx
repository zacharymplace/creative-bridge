import type { Metadata } from "next";
import { ProjectProfileDocument } from "@/components/site/ProjectProfileDocument";
import { PublicPageShell } from "@/components/site/PublicPageShell";
import { neighborhoodChorusProfile } from "@/content/projects";
import { siteMeta } from "@/content/site-copy";

const profile = neighborhoodChorusProfile;

export const metadata: Metadata = {
  title: profile.title,
  description: profile.summary,
  openGraph: {
    title: `${profile.title} · ${siteMeta.title}`,
    description: profile.summary,
    type: "article",
    siteName: siteMeta.title,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.title} · ${siteMeta.title}`,
    description: profile.summary,
  },
};

export default function NeighborhoodChorusProjectPage() {
  return (
    <PublicPageShell>
      <ProjectProfileDocument profile={profile} />
    </PublicPageShell>
  );
}
