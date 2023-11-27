import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.S Degree in Computer Science",
    location: "Columbia, SC",
    description:
      "I graduated after 4 years of studying. I immediately applied to Grad school at UNL.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Master's Degree in Computer Science",
    location: "Lincoln, NE",
    description:
      "My thesis while pursuing my masters was on the impact of accents on the Operation of Voice User Interfaces(VUIs).",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "CBTC Integration Engineer",
    location: "New York, NY",
    description:
      "I worked at Thales, NY on improving and updating train software. Ensured trains met safety protocols for smooth revenue service in NYC.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Impact of Accents on the Operation of Voice User Interfaces",
    description:
      "Developed an interactive voice recognition software that translates spoken and recorded audio text.",
    tags: ["NLP", "Machine Learning", "Python", "Librosa", "FastAPI"],
    
  },
  {
    title: "A Comparative Study of Six Scripts Based on Extend Feature List",
    description:
      "Conducted a comparative analysis on six scripts (Persian, Kurdish, Hebrew, Georgian, Swahili and Egyptian Arabic) to identify shared patterns across the languages.",
    tags: ["Python", "SQL", "Oracle Database", "C++", "SciPy"],
  
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Python",
  "C++",
  "SQL",
  "Node.js",
  "Git",
  "Matplotlib",
  "NumPy",
  "Librosa",
  "TensorFlow",
  "Data Warehouse/ETL",
  "PLSQL/T-SQL",
  "Power BI",
] as const;
