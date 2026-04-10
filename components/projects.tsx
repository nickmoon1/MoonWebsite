"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { portfolioData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Portfolio", 0.35);

  return (
    <section
      ref={ref}
      id="portfolio"
      className="mb-28 w-full max-w-[72rem] scroll-mt-28"
    >
      <SectionHeading>Portfolio & presentations</SectionHeading>
      <p className="mx-auto mb-10 max-w-[52rem] text-center leading-7 text-gray-700 dark:text-white/75">
        Selected case studies, reports, and dashboards across machine learning,
        analytics, NLP, and generative AI, presented with the business question,
        approach, and takeaway in one place.
      </p>
      <div>
        {portfolioData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
