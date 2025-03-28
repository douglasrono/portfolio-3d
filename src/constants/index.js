import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  telebora,
  boxleo,
  medialinks,
  posSsystem,
  logisticsSystem,
  callcenterSystem,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [{
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [{
    title: "IT Consultancy",
    icon: web,
  },
  {
    title: "Software Architecture & System Design",
    icon: mobile,
  },
  {
    title: "Web & Mobile App Development",
    icon: backend,
  },
  {
    title: "AI-Powered Solutions",
    icon: creator,
  },
];


const technologies = [{
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [{
    title: "Co-Founder & Solutions Architect",
    company_name: "Telebora",
    company_website: "https://www.telebora.com",
    icon: telebora,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Co-founded Telebora, an AI-powered call center solution aimed at transforming customer support through automation and intelligent workflows.",
      "Architected a scalable and high-availability system using Django, ensuring seamless call handling and real-time insights.",
      "Integrated AI-driven voice and chat automation, reducing operational costs and enhancing customer engagement.",
      "Designed an intuitive agent dashboard with Vue.js, enabling real-time call monitoring, analytics, and performance tracking.",
      "Led the development team in building a secure, cloud-native platform optimized for reliability, scalability, and efficiency.",
    ],
  },

  {
    title: "Software Developer",
    company_name: "Boxleo",
    company_website: "/",
    icon: boxleo, // Replace with the actual icon reference
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Jan 2025",
    points: [
      "Designed and developed a robust HRM (Human Resource Management) system to streamline employee management, payroll, and attendance tracking.",
      "Implemented role-based access control and secure authentication to ensure data integrity and user management.",
      "Developed an intuitive dashboard with real-time analytics, improving HR efficiency and decision-making.",
      "Integrated automated leave and payroll processing, reducing manual workload and improving accuracy.",
      "Optimized system performance and database queries, enhancing scalability and responsiveness.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Medialinks",
    company_website: "/",
    icon: medialinks, 
    iconBg: "#E6DEDD",
    date: "March 2022 - Oct 2022", 
    points: [
      "Developed a fully responsive website for the college coding society using React, Bootstrap, and JavaScript.",
      "Led coding sessions, actively sharing knowledge and best practices in modern frontend development.",
      "Organized workshops on JavaScript and React.js, helping members gain hands-on experience with frontend frameworks.",
      "Curated and designed challenging coding problems to enhance problem-solving skills in college competitions.",
      "Implemented UI/UX improvements, ensuring a seamless user experience across devices.",
    ],
  },

];

const projects = [{
    name: "Point of Sale System",
    description: "A comprehensive POS system for retail businesses, enabling seamless transactions, inventory management, and sales tracking.",
    tags: [{
        name: "laravel",
        color: "blue-text-gradient"
      },
      {
        name: "vuejs",
        color: "green-text-gradient"
      },
      {
        name: "mysql",
        color: "pink-text-gradient"
      },
    ],
    image: posSsystem, // Replace with the actual image reference
    hosted_link: "#",
  },
  {
    name: "Logistics Management System",
    description: "A robust system designed to streamline order processing, dispatch, tracking, and warehouse management for logistics companies.",
    tags: [{
        name: "laravel",
        color: "blue-text-gradient"
      },
      {
        name: "vuejs",
        color: "green-text-gradient"
      },
      {
        name: "nodejs",
        color: "pink-text-gradient"
      },
    ],
    image: callcenterSystem,
    hosted_link: "#",
  },
  {
    name: "AI-Powered Call Center Management",
    description: "An AI-driven call center solution that automates customer interactions, improves response times, and enhances call analytics.",
    tags: [{
        name: "nodejs",
        color: "blue-text-gradient"
      },
      {
        name: "django",
        color: "green-text-gradient"
      },
      {
        name: "ai",
        color: "pink-text-gradient"
      },
    ],
    image: posSsystem,
    hosted_link: "https://telebora.com",
  },
  {
    name: "HRM System",
    description: "A Human Resource Management system for automating payroll, employee management, leave tracking, and performance evaluation.",
    tags: [{
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "bootstrap",
        color: "green-text-gradient"
      },
      {
        name: "javascript",
        color: "pink-text-gradient"
      },
    ],
    image: callcenterSystem,
    hosted_link: "#",
  },
  {
    name: "CRM System",
    description: "A customer relationship management system designed to optimize client interactions, track sales, and manage leads efficiently.",
    tags: [{
        name: "laravel",
        color: "blue-text-gradient"
      },
      {
        name: "vuejs",
        color: "green-text-gradient"
      },
      {
        name: "mysql",
        color: "pink-text-gradient"
      },
    ],
    image: posSsystem,
    hosted_link: "#",
  },
  {
    name: "Camilish Company Website",
    description: "A professional website for Camilish, showcasing their services, portfolio, and business expertise with a sleek UI/UX.",
    tags: [{
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "bootstrap",
        color: "green-text-gradient"
      },
      {
        name: "javascript",
        color: "pink-text-gradient"
      },
    ],
    image: posSsystem,
    hosted_link: "https://camilish.com",
  },
  {
    name: "WhatsApp Omnichannel",
    description: "A multi-channel messaging system integrating WhatsApp for businesses to automate responses and manage customer interactions.",
    tags: [{
        name: "nodejs",
        color: "blue-text-gradient"
      },
      {
        name: "whatsapp-api",
        color: "green-text-gradient"
      },
      {
        name: "twilio",
        color: "pink-text-gradient"
      },
    ],
    image: posSsystem,
    hosted_link: "#",
  },
  {
    name: "AI Chatbot",
    description: "An intelligent chatbot that enhances customer support through automated responses and real-time assistance.",
    tags: [{
        name: "nodejs",
        color: "blue-text-gradient"
      },
      {
        name: "ai",
        color: "green-text-gradient"
      },
      {
        name: "dialogflow",
        color: "pink-text-gradient"
      },
    ],
    image: posSsystem,
    hosted_link: "#",
  },
];


const personalInfo = {
  name: "Rono",
  fullName: "Douglas Rono",
  email: "douglasronno@gmail.com",
  role: "Solutions Architect",
  about: `I'm a highly skilled Solutions Architect with expertise in Laravel, Vue.js, 
  Node.js, and Django. I design and build scalable, high-performance applications, 
  specializing in logistics, inventory management, and enterprise solutions. 
  My focus is on creating robust architectures that enhance efficiency, reliability, 
  and scalability. With a deep understanding of backend and frontend technologies, 
  I help businesses streamline their operations through innovative and tailored software solutions.`,
  projectsIntro: `The following projects showcase my expertise in architecting and developing 
  scalable applications. Each project highlights my ability to design efficient solutions, 
  solve complex technical challenges, and integrate multiple technologies seamlessly 
  to meet business needs.`,
};


const publicUrls = {
  resume: "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/douglas-rono/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/douglasrono",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};