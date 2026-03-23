import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaChartLine } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import type {
  CertificationItem,
  ExperienceItem,
  InsightItem,
  NavLink,
  PortfolioItem,
  PresentationItem,
} from "./types";

export const links: readonly NavLink[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Presentations",
    hash: "#presentations",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData: readonly ExperienceItem[] = [
  {
    title: "B.S. in Computer Science",
    location: "Benedict College, Columbia, SC",
    description:
      "Completed a computer science degree with a finance minor, building a foundation in programming, problem-solving, and applied technical communication.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "M.S. in Computer Science",
    location: "University of Nebraska-Lincoln, Lincoln, NE",
    description:
      "Focused on machine learning, NLP, and speech research, including graduate work on automatic speech recognition, transcription accuracy, and accent-related bias in voice systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "M.S. in Information Systems & Business Analytics",
    location: "Park University",
    description:
      "Currently expanding skills in analytics, business decision support, and data-driven storytelling to complement an engineering and ML background.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Current",
  },
  {
    title: "Data Analyst / Research Assistant",
    location: "University of Nebraska-Lincoln (BOSR & OASIS)",
    description:
      "Analyzed educational and survey datasets using Python and SQL, built summaries and visual reports for non-technical stakeholders, and improved data processing and validation workflows.",
    icon: React.createElement(FaChartLine),
    date: "2020 - 2022",
  },
  {
    title: "IT Security & Data Operations Intern",
    location: "Ameritas Life Insurance",
    description:
      "Supported secure data ingestion, access controls, governance processes, and reporting-oriented operational data workflows across enterprise systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Field Engineer (Data & Systems)",
    location: "Thales Group, New York, NY",
    description:
      "Maintained SQL- and Python-supported data pipelines for transportation systems, diagnosed system issues, and documented operational workflows for high-availability environments.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Adjunct Professor, Computer Science",
    location: "Benedict College",
    description:
      "Taught Python fundamentals, mentored students on applied analytics concepts, and supported LearnBot work centered on chatbot analysis and user experience insights.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Current",
  },
  {
    title: "Practical Data Science & Gen AI Trainee",
    location: "Dallas Data Science Academy, Dallas",
    description:
      "Built EDA pipelines, regression and classification models, Prophet forecasts, Tableau dashboards, and NLP sentiment workflows on education and healthcare datasets.",
    icon: React.createElement(FaChartLine),
    date: "2025 - Current",
  },
] as const;

export const portfolioData: readonly PortfolioItem[] = [
  {
    title: "Customer Prediction Models for Powell",
    description:
      "Built machine learning models to predict average monthly spending and eBook subscription likelihood from a customer dataset with 16,519 records and 25 variables.",
    tools: [
      "Python",
      "PyCaret",
      "LightGBM",
      "Gradient Boosting",
      "Feature Engineering",
    ],
    href: "/Powell-eBook-Prediction-Models%20(1).pdf",
    linkLabel: "View analysis PDF",
  },
  {
    title: "Educational Chatbot Learning Assistant",
    description:
      "Conversational AI focused on educational support. I leveraged my experience as an adjunct instructor and the IEEE educational chatbot reference to design intelligent learning assistants that bridge the gap between pedadogy and technology.",
    tools: ["Chatbots", "NLP", "Educational AI", "Learning Assistant"],
    href: "https://ieeexplore.ieee.org/abstract/document/11328214/",
    linkLabel: "View IEEE abstract",
  },
  {
    title: "Voice User Interface Accent Research",
    description:
      "Graduate NLP and speech research on automatic speech recognition, focused on translating spoken audio to text while improving inclusivity for speakers with different accents.",
    tools: ["Python", "Librosa", "PyTorch", "Speech-to-Text", "CTC", "ASR"],
    href: "/NLP_SPEECH_TEXT.pdf",
    linkLabel: "Read research paper",
    featured: true,
    problem:
      "ASR systems often struggle with speaker variability, producing higher transcription error rates for different accents and speaking styles.",
    methods:
      "Processed WAV audio from Wikimedia Commons, generated mel spectrograms, trained a CNN-based speech workflow with Python libraries such as Librosa, NumPy, and PyTorch, and evaluated performance using WER.",
    findings:
      "The trained model improved transcription accuracy from roughly 27% to about 77%, while the paper outlines future work on accent robustness, MFCC features, and broader speech datasets.",
  },
  {
    title: "Education & Healthcare Analytics",
    description:
      "Built Python and SQL analysis workflows on education and healthcare data, including exploratory analysis of a healthcare readmission dataset with 12,980 observations and 28 variables.",
    tools: ["Python", "SQL", "EDA", "Data Cleaning", "Stakeholder Reporting"],
    href: "/Healthcare.pdf",
    linkLabel: "Open healthcare EDA PDF",
  },
  {
    title: "Predictive Modeling & Forecasting",
    description:
      "Developed regression, classification, and time-series models for school performance, customer spend, patient readmission, subscription adoption, and 30-day incident forecasting.",
    tools: [
      "scikit-learn",
      "Prophet",
      "Regression",
      "Classification",
      "Forecasting",
    ],
  },
  {
    title: "Interactive Tableau Dashboards",
    description:
      "Designed dashboards to visualize trends, predictions, comparisons, and KPI-style summaries so non-technical audiences could interpret model outputs quickly.",
    tools: ["Tableau", "Dashboards", "KPIs", "Data Visualization"],
    href: "https://public.tableau.com/app/profile/nickmoon.mware/vizzes",
    linkLabel: "View Tableau Public profile",
  },
] as const;

export const certificationsData: readonly CertificationItem[] = [
  {
    title: "Generative AI for Data Scientists",
    issuer: "IBM",
    summary:
      "Covers practical applications of generative AI in data science workflows, including analysis support, experimentation, and model-assisted productivity.",
  },
  {
    title: "Generative AI for End-to-End Data Science Modeling",
    issuer: "Dallas Data Science Academy",
    summary:
      "Focuses on integrating generative AI into the full data science lifecycle, from problem framing and analysis to modeling and communication.",
  },
  {
    title: "Business Analysis Fundamentals",
    issuer: "Coursera",
    summary:
      "Supports business-facing communication, requirements thinking, and the ability to connect analytical outputs to decision-making contexts.",
  },
  {
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    summary:
      "Reinforces practical SQL querying skills used across exploration, reporting, and data validation workflows.",
  },
] as const;

export const presentationsData: readonly PresentationItem[] = [
  {
    title: "Powell Prediction Models",
    summary:
      "Presentation-ready PDF summarizing customer segmentation, subscription prediction, monthly spending forecasts, and model-selection decisions.",
    href: "/Powell-eBook-Prediction-Models%20(1).pdf",
    linkLabel: "Open ML analysis PDF",
  },
  {
    title: "Healthcare Readmission EDA",
    summary:
      "Exploratory analysis of a healthcare readmission dataset covering 12,980 records, variable distributions, key clinical and cost features, and next-step modeling considerations.",
    href: "/Healthcare.pdf",
    linkLabel: "Open healthcare EDA PDF",
  },
  {
    title: "Educational Chatbot Learning Assistant Reference",
    summary:
      "External IEEE reference connected to chatbot-assisted learning and educational support, useful for framing future conversational AI portfolio work.",
    href: "https://ieeexplore.ieee.org/abstract/document/11328214/",
    linkLabel: "Open IEEE abstract",
  },
  {
    title: "Tableau Public Profile",
    summary:
      "Central hub for interactive dashboards and public visual analytics work across portfolio projects and data storytelling examples.",
    href: "https://public.tableau.com/app/profile/nickmoon.mware/vizzes",
    linkLabel: "Open Tableau profile",
  },
  {
    title:
      "Machine Learning Based Network Implementation to Translate Spoken Audio to Words in TextFile",
    summary:
      "Research paper and artifact covering the ASR workflow, model design, word error rate framing, and findings from the speech-to-text study.",
    href: "/NLP_SPEECH_TEXT.pdf",
    linkLabel: "Open research PDF",
  },
] as const;

export const insightsData: readonly InsightItem[] = [
  {
    title: "Educational Chatbots as Learning Assistants",
    summary:
      "A future-facing note on how conversational AI can support student learning, course assistance, and engagement when paired with strong UX and domain grounding.",
    category: "Generative AI",
    href: "https://ieeexplore.ieee.org/abstract/document/11328214/",
  },
  {
    title: "What I Learned From Building an ASR Research Workflow",
    summary:
      "A reflection on dataset limits, WER evaluation, spectrogram-based training, and how speech research connects to fairness and usability in voice interfaces.",
    category: "NLP Research",
    href: "/NLP_SPEECH_TEXT.pdf",
  },
  {
    title: "What Prediction Models Reveal About Customer Behavior",
    summary:
      "A practical look at how feature engineering, model selection, and business framing turn customer data into usable decisions for targeting and planning.",
    category: "Machine Learning",
    href: "/Powell-eBook-Prediction-Models%20(1).pdf",
  },
  {
    title: "What Exploratory Analysis Reveals in Healthcare Readmission Data",
    summary:
      "A quick-study view of how profiling distributions, imbalance, costs, visits, and chronic-condition signals helps prepare healthcare data for downstream modeling.",
    category: "Analytics",
    href: "/Healthcare.pdf",
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "PyCaret",
  "scikit-learn",
  "Prophet",
  "Matplotlib",
  "Tableau",
  "Natural Language Processing",
  "Sentiment Analysis",
  "Speech Processing",
  "Automatic Speech Recognition",
  "Generative AI",
  "Data Cleaning",
  "Feature Engineering",
  "Forecasting",
  "Linux",
] as const;
