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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    
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
