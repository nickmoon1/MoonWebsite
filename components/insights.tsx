"use client";

import { insightsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./section-heading";

export default function Insights() {
  const { ref } = useSectionInView("Insights", 0.3);

  return (
    <section
      id="insights"
      ref={ref}
      className="mb-28 w-full max-w-[56rem] scroll-mt-28"
    >
      <SectionHeading>Insights</SectionHeading>
      <div className="grid gap-4 md:grid-cols-3">
        {insightsData.map((item, index) => (
          <motion.article
            key={item.title}
            className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 dark:bg-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">
              {item.category}
            </p>
            <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 flex-1 leading-7 text-gray-700 dark:text-white/75">
              {item.summary}
            </p>
            {item.href ? (
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 text-sm font-medium text-gray-900 underline-offset-4 hover:underline dark:text-white"
              >
                Read more
              </Link>
            ) : (
              <p className="mt-5 text-sm text-gray-500 dark:text-white/55">
                Article draft coming soon
              </p>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
