"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[48rem] scroll-mt-28 text-center leading-8 sm:mb-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <p className="mb-4">
        I&apos;m Nickmoon Mware, a data and AI-focused technologist with a
        background in <span className="font-medium">computer science</span>,
        analytics, and applied research. I earned my B.S. in Computer Science
        from <span className="font-medium">Benedict College</span> and my
        master&apos;s in Computer Science from the{" "}
        <span className="font-medium">University of Nebraska-Lincoln</span>. I
        am currently pursuing an M.S. in{" "}
        <span className="font-medium">
          Information Systems &amp; Business Analytics
        </span>{" "}
        at Park University.
      </p>

      <p className="mb-4">
        My graduate research centered on{" "}
        <span className="font-medium">
          natural language processing and voice user interfaces
        </span>
        , with a particular interest in how accents affect speech-driven systems
        and user experience.
      </p>

      <p>
        Today, I&apos;m focused on{" "}
        <span className="font-medium">
          machine learning, generative AI, and data analytics
        </span>
        , using data to uncover patterns, build useful models, and communicate
        findings clearly for both technical and non-technical audiences.
      </p>
    </motion.section>
  );
}
