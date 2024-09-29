import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";

import { FaJava, FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiSpring, SiSpringboot } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "PRANEETH GADDAM",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate Full Stack Developer with 0-1yrs of experience in creating beautiful and functional user interfaces. I excel at transforming ideas into engaging web experiences, consistently delivering high-quality solutions that meet both aesthetic and functional requirements.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Vejooz",
    description:
      "Developing a dynamic and user-friendly website for Vejooz, a startup specializing in selling fresh salads and juices",
    image: projectImage1,
    githubLink: "https://github.com/Praneeth4727/Vejooz",
  },
  {
    id: 2,
    name: "Library Management System",
    description:
      "A web application developed using frontend and backend technologies, and Stripe for payment integration, featuring a comprehensive book catalog, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/Praneeth4727/Library_Management_System_using_react_and_springboot",
  },
  {
    id: 3,
    name: "Multiple Disease Prediction",
    description:
      "Built a web app using Streamlit to predict multiple diseases utilizing machine learning algorithms.",
    image: projectImage3,
    githubLink: "https://github.com/Praneeth4727/Multiple_Disease_Prediction",
  },
  
];

export const BIO = [
  "I am Praneeth Kumar Reddy Gaddam a graduate student, earning a Master of Science in Advanced Computer Science from the University of Hertfordshire and a Bachelor of Technology in Computer Science from Lovely Professional University. Following my education, I gained extensive experience in both frontend and backend technologies,",
  "Currently i am developing and deploying comprehensive web application called Vejooz a startup specializing in selling fresh salads and juices and developed responsive web application called library management system. As a Programmer Analyst Trainee at Cognizant, I honed my expertise in full-stack development contributing to an E-Commerce project with CRUD functionalities and cloud deployment",
  "When I am Pursuing my Master's I built a web app called multiple disease prediction using machine learning algorithms, which predicts multiple diseases. My professional skill set includes Java, JavaScript, SQL, HTML5, CSS, Spring Boot, along with tools like Git, Eclipse, and Visual Studio Code.",
];


export const SKILLS = [
  {
    icon: <FaJava className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Java",
    experience: "0-1 years",
  },
  {
    icon: <DiJavascript1 className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "0-1 years",
  },
  {
    icon: <FaReact className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "0-1 years",
  },
  {
    icon: <SiSpringboot className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Spring Boot",
    experience: "0-1 years",
  },
  {
    icon: <GrMysql className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "MySQL",
    experience: "0-1 years",
  },
  {
    icon: <SiSpring className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Spring",
    experience: "0-1 years",
  },
];

export const EXPERIENCES = [
  {
    title: "Programmer Analyst Trainee",
    company: "Cognizant Technology Solutions",
    duration: "March 2021 - August 2021",
    description:
      "Internship at Cognizant involved extensive training in Front-end and Backend technologies. Contributed to an E-Commerce project by developing CRUD functionalities, creating the user interface using HTML, CSS, and JavaScript, and managing the backend with Spring, Spring Boot, and Microservices.",
  },
  
];

export const EDUCATION = [
  {
    degree: "Master of Science in Advanced Computer Science with Research",
    institution: "University of Hertfordshire, United Kingdom",
    duration: "January 2022 - Febrauary 2024",
    description:
      "Specialized in Advanced Computer Science with Research. Completed a thesis on multiple disease prediction, integrating health parameters and medical record datasets for training and validating predictive models, enhancing accuracy by 10%. Graduated with Commendation."
  },
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Lovely Professional University, India",
    duration: "August 2017 - Aug 2021",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in different programs, where I learned different booming technologies. Completed a capstone project on web tensorflow with cloud computing. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/gaddam/", // Replace with your LinkedIn profile link
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Praneeth4727", // Replace with your GitHub profile link
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/", // Replace with your Instagram profile link
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/", // Replace with your LeetCode profile link
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.hackerrank.com/profile/gaddampraneeth11", // Replace with your HackerRank profile link
    icon: <SiHackerrank fontSize={25} className="hover:opacity-80" />,
  },
];
