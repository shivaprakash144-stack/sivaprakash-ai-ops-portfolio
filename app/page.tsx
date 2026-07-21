import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WhyRecruiters } from "@/components/sections/why-recruiters";
import { CaseStudies } from "@/components/sections/case-studies";
import { AutomationGallery } from "@/components/sections/automation-gallery";
import { MeasurableImpact } from "@/components/sections/measurable-impact";
import { Experience } from "@/components/sections/experience";
import { Achievements } from "@/components/sections/achievements";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyRecruiters />
      <CaseStudies />
      <AutomationGallery />
      <MeasurableImpact />
      <Experience />
      <Achievements />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}
