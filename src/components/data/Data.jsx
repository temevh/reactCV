import {
  FaMobile,
  FaLaptopCode,
  FaNetworkWired,
  FaUsers,
  FaRobot,
  FaDatabase,
  FaCodeBranch,
} from "react-icons/fa";
import { MdWebhook } from "react-icons/md";

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

export const featuresData = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Software Wizardry",
    des: "From coding up cool stuff in my free time to building apps as part of my journey, I've got a knack for crafting digital wonders.",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "User Whiz",
    des: "I make sure my projects don't just look good, but they feel like a breeze to use. It's all about giving people that 'wow' experience!",
  },
  {
    id: 3,
    icon: <MdWebhook />,
    title: "API Magic",
    des: "I can weave APIs into my projects like a wizard, bringing in all sorts of data and making things work like a charm with the outside world.",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "App Genie",
    des: "Flutter/Dart is my toolkit for creating mobile magic. I keep honing my skills, conjuring up apps that are sleek and user-friendly.",
  },
  {
    id: 5,
    icon: <FaRobot />,
    title: "AI Buddy",
    des: "I've got AI in my toolkit and I'm not afraid to use it. It's like having a tech-savvy sidekick that makes everything smarter and faster.",
  },
  {
    id: 6,
    icon: <FaNetworkWired />,
    title: "Network Ninja",
    des: "Thanks to my role as a tech specialist at Telia, I've dived deep into networks and their fancy tools. I'm like the ninja of network management.",
  },
  {
    id: 7,
    icon: <FaDatabase />,
    title: "Data Dynamo",
    des: "Databases? They're my playground. I've got a grip on the concepts and I've played around with different systems to make data dance.",
  },
  {
    id: 8,
    icon: <FaCodeBranch />,
    title: "Version Control Guru",
    des: "Git is my trusted sidekick in the world of code. I use it to manage, collaborate, and keep track of changes. No code mysteries escape me!",
  },
];

export const educationItems = [
  {
    title: "High school",
    subtitle: "Jyväskylän Lyseon Lukio",
    lore: "Finished high school on time with main focus on math related courses",
    date: "2017-2020",
    icon: "school",
  },
  {
    title: "Bachelor of computer science, 1st and 2nd year",
    subtitle: "Lappeenranta University of Technology",
    lore: "I studied at LUT for two years, in the end I had a 4.2 GPA with 140 course credits",
    date: "2021-2023",
    icon: "school",
  },
  {
    title: "Bachelor of computer science, 3rd year",
    subtitle: "Tampere university",
    lore: "I am currently studying at Tampere university doing my bachelors degree in computer science",
    date: "2023-2025",
    icon: "school",
  },
  {
    title: "Master of computer science",
    subtitle: "Tampere university",
    lore: "I am planning on doing my masters degree in computer science at Tampere university",
    date: "2025-",
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
    workPlace: "Telia Finland Oyj",
    title: "Technical specialist",
    subtitle: "I worked as a technical specialist fixing networking issues",
    date: "2022",
    icon: "FaNetworkWired",
  },
  {
    workPlace: "Twoday Finland",
    title: "Software developer",
    subtitle: "I am currently working as a software developer at Twoday Oyj",
    date: "2023 - ",
    icon: "FaLaptop",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Pekka Henriksson",
    title: "Business Coach,",
    org: "Telia Finland Oyj",
    desc: "In their work, Teemu has demonstrated excellent problem-solving, teamwork, and customer service skills. Teemu handled his tasks responsibly and professionally. Teemu is an active and self-initiative employee, and he was also well-liked by the work community.",
  },
  {
    id: 2,
    name: "Harri Koljonen",
    title: "CEO,",
    org: "014-Kuljetus",
    desc: "Teemu has demonstrated excellent abilities to work independently and efficiently in rapidly changing and challenging conditions.",
  },
  {
    id: 3,
    name: "Juho",
    title: "A full-time friend",
    desc: "A pretty cool dude 👍🏻",
  },
];

