// IMPORTs HERE
import {
  myPicture,
  FrontendIcon,
  BackendIcon,
  halfAndroid,
  halfiOS,
  GithubIcon,
  MailIcon,
  LinkedInIcon,
  InstagramIcon,
} from "assets/Images";
import { calculateYearsOfExperience } from "utils/functions";

// GLOBAL VARIABLEs
const space = `\u00A0`;

// EXPORTs HERE
export const fullName = "Paras Agrawal";
export const companyName = "nference";
export const emailId = "parasagrawal71@gmail.com";
export const designation = "Senior Engineer";
export const careerStartDate = "07-15-2019"; // 15 July 2019
export const YOE = calculateYearsOfExperience(careerStartDate);
export const designations = ["Back-end", "Front-end", "Mobile App"];
export const RESUME_URL = "https://drive.google.com/uc?id=1yBdmFvsmzKpEB2c203g0rK8oOWWqU8DQ";
export const SELF_PICTURE_URL = myPicture;
export const shortDescription = `Hello! 👋🏼${space.repeat(2)}I'm a guy slightly obsessed with code
  quality. I have ${YOE} years of experience in full-stack development. I am currently working at ${companyName}, a healthcare-based company.`;
export const aboutDescription = `Hello! I'm ${fullName}, a ${designation}, and a guy slightly obsessed with code
  quality. I have ${YOE} years of experience in full-stack development. I am currently working at ${companyName}, a healthcare-based company.
  I have very good knowledge of JavaScript, ReactJS, NodeJS, MongoDB, API Development, and Git. In addition, I have worked with and implemented 
  technologies like Kafka, Electron.js, AWS, and more. I enjoy developing applications and am always keen to learn new skills.`;

export const socialProfiles = [
  {
    name: "Github",
    href: `https://github.com/parasagrawal71`,
    Icon: GithubIcon,
    newTab: true,
  },
  {
    name: "LinkedIn",
    href: `https://www.linkedin.com/in/parasagrawal71`,
    Icon: LinkedInIcon,
    newTab: true,
  },
  {
    name: "Instagram",
    href: `https://www.instagram.com/paras__fbg`,
    Icon: InstagramIcon,
    newTab: true,
  },
  {
    name: "Mail",
    href: `mailto:${emailId}`,
    Icon: MailIcon,
  },
];

export const roles = [
  {
    name: "backend",
    displayName: "Back-end",
    description: `I'm more back end focused and love to work with APIs in Node js and Python.`,
    Icon: BackendIcon,
  },
  {
    name: "frontend",
    displayName: "Front-end",
    description: `As a javascript developer, I have experience in React JS and Vue JS libraries.`,
    Icon: FrontendIcon,
  },
  {
    name: "mobileapp",
    displayName: "Mobile App",
    description: `I love building mobile app using React Native library for android as well as iOS
      platform`,
    icon1: halfAndroid,
    icon2: halfiOS,
  },
];
