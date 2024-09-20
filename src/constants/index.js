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
    redux,
    tailwind,
    janeil,
    wickedkitchen,
    questionmark,
    keyin,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    resortbook,
    chatbot,
    threejs,
    restaurantsite,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
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
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Wicked Kitchen",
      icon: wickedkitchen,
      iconBg: "#383E56",
      date: "Nov 2020 - Jan 2023",
      points: [
        "Founder of Wicked Kitchen, where I orchestrated the development of a high-performing e-commerce platform and drove the brand's digital presence through innovative web solutions.",
        "Designed, developed, and maintained WickedKitchenNL.com using modern web technologies, ensuring optimal performance, scalability, and security.",
        "Designed and implemented effective Brand Identity and Marketing strategies to increase brand awareness.",
        "Additionally, created and optimized social media content to drive digital marketing efforts and increase user engagement.",
      ],
    },
    {
      title: "Software Developer | UI UX Designer",
      company_name: "Confidential Start Up",
      icon: questionmark,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - April 2024",
      points: [
        "Collaborated with a start-up team to design and develop a chatbot tailored for entrepreneurs.",
        "Created front-end mockups and interactive UI/UX prototypes in Figma to enhance user engagement.",
        "Assisted in refining the website's user interface to align with modern design principles and business goals.",
        "Contributed to brainstorming sessions, providing insights on user-centric design and chatbot features.",
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "Janeil Chantelle",
      icon: janeil,
      iconBg: "#383E56",
      date: "Jan 2011 - Present",
      points: [
        "Delivered high-impact visual designs for prominent clients, including provincial government, RNC, Eastern Health, and various local businesses, enhancing brand identity and communication.",
        "Collaborated with major agencies and associations, such as the George Street Association, to create compelling marketing materials and promotional content.",
        "Led design projects as Senior Designer at a major provincial magazine, driving creative direction and producing innovative layouts and graphics that captivated readers.",
        "Proficient in Adobe Creative Suite and CorelDRAW, leveraging extensive knowledge to produce visually striking and effective designs across various mediums.",
      ],
      link: "https://janeilchantelle.portfoliobox.net" // Add this for the portfolio link
    },
    
    {
      title: "Full Stack Developer",
      company_name: "Keyin College - 64 week Diploma Program | Honours Graduate",
      icon: keyin,
      iconBg: "#E6DEDD",
      date: "May 2023 - August 2024",
      points: [
        "Designed and built various web apps, including a resort booking system, an e-commerce platform, and a restaurant site, using React, Node.js, and JavaScript. Showcased strong skills in both front-end and back-end development, utilizing frameworks such as Spring Boot and development tools to ensure efficient and reliable deployment.",
        "Built Robust APIs and Integrated Third-Party Services: Created and integrated RESTful APIs for various projects, enhancing functionality and user experience. Utilized services such as AWS for cloud deployment and management, ensuring scalability and reliability of applications.",
        "Engineered and optimized database solutions using MongoDB, PostgreSQL, and MySQL for diverse applications, including a patient record management system. Implemented efficient data storage and retrieval mechanisms, ensuring robust data integrity and security.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Janeil's work is exceptional. She is a true professional and a pleasure to work with.",
      name: "Tracey Lynch",
      designation: "Founder",
      company: "The Dory House",
      
    },
    {
      testimonial:
        "Janeil's modern approach was exactly what we needed to take our business to the next level.",
      name: "Muhammad Bilal",
      designation: "Team Lead",
      company: "Confidential Start Up",
    },
    {
      testimonial:
        "She is a pro! Seriously so, so thankful!",
      name: "Selina Boland",
      designation: "Professional Musician",
      company: "Selina Boland",
    },
  ];
  
  const projects = [
    {
      name: "Resort Booking Site",
      description:
        "This project is a web application for Island Serenity Resort, a luxury destination in the Maldives. The system allows users to check room and activity availability, book accommodations, and manage reservations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "restAPI",
          color: "pink-text-gradient",
        },
      ],
      image: resortbook,
      source_code_link: "https://github.com/janeilchantelle/ResortBookingSite.git",
    },
    {
      name: "Chatbot",
      description:
        "Designed and developed user-friendly UI/UX mockups for a chatbot application for a local start up. Utilized Figma to create intuitive front-end designs that streamlined user interactions.",
      tags: [
       
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
    ],
    image: chatbot,
    source_code_link: "https://www.figma.com/design/aIA3Ut0u7lRD4Z18nsl5Wl/ChatBot?node-id=0-1&t=Z0SZfrTjmQ5WyMkF-1",
  },
  {
    name: "Restaurant Site",
    description:
      "Developed an interactive online ordering system for a restaurant using JavaScript, HTML, and CSS. This was a group capstone project allowing customers to view the menu and place orders.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: restaurantsite,
    source_code_link: "https://github.com/janeilchantelle/RestaurantSite.git",
  },
];

export { services, technologies, experiences, testimonials, projects };