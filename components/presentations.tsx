"use client";

import { presentationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./section-heading";

export default function Presentations() {
  const { ref } = useSectionInView("Presentations", 0.35);

  return (
    <section
      id="presentations"
      ref={ref}
      className="mb-28 w-full max-w-[56rem] scroll-mt-28"
    >
      <SectionHeading>Data presentations</SectionHeading>
      <p className="mx-auto mb-8 max-w-[40rem] text-center leading-7 text-gray-700 dark:text-white/75">
        A place for analysis decks, downloadable reports, and future dashboard
        embeds that showcase how data stories are communicated.
      </p>
      <div className="grid gap-4">
        {presentationsData.map((item, index) => (
          <motion.article
            key={item.title}
            className="rounded-2xl border border-black/5 bg-gray-100 p-6 dark:bg-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-[42rem]">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-700 dark:text-white/75">
                  {item.summary}
                </p>
              </div>
              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 dark:bg-white dark:text-gray-900"
                >
                  {item.linkLabel ?? "View presentation"}
                </Link>
              ) : (
                <span className="inline-flex rounded-full border border-dashed border-black/10 px-4 py-2 text-sm text-gray-600 dark:text-white/60">
                  {item.linkLabel ?? "Link coming soon"}
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
