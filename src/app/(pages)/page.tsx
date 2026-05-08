import { WhoWeServe } from "@/components/sections/who-we-serve";
import { CtaSection } from "@/components/sections/cta-section";
import { Services } from "@/components/sections/services";
import { HeroSection } from "@/components/sections/hero-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { PartnersStrip } from "@/components/sections/partners-strip";
import { WhoWeAre } from "@/components/sections/who-we-are";
import {
  coreServices,
  heroContent,
  partners,
  whyChooseUs,
} from "@/utils/site-content";

export default function HomePage() {
  return (
    <>
      <HeroSection {...heroContent} />
      <PartnersStrip partners={partners} />
      <Services services={coreServices} />
      <WhyChooseUs steps={whyChooseUs} />
      <WhoWeAre />
      <WhoWeServe />
      <CtaSection />
    </>
  );
}