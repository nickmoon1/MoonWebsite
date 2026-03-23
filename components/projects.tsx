"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { portfolioData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Portfolio", 0.35);

  return (
    <section ref={ref} id="portfolio" className="mb-28 scroll-mt-28">
      <SectionHeading>Data science portfolio</SectionHeading>
      <p className="mx-auto mb-10 max-w-[42rem] text-center leading-7 text-gray-700 dark:text-white/75">
        Selected work across NLP research, analytics, machine learning, and
        generative AI workflows, with an emphasis on translating technical work
        into clear insights.
      </p>
      <div>
        {portfolioData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
