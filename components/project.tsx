"use client";

import type { PortfolioItem } from "@/lib/types";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project({
  title,
  description,
  tools,
  href,
  linkLabel,
  featured,
  problem,
  methods,
  findings,
}: PortfolioItem) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

  return (
    <motion.article
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-5 sm:mb-8 last:mb-0"
    >
      <section
        className={`overflow-hidden rounded-2xl border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 ${
          featured ? "max-w-[56rem]" : "max-w-[50rem]"
        }`}
      >
        <div className="flex flex-col gap-5 px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {featured && (
                  <span className="rounded-full bg-gray-900 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white dark:bg-white dark:text-gray-900">
                    Featured case study
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-3 max-w-[42rem] leading-relaxed text-gray-700 dark:text-white/75">
                {description}
              </p>
            </div>
            {(href || linkLabel) && (
              href ? (
                <Link
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:scale-105 dark:bg-white/10 dark:text-white"
                >
                  {linkLabel ?? "View project"}
                </Link>
              ) : (
                <span className="inline-flex rounded-full border border-dashed border-black/10 px-4 py-2 text-sm text-gray-600 dark:text-white/60">
                  {linkLabel}
                </span>
              )
            )}
          </div>

          {featured && (
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/80 p-4 dark:bg-black/10">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-white/50">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-white/75">
                  {problem}
                </p>
              </div>
              <div className="rounded-xl bg-white/80 p-4 dark:bg-black/10">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-white/50">
                  Methods
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-white/75">
                  {methods}
                </p>
              </div>
              <div className="rounded-xl bg-white/80 p-4 dark:bg-black/10">
                <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-white/50">
                  Findings
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-white/75">
                  {findings}
                </p>
              </div>
            </div>
          )}

          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li
                className="rounded-full bg-black/[0.78] px-3 py-1 text-[0.72rem] uppercase tracking-wider text-white dark:text-white/80"
                key={tool}
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.article>
  );
}
