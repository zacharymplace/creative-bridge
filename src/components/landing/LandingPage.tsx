import { siteNav } from "@/content/site-copy";
import { CollaboratorsSection } from "./CollaboratorsSection";
import { CreatorsSection } from "./CreatorsSection";
import { HeroSection } from "./HeroSection";
import { HowSection } from "./HowSection";
import { ManifestoSection } from "./ManifestoSection";
import { MobileNav } from "./MobileNav";
import { NextFrontierSection } from "./NextFrontierSection";
import { PositionSection } from "./PositionSection";
import { ProblemSection } from "./ProblemSection";
import { SiteFooter } from "./SiteFooter";
import { StartHereSection } from "./StartHereSection";
import { StandardSection } from "./StandardSection";
import { TiersSection } from "./TiersSection";
import { TransparencySection } from "./TransparencySection";

export function LandingPage() {
  return (
    <>
      <a
        href="#position"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[var(--cb-ink)] focus:bg-[var(--cb-canvas)] focus:px-4 focus:py-2 focus:text-sm"
      >
        {siteNav.skipToContent}
      </a>
      <HeroSection />
      <MobileNav />
      <NextFrontierSection />
      <StartHereSection />
      <main>
        <PositionSection />
        <ProblemSection />
        <HowSection />
        <TiersSection />
        <CreatorsSection />
        <CollaboratorsSection />
        <TransparencySection />
        <StandardSection />
        <ManifestoSection />
      </main>
      <SiteFooter />
    </>
  );
}
