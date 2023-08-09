import {
  FaMobile,
  FaLaptopCode,
  FaNetworkWired,
  FaUsers,
} from "react-icons/fa";
import { MdWebhook } from "react-icons/md";
import Certificates from "../Accolades/Certificates";

export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "Features",
    link: "features",
  },
  {
    _id: 1003,
    title: "Skills",
    link: "skills",
  },
  {
    _id: 1004,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1005,
    title: "Career & education",
    link: "career",
  },
  {
    _id: 1006,
    title: "Accolades",
    link: "accolades",
  },
  {
    _id: 1007,
    title: "Contact",
    link: "contact",
  },
];

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Software Engineering",
    des: "I have embarked on diverse software development ventures during my free time as well as part of my professional journey.",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "User-Centered Design",
    des: "In all my projects, I prioritize seamless user experiences and cutting-edge UI/UX designs.",
  },
  {
    id: 3,
    icon: <MdWebhook />,
    title: "API usage",
    des: "I have used a number of different APIs and feel comforatble using them in my projects.",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Mobile App Development",
    des: "I possess hands-on experience with Flutter/Dart and am continuously expanding my proficiency in this domain.",
  },
  {
    id: 5,
    icon: <FaNetworkWired />,
    title: "Network Management",
    des: "My role as a technical specialist at Telia enabled me to work extensively with networks and advanced networking tools.",
  },
];

export const educationItems = [
  {
    title: "High school",
    subtitle: "Jyväskylän Lyseon Lukio",
    date: "2017-2020",
    icon: "school",
  },
  {
    title: "Bachelor of computer science, 1st and 2nd year",
    subtitle: "Lappeenranta University of Technology",
    date: "2021-2023",
    icon: "school",
  },
  {
    title: "Bachelor of computer science, 3rd year",
    subtitle: "Tampere university",
    date: "2023-2024",
    icon: "school",
  },
  {
    title: "Master of computer science",
    subtitle: "Tampere university",
    date: "2024-",
    icon: "school",
  },
];

