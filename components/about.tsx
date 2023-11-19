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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello, I'm Moon from Kenya, currently residing in the USA. While pursuing my B.S. degree in {" "}
        <span className="font-medium">Computer Science</span> at Benedict College, I invested more into my
        passion for programming. Afterwards, I enrolled in a Masters program at the University of Nebraska-Lincoln (UNL) and learned{" "}
        <span className="font-medium">the intricacies of Machine Learning and NLP</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Python, C++, and SQL
        </span>
        . I am also familiar with JavaScript and PHP. I am always looking to
        learn new technologies. I am currently open to collaborate on any opensource NLP projects.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, playing basketball, swimming and reading. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning to{" "}
        <span className="font-medium">cook different cuisines </span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
