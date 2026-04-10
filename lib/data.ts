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
      "Currently strengthening business analytics, decision support, and data storytelling skills to target analyst, BI, and applied machine learning roles that connect technical models to business outcomes.",
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
    title: "Customer Prediction Models for an eBook Store",
    description:
      "Built regression and classification models on 16,519 customer records to predict monthly spend and subscription likelihood for an eBook store.",
    tools: [
      "Python",
      "PyCaret",
      "LightGBM",
      "Gradient Boosting",
      "Feature Engineering",
    ],
    href: "/Powell-eBook-Prediction-Models%20(1).pdf",
    linkLabel: "View analysis PDF",
    featured: true,
    context:
      "Framed as a customer analytics case study for an eBook store, focused on helping non-technical stakeholders understand who is most likely to subscribe and spend more.",
    insight:
      "The strongest value comes from turning model output into targeting decisions, not just reporting accuracy scores in isolation.",
    businessImpact:
      "Built customer spend and subscription models using PyCaret and gradient boosting so marketing and sales teams could prioritize higher-propensity customer segments with more confidence.",
    problem:
      "The business needed a clearer way to identify customers likely to subscribe and estimate monthly value before spending budget on broad outreach.",
    methods:
      "Prepared customer features, compared multiple regression and classification approaches, and selected models that balanced predictive performance with stakeholder interpretability.",
    findings:
      "The final workflow highlighted which customers were more likely to subscribe and spend more, giving the team a more targeted lens for campaign planning and customer prioritization.",
  },
  {
    title: "Educational Chatbot Learning Assistant",
    description:
      "Conversational AI focused on educational support. I leveraged my experience as an adjunct instructor and the IEEE educational chatbot reference to design intelligent learning assistants that bridge the gap between pedadogy and technology.",
    tools: ["Chatbots", "NLP", "Educational AI", "Learning Assistant"],
    href: "https://ieeexplore.ieee.org/abstract/document/11328214/",
    linkLabel: "View IEEE abstract",
    context:
      "Conceptual and research-backed educational AI project shaped by teaching experience, chatbot design thinking, and current work in applied analytics.",
    insight:
      "The most effective learning assistants do more than answer questions. They support comprehension, reduce friction for students, and align responses with instructional goals.",
    businessImpact:
      "Designed an educational chatbot concept using instructional context and NLP framing so student support could become more scalable, consistent, and accessible outside normal class time.",
    problem:
      "Students often need timely academic support outside scheduled instruction, while instructors need ways to extend guidance without sacrificing consistency or learning quality.",
    methods:
      "Combined adjunct teaching experience with educational chatbot research to define a learning assistant use case focused on student support, question handling, and better pedagogy-technology alignment.",
    findings:
      "The project showed how chatbot workflows can complement instruction by improving response availability, reinforcing course support, and creating a stronger foundation for future conversational AI in education.",
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
    context:
      "Exploratory healthcare analytics project on a readmission dataset that hiring managers will immediately recognize.",
    insight:
      "This project is strongest when it shows the full workflow: profiling, missing data treatment, feature behavior, and a clear next modeling step.",
    businessImpact:
      "Analyzed readmission patterns and data quality issues so the dataset could support more reliable risk modeling and operational decision-making in a healthcare context.",
  },
  {
    title: "Interactive Tableau Dashboards",
    description:
      "Designed dashboards to visualize trends, predictions, comparisons, and KPI-style summaries so non-technical audiences could interpret model outputs quickly.",
    tools: ["Tableau", "Dashboards", "KPIs", "Data Visualization"],
    href: "https://public.tableau.com/app/profile/nickmoon.mware/vizzes",
    linkLabel: "View Tableau Public profile",
    context:
      "Public dashboard work intended for recruiters, hiring managers, and non-technical stakeholders reviewing projects.",
    insight:
      "Each dashboard should communicate the business question, dataset context, and primary takeaway within the first few seconds.",
    businessImpact:
      "Built story-first dashboards in Tableau so viewers could move from chart reading to decision insight quickly, without needing a live walkthrough.",
  },
] as const;

export const certificationsData: readonly CertificationItem[] = [
  {
    title: "Generative AI for Data Scientists",
    issuer: "IBM",
    summary:
      "Covers practical applications of generative AI in data science workflows, including analysis support, experimentation, and model-assisted productivity.",
    href: "https://www.credly.com/badges/fbfaeea6-c993-4c1d-8c9d-d73f87c0c28c",
  },
  {
    title: "Generative AI for End-to-End Data Science Modeling",
    issuer: "Dallas Data Science Academy",
    summary:
      "Focuses on integrating generative AI into the full data science lifecycle, from problem framing and analysis to modeling and communication.",
    href: "https://www.credly.com/badges/11c39330-fb30-4de8-b73c-2d25ee7012bd",
  },
  {
    title: "Business Intelligence",
    issuer: "Coursera",
    summary:
      "Supports dashboard design, business-facing communication, and the ability to connect analytical outputs to decision-making contexts.",
    href: "/Business_intelligence_coursera.pdf",
  },
  {
    title: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    summary:
      "Reinforces practical SQL querying skills used across exploration, reporting, and data validation workflows.",
    href: "https://www.linkedin.com/learning/certificates/1ab426eff60c5fdc6d80c3b95d0e421872f88b0e25218928eb182a6a5308110b?trk=share_certificate",
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