export const workItems = [
  {
    workPlace: "Teemun Tötterö",
    title: "Entrepreneur, ice-cream shop",
    subtitle: "I ran my own ice-cream shop for 7 years",
    date: "2011 - 2018",
    icon: "FaIceCream",
  },
  {
    workPlace: "EDGE streetwear",
    title: "Entrepreneur, clothing brand",
    subtitle: "I ran my own clothing brand for a year with a few friends",
    date: "2018",
    icon: "FaSocks",
  },
  {
    workPlace: "014-kuljetus Oy",
    title: "Van driver",
    subtitle: "I drove a van and did logistics for about a year",
    date: "2020 - 2021",
    icon: "FaTruck",
  },
  {
    workPlace: "Technical specialist",
    title: "Telia Finland Oyj",
    subtitle: "I worked as a technical specialist fixing networking issues",
    date: "2022",
    icon: "FaNetworkWired",
  },
  {
    workPlace: "Software developer",
    title: "Twoday Oyj",
    subtitle: "I am currently working as a full-stack developer at Twoday Oyj",
    date: "2023 - ",
    icon: "FaLaptop",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Laura Lipsula",
    title: "CEO",
    org: "XYZ Company",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    name: "Kimmo Pekkanen",
    title: "CEO",
    org: "XYZ Company",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 3,
    name: "Janne Talonen",
    title: "CEO",
    org: "XYZ Company",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export const mostUsed = [
  {
    id: 2,
    name: "React",
    confidence: 75,
    where: "In different projects, mainly at work",
  },
  {
    id: 3,
    name: "Javascript",
    confidence: 60,
    where: "At work and during personal projects",
  },
  {
    id: 4,
    name: "Html",
    confidence: 60,
    where: "At work and during personal projects, some school projects",
  },
  {
    id: 5,
    name: "CSS",
    confidence: 60,
    where: "At work and during personal projects, some school projects",
  },
  {
    id: 6,
    name: "Node",
    confidence: 35,
    where: "With work projects",
  },
  {
    id: 7,
    name: "MongoDb",
    confidence: 40,
    where: "Alongside work projects",
  },
  {
    id: 8,
    name: "PostgreSQL",
    confidence: 70,
    where: "Alongside work and school projects/assignments",
  },
  {
    id: 9,
    name: "Git",
    confidence: 70,
    where: "Go-to version control system for all projects",
  },
  {
    id: 10,
    name: "Typescript",
    confidence: 35,
    where: "Using alongside React with some work projects mainly",
  },
  {
    id: 11,
    name: "vscode",
    confidence: 100,
    where: "My go-to code editor for all projects",
  },
];

export const someExperience = [
  {
    id: 1,
    name: "Python",
    confidence: 40,
    where: "On a few school courses and some personal projects",
  },
  {
    id: 1,
    name: "Java",
    confidence: 40,
    where: "During an OOP course at school",
  },
  {
    id: 2,
    name: "C",
    confidence: 40,
    where: "On a few school courses",
  },
  {
    id: 3,
    name: "Dart",
    confidence: 60,
    where: "During an UI/UX course at school",
  },
  {
    id: 4,
    name: "Flutter",
    confidence: 60,
    where: "During an UI/UX course at school",
  },
  {
    id: 5,
    name: "Tailwind",
    confidence: 40,
    where: "Creating this website",
  },
  {
    id: 6,
    name: "Redux",
    confidence: 30,
    where: "In a few React projects to handle state management",
  },
  {
    id: 7,
    name: "Androidstudio",
    confidence: 50,
    where: "During an OOP course at school",
  },
  {
    id: 8,
    name: "Docker",
    confidence: 30,
    where: "At work a few times",
  },
  {
    id: 9,
    name: "Firebase",
    confidence: 60,
    where: "With personal projects",
  },
];

export const learning = [
  {
    id: 1,
    name: "Flutter",
    skill: 40,
    why: "I want to learn how to create mobile apps",
  },
  {
    id: 2,
    name: "Tailwind",
    skill: 40,
    why: "I want to learn how to create stylish websites",
  },
  {
    id: 3,
    name: "Redux",
    skill: 60,
    why: "I want to learn how to manage state more effectively",
  },
  {
    id: 4,
    name: "React",
    skill: 60,
    why: "I want to learn how to create more complex websites and apps",
  },
  {
    id: 5,
    name: "Node",
    skill: 60,
    why: "I want to learn how to create more complex websites and apps",
  },
];

export const wantingToLean = [
  {
    id: 1,
    name: "Rust",
    why: "I have heard a lot of good things about Rust and want to learn it",
  },
  {
    id: 2,
    name: "Python",
    why: "I want to deepen my previous knowledge of Python",
  },
  {
    id: 3,
    name: "Deno",
    why: "I want to learn how to create and deploy apps with Deno",
  },
  {
    id: 3,
    name: "Next",
    why: "I want to learn how to create and deploy apps with Next",
  },
];

export const certificates = [
  {
    name: "Web Development Fundamentals",
    year: 2020,
    description:
      "Introduction to HTML, CSS, and JavaScript for building static websites.",
  },
  {
    name: "Graphic Design Basics",
    year: 2021,
    description:
      "Fundamental principles of graphic design, including color theory and layout design.",
  },
  {
    name: "Digital Marketing Essentials",
    year: 2022,
    description:
      "Introduction to online marketing strategies, including SEO, social media, and email campaigns.",
  },
  {
    name: "Data Analysis with Python",
    year: 2022,
    description:
      "Using Python and libraries like Pandas and Matplotlib to analyze and visualize data.",
  },
  {
    name: "UX/UI Design Principles",
    year: 2023,
    description:
      "Exploring user experience and user interface design principles for creating intuitive digital products.",
  },
];

export const achievements = [
  {
    name: "Top Performer Award",
    year: 2020,
    description:
      "Recognized as the top performer in the company for exceeding targets.",
  },
  {
    name: "Community Service Medal",
    year: 2021,
    description:
      "Received for volunteering over 100 hours in local community projects.",
  },
  {
    name: "Innovation Challenge Winner",
    year: 2022,
    description:
      "Won the company-wide innovation challenge by proposing a groundbreaking idea.",
  },
  {
    name: "Leadership Excellence Award",
    year: 2023,
    description:
      "Acknowledged for exceptional leadership skills and guiding the team to success.",
  },
  {
    name: "Public Speaking Champion",
    year: 2023,
    description:
      "Secured first place in the regional public speaking competition.",
  },
];