export const mostUsed = [
  {
    id: 2,
    name: "React",
    confidence: 75,
    where: "I use react for pretty much all of my front-end projects",
  },
  {
    id: 8,
    name: "Tailwind",
    confidence: 70,
    where:
      "Multiple different front-end projects, like this website for example",
  },
  {
    id: 7,
    name: "MongoDb",
    confidence: 70,
    where: "My go to database for all projects",
  },
  {
    id: 6,
    name: "Node",
    confidence: 40,
    where: "With work and personal projects",
  },
  {
    id: 4,
    name: "Html",
    confidence: 60,
    where:
      "I try to use pure html in my front-end projects as much as possible",
  },
  {
    id: 5,
    name: "CSS",
    confidence: 60,
    where: "Alongside tailwind mostly",
  },

  {
    id: 3,
    name: "Javascript",
    confidence: 60,
    where: "At work and during personal projects",
  },
  {
    id: 15,
    name: "API",
    confidence: 70,
    where:
      "Using different types of API's for projects at work, school and on my freetime",
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
    where: "Using alongside React on some projects, mainly at work",
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
    id: 0,
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
    id: 5,
    name: "PostgreSQL",
    confidence: 30,
    where: "Alongside work and school projects & assignments",
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
    confidence: 50,
    where: "On a few school courses and a personal project",
  },
  {
    id: 4,
    name: "Flutter",
    confidence: 50,
    where: "On a few school courses and a personal project",
  },

  {
    id: 6,
    name: "Redux",
    confidence: 20,
    where: "In a few bigger React projects to handle state management",
  },
  {
    id: 7,
    name: "Android studio",
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
    confidence: 20,
    where: "With personal projects",
  },
  {
    id: 10,
    name: "Linux",
    confidence: 40,
    where: "While using virtual machines for different purposes",
  },
  {
    id: 12,
    name: "Atmel studio",
    confidence: 40,
    where: "I have created small embedded projects using Atmel studio",
  },
  {
    id: 13,
    name: "Jest",
    confidence: 40,
    where: "Some unit testing with React projects",
  },
  {
    id: 14,
    name: "Matlab",
    confidence: 30,
    where: "Some very basic calculations and operations",
  },
];

export const learning = [
  {
    id: 2,
    name: "Tailwind",
    why: "One thing that I am focusing right now especially is creating responsive sites with tailwind",
  },
  {
    id: 3,
    name: "React",
    why: "I want to learn how to create more complex websites and apps",
  },
  {
    id: 4,
    name: "Node",
    why: "So far I have only used very basic functions, so now I am trying to learn it more in-depth",
  },

  {
    id: 6,
    name: "C++",
    why: "I want to learn more C++ mainly cause its a neat language lol. Currently making a text-based RPG with C++",
  },
  {
    id: 5,
    name: "Next",
    why: "I have started to use Next for my full-stack applications and trying to become as effective with it as possible",
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
    id: 4,
    name: "ML",
    why: "I want to learn the basics of machine learning and how to utilize it",
  },
];

export const certificates = [
  {
    name: "Junction hackathon",
    year: 2024,
    description:
      "I participated in a hackathon with a few of my friends and created a working full-stack app",
  },
  {
    name: "React bootcamp",
    year: 2022,
    description:
      "Introduction to React. We created the book review app as a part of this course",
  },
  {
    name: "Cyber security base",
    year: 2022,
    description:
      "An open cyber security course made by the university of Helsinki",
  },
  {
    name: "Finnish Game Jam attendee",
    year: 2022,
    description:
      "We enrolled and took part in the 2022 Finnish Game Jam with a few of my friends",
  },
  {
    name: "University of Jyväskylä game programming course x2",
    year: 2018,
    description:
      "I have been to the game making bootcamp hosted and held by the University of Jyväskylä for two times now. In 2015 and 2018",
  },
  {
    name: "Multiple different Udemy courses",
    year: 2023,
    description:
      "I have completed and studied multiple different udemy courses, mostly about frontend, for example React, Javascript and flutter/dart",
  },
];

export const achievements = [
  {
    name: "Edufutura hackathon winners",
    year: 2019,
    description:
      "Me and my group won the hackathon where the task was to design a futuristic school",
  },
  {
    name: "Youth counsil board member",
    year: 2017,
    description:
      "I was a part of the board for the Youth council of Jyväskylä (Nuva)",
  },
  {
    name: "Above average Finnish matriculation exam ",
    year: 2020,
    description:
      "I managed to do well in my matriculation exams, which ended up getting me a spot in university",
  },
  {
    name: "100kg bench",
    year: 2022,
    description:
      "I finally managed to bench press 100kg near the end of 2022😎",
  },
  {
    name: "TiTe overalls team vice president",
    year: 2024,
    description:
      "I was chosen as the vice president of the overall team for the computer science students of Tampere university",
  },
  {
    name: "Effective team lead in a customer project",
    year: 2023,
    description:
      "I was chosen as the team lead for a customer project at school. We managed to create a working prototype for the customer",
  },
];

