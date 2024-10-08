import { BiCommentDetail, BiLogoGmail } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3,
  FaHtml5,
  FaLinkedinIn,
  FaNetworkWired,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaYarn,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoIosContact, IoLogoJavascript } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdRestartAlt } from "react-icons/md";
import { SiExpress, SiPostman, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

// header
export const navigationData = [
  {
    label: "Start",
    link: "/",
    icon: <MdRestartAlt />,
    isOuterLink: false,
  },
  {
    label: "About",
    link: "#about",
    icon: <BiCommentDetail />,
    isOuterLink: false,
  },
  {
    label: "Projects",
    link: "#projects",
    icon: <FaNetworkWired />,
    isOuterLink: false,
  },
  {
    label: "Blogs",
    link: "/",
    icon: <FaNetworkWired />,
    isOuterLink: true,
  },
  {
    label: "Contact",
    link: "#contact",
    icon: <IoIosContact />,
    isOuterLink: false,
  },
  {
    label: "Resume",
    link: "/Mayank Raj Parmar.pdf",
    icon: <IoDocumentAttachOutline />,
    isOuterLink: true,
  },
];

export const socialIconList = [
  {
    icon: <BsInstagram />,
    link: "https://www.instagram.com/theprogrammerbro",
    color: "bg-fuchsia-700 text-white",
  },
  {
    icon: <FiGithub />,
    link: "https://github.com/mayankrajparmar",
    color: "bg-blue-600 text-white",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/mayankrajparmar/",
    color: "bg-blue-400 text-white",
  },
  {
    icon: <BiLogoGmail />,
    link: "mailto:mayankrajparmar@gmail.com",
    color: "bg-orange-600 text-white",
  },
];

// hero section icon data
export const heroSectionIconsArray = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
  },
  {
    icon: <FaCss3 />,
    title: "HTML",
  },
  {
    icon: <IoLogoJavascript />,
    title: "Javascript",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
  },
  {
    icon: <SiExpress />,
    title: "Express",
  },
  {
    icon: <DiMongodb />,
    title: "MongoDB",
  },
  {
    icon: <FaReact />,
    title: "React",
  },
  {
    icon: <TbBrandNextjs />,
    title: "Next.js",
  },
  {
    icon: <SiPostman />,
    title: "Postman",
  },
  {
    icon: <FaNpm />,
    title: "npm",
  },
  {
    icon: <FaYarn />,
    title: "yarn",
  },
];

// hero section slider configuration
export const heroSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  speed: 10000,
  cssEase: "linear",
  autoplaySpeed: 0,
  pauseOnHover: false,
  arrows: false,
  ltr: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3.5,
      },
    },
  ],
};

// skill section icon data
export const skillSectionIconsArray = [
  {
    title: "Javascript",
  },
  {
    title: "Typescript",
  },
  {
    title: "Python",
  },
  {
    title: "Node.js",
  },
];

// skill section slider configuration
export const skillSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 30000,
  cssEase: "linear",
  autoplaySpeed: 0,
  pauseOnHover: false,
  arrows: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

// experience data
export const experienceData = [
  {
    role: "Junior Software Developer",
    company: "SearchingYard Group",
    companySite: "https://www.searchingyard.com/",
    description:
      "Made significant contributions to developing and improving web applications, including work on diverse projects such as an task management app, CMS, and e-commerce, by demonstrating strong proficiency in React, Next.js, JavaScript, and TypeScript. Effectively applying these skills during the internship, I played a key role in enhancing web applications.",
    startDate: "May 2023",
    endDate: "May 2024",
    skills: [
      "Javascript",
      "Typescript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "Mongoose",
      "AWS EC2",
      "AWS S3",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "OtakuKart",
    companySite: "https://otakukart.com/",
    description:
      "Developed and optimized an e-commerce platform using ReactJS, and TypeScript, improving user experience and platform performance. Integrated payment gateways and user authentication, ensuring secure transactions and seamless user access.",
    startDate: "Oct 2022",
    endDate: "April 2023",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "TailwindCss",
      "Firebase",
      "Material UI",
      "Framer Motion",
    ],
  },
  {
    role: "AWS Cloud Intern",
    company: "AICTE NEAT",
    companySite:
      "https://www.credly.com/badges/3e5b3aac-5d8b-4a55-9a50-439024934ea8/linked_in_profile",
    description:
      "Designed and implemented scalable cloud architectures on AWS, enhancing my expertise in cloud services and distributed systems. Completed AWS Academy certifications in Cloud Architecting and Cloud Foundations, demonstrating proficiency in AWS cloud solutions.",
    startDate: "Jul 2022",
    endDate: "Sept 2022",
    skills: [
      "AWS",
      "AWS IAM",
      "AWS S3",
      "AWS EC2",
      "AWS VPC",
      "AWS RDS",
      "AWS CloudFront",
    ],
  },
];

// project list
export const projectLists = [
  {
    name: "GrowingMind",
    description:
      "Developed a website for Odisha's first autism therapy center, focusing on accessibility and user engagement. This project was completed while working as an employee of SearchingYard Group.",
    image: "/projects/growingMind.png",
    tech: ["Next.js", "TailwindCSS", "Firebase", "Material UI", "Typescript"],
    link: "https://www.thegrowingmind.in/",
  },
  {
    name: "Maa Siddheshwari Trust",
    description:
      "Created a website for Maa Siddheshwari Trust, designed for easy navigation and donor engagement. This project was completed while working as an employee of SearchingYard Group.",
    image: "/projects/maaSiddheshwari.png",
    tech: ["Next.js", "TailwindCSS", "Firebase", "Material UI", "Typescript"],
    link: "https://www.maasiddheshwari.org/",
  },
  {
    name: "Yard E-Commerce",
    description:
      "Built an e-commerce site for medical equipment with a secure, user-friendly interface. This project was completed while working as an employee of SearchingYard Group.",
    image: "/projects/yardEcommerce.png",
    tech: [
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Material UI",
      "Typescript",
      "Vercel",
    ],
    link: "https://yard-ecommerce-web.vercel.app/",
  },
  {
    name: "The Aditya Group",
    description:
      "Developed a responsive corporate website for Aditya Group, reflecting their brand and services. This project was completed while working as an employee of SearchingYard Group.",
    image: "/projects/adityaGroup.png",
    tech: ["Next.js", "TailwindCSS", "Material UI", "Typescript", "Firebase"],
    link: "https://www.theadityagroup.com/",
  },
  {
    name: "Court Web",
    description:
      "Designed a user-friendly website for court-related information and services. This project was completed while working as an employee of SearchingYard Group.",
    image: "/projects/courtWeb.png",
    tech: [
      "Next.js",
      "TailwindCSS",
      "Vercel",
      "Material UI",
      "Typescript",
      "React Icons",
    ],
    link: "https://court-web-iota.vercel.app/",
  },
  {
    name: "Portfolio",
    description:
      "Explore my portfolio crafted with Next.js, Tailwind CSS, and Framer Motion. Discover sleek designs, responsive layouts, and captivating animations.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel", "Firebase"],
    link: "https://mayankrajparmar.vercel.app/",
  },
];
