import type { ReactElement } from "react";

export type SectionName =
  | "Home"
  | "About"
  | "Portfolio"
  | "Certifications"
  | "Insights"
  | "Skills"
  | "Experience"
  | "Contact";

export type NavLink = {
  name: Extract<
    SectionName,
    "Home" | "About" | "Portfolio" | "Certifications" | "Contact"
  >;
  hash: `#${string}`;
};

export type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  icon: ReactElement;
  date: string;
};

export type PortfolioItem = {
  title: string;
  description: string;
  tools: readonly string[];
  href?: string;
  linkLabel?: string;
  featured?: boolean;
  context?: string;
  insight?: string;
  businessImpact?: string;
  problem?: string;
  methods?: string;
  findings?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  summary: string;
  href?: string;
};

export type InsightItem = {
  title: string;
  summary: string;
  category: string;
  href?: string;
};