export const projects = [
  {
    title: "Tuuraaja",
    desc: "Tuuraaja is a full-stack app made to make it easier for schools to find and contact substitutes on a short notice. The substitute candidates select the days on which they are available and what subjects they are able to teach. ",
    tags: [
      {
        name: "ReactJs",
        color: "red-600",
      },
      {
        name: "NextJs",
        color: "red-600",
      },
      {
        name: "MongoDB",
        color: "red-600",
      },
      {
        name: "TailwindCSS",
        color: "red-600",
      },
    ],
    img: "https://i.ibb.co/TKBdJH4/tuuraaja.jpg",
    code: "https://github.com/temevh/tuuraaja",
  },
  {
    title: "Arduino alarm system",
    desc: "A fairly complex alarm system made with two Arduino boards which are connected with USART. The movement sensor waits for movements and triggers an alarm protocol when triggered",
    tags: [
      {
        name: "C",
        color: "red-600",
      },
      {
        name: "Arduino",
        color: "green-600",
      },
      {
        name: "Atmel studio",
        color: "yellow-600",
      },
    ],
    img: "https://user-images.githubusercontent.com/96690178/259686989-b7ab8e2d-f22a-4dca-803c-aca4170e6632.jpg",
    code: "https://github.com/temevh/Arduino-AlarmSystem/tree/main",
  },

  {
    title: "Outhere",
    desc: "A mobile app made with Dart and Flutter which gives the user a task to complete every day. Goal is for the user to improve in one category every day (for example sociability, learning or concentration). Very much still a work in progress!",
    tags: [
      {
        name: "Dart",
        color: "red-600",
      },
      {
        name: "Flutter",
        color: "green-600",
      },
      {
        name: "Mobile",
        color: "blue-800",
      },
    ],
    img: "https://user-images.githubusercontent.com/96690178/264060743-53ccea43-4be3-426c-9f78-1f6a67245932.jpg",
    code: "https://github.com/temevh/outhere",
  },
  {
    title: "React review app",
    desc: "An app that lets the user add, review, search and edit books. The app is build around a carousel type of menu where the books are displayed. The app utilizes local storage to save the books and their reviews.",
    tags: [
      {
        name: "ReactJs",
        color: "red-600",
      },
    ],
    img: "https://user-images.githubusercontent.com/37696410/212696470-7da86ac0-c80c-4921-99df-e725be4b3a27.png",
    code: "https://github.com/temevh/react-review-app",
  },
  {
    title: "Hash table utilizing linked list",
    desc: "A fairly straightforward hash table utilizing linked list. The hash table is made to be able to handle collisions and it is made to be able to handle and match a large amount of data.",
    tags: [
      {
        name: "Python",
        color: "red-600",
      },
      {
        name: "DSA",
        color: "green-600",
      },
      {
        name: "Hashing",
        color: "yellow-600",
      },
    ],
    img: "https://www.ekreative.com/wp-content/uploads/2021/03/pankaj-patel-_SgRNwAVNKw-unsplash.jpg",
    code: "https://github.com/temevh/Algorithms-and-data-structures/tree/master/Assingment",
  },

  {
    title: "Wherewolf",
    desc: "A first person game made with Godot. In the game the player has to either save or kill the villagers of a small town, depending on the time of day. The game was made for Finnish Game Jam 2022. My main task was creating the assets/graphics.",
    tags: [
      {
        name: "Godot",
        color: "red-600",
      },
      {
        name: "GAP",
        color: "green-600",
      },
      {
        name: "Game",
        color: "yellow-600",
      },
    ],
    img: "https://ggj.s3.amazonaws.com/styles/game_content__wide/games/screenshots/2022/01/138869/nayttokuva_154.png?itok=JMBNCLa2&timestamp=1643543481",
    code: "https://github.com/temevh/fgj2022",
  },
  {
    title: "Maltas data dashboard",
    desc: "A full-stack dashboard application for healthcare professionals. The dashboard shows data related to the hand washing in a selected unit (hospital, operating room etc.)",
    tags: [
      {
        name: "React",
        color: "red-600",
      },
      {
        name: "Typescript",
        color: "green-600",
      },
      {
        name: "Node",
        color: "yellow-600",
      },
      {
        name: "Next.js",
        color: "yellow-600",
      },
    ],
    img: "https://monday.com/blog/wp-content/uploads/2022/03/Untitled-188.png",
    code: "https://github.com/PROJ-A2023-G08/maltas-data-dashboard",
  },

  {
    title: "Valuemap",
    desc: "Valuemap matches job seekers with companies based on shared values, believes and needs. Made for Junction hackathon 2024 ",
    tags: [
      {
        name: "ReactJs",
        color: "red-600",
      },
      {
        name: "NextJs",
        color: "red-600",
      },
      {
        name: "MongoDB",
        color: "red-600",
      },
      {
        name: "TailwindCSS",
        color: "red-600",
      },
    ],
    img: "https://i.ibb.co/XWrHknw/vm3.png",
    code: "https://github.com/temevh/valuework",
  },
];
