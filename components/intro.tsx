"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[56rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Mware.jpeg"
              alt="Mware portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-white/55"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Data Analyst | Machine Learning | Generative AI
      </motion.p>

      <motion.h1
        className="mt-4 px-4 text-3xl font-semibold !leading-[1.25] sm:text-5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Nickmoon (Moon) Mware
      </motion.h1>

      <motion.p
        className="mx-auto mt-6 max-w-[42rem] px-4 text-lg leading-8 text-gray-700 dark:text-white/75"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Data professional with a background in machine learning and academia,
        focused on transforming complex datasets into meaningful insights
        through Analytics, Natural Language Processing, Predictive Modeling, and
        Generative AI workflows.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col items-center justify-center gap-3 px-4 text-lg font-medium sm:flex-row sm:flex-wrap"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          href="/Resume.pdf"
          download
        >
          Resume
          <HiDownload className="opacity-70 transition group-hover:translate-y-1" />
        </a>

        <Link
          href="#contact"
          className="group borderBlack flex items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700 transition hover:scale-110 hover:text-gray-950 focus:scale-110 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/80"
          href="https://www.linkedin.com/in/moonmware/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
          LinkedIn
        </a>

        <a
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700 transition hover:scale-110 hover:text-gray-950 focus:scale-110 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/80"
          href="https://github.com/nickmoon1"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
          GitHub
        </a>

        <a
          className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700 transition hover:scale-110 hover:text-gray-950 focus:scale-110 active:scale-105 borderBlack dark:bg-white/10 dark:text-white/80"
          href="mailto:nickmoonmware@gmail.com"
        >
          <HiOutlineMail />
          Email
        </a>
      </motion.div>
    </section>
  );
}
