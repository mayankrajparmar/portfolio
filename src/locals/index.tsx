import { BiCommentDetail, BiLogoGmail } from "react-icons/bi";
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
