import About from "@/components/about";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Insights from "@/components/insights";
import Intro from "@/components/intro";
import Presentations from "@/components/presentations";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Certifications />
      <Presentations />
      <Insights />
      <Skills />
      <Experience />
      <Contact />
      <Analytics />
    </main>
  );
}
