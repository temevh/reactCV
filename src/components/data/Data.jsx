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

// Features Data
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
    workPlace: "Telia Finland Oyj",
    title: "Technical specialist",
    subtitle: "I worked as a technical specialist fixing networking issues",
    date: "2022",
    icon: "FaNetworkWired",
  },
  {
    workPlace: "Twoday Finland",
    title: "Software developer",
    subtitle:
      "I am currently working as a junior full-stack developer at Twoday Oyj",
    date: "2023 - ",
    icon: "FaLaptop",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Pekka Henriksson",
    title: "Business Coach",
    org: "Telia Finland Oyj",
    desc: "In their work, Teemu has demonstrated excellent problem-solving, teamwork, and customer service skills. Teemu handled his tasks responsibly and professionally. Teemu is an active and self-initiative employee, and he was also well-liked by the work community.",
  },
  {
    id: 2,
    name: "Harri Koljonen",
    title: "CEO",
    org: "014-Kuljetus",
    desc: "Teemu has demonstrated excellent abilities to work independently and efficiently in rapidly changing and challenging conditions.",
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
    where: "Alongside work and school projects & assignments",
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
  {
    id: 10,
    name: "Linux",
    confidence: 60,
    where: "While using virtual machines for different purposes",
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

export const projects = [
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
    desc: "A mobile app made Dart and Flutter which gives the user a task to complete every day, aimed to different areas of life for the user (for example sociability, learning or concentration). Very much still a work in progress!",
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
    img: "https://user-images.githubusercontent.com/96690178/259699276-2dee2b7f-402b-41b4-bb95-cb7971f1fcdb.jpg",
    code: "https://github.com/temevh/OlioHT",
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
    title: "ReactMeals",
    desc: "A very basic React app that utilizes firebase to store food items and user orders. The user is able to add foods to their cart and proceed to checkout which opens a contact form. When confirming the order, it is sent to firebase.",
    tags: [
      {
        name: "React",
        color: "red-600",
      },
      {
        name: "Firebase",
        color: "green-600",
      },
      {
        name: "API",
        color: "yellow-600",
      },
    ],
    img: "https://user-images.githubusercontent.com/96690178/260390094-0cb0dd8d-0e6e-4054-a4a0-f1337b01e117.png",
    code: "https://github.com/temevh/learnReact/tree/main/section18/01-starting-project",
  },
];
