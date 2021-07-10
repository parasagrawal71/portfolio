import {
  github,
  linkedin,
  mail,
  instagram,
  myPicture,
  frontend,
  backend,
  halfAndroid,
  halfiOS,
} from "assets/Images";
import { GITHUB_URL, LINKEDIN_URL, MAIL_ID, INSTAGRAM_URL } from "utils/constants";
import myCV from "assets/pdfs/Paras-Agrawal_Full-Stack_CV.pdf";
import { fullName } from "config";

export const socialProfiles = [
  {
    name: "Mail",
    href: `mailto:${MAIL_ID}`,
    icon: mail,
  },
  {
    name: "Github",
    href: GITHUB_URL,
    icon: github,
    newTab: true,
  },
  {
    name: "LinkedIn",
    href: LINKEDIN_URL,
    icon: linkedin,
    newTab: true,
  },
  {
    name: "Instagram",
    href: INSTAGRAM_URL,
    icon: instagram,
    newTab: true,
  },
];

export const RESUME_URL = myCV;

export const SELF_PICTURE_URL = myPicture;

export const aboutDescription = `Hello! I'm ${fullName}, a full-stack developer, and a guy slightly obsessed with code
quality. I am currently working for a start-up, nference. I not only love to code also
like to solve problems.`;

export const roles = [
  {
    name: "frontend",
    displayName: "Front-end",
    description: `As a javascript developer, I have experience in React JS and Vue JS libraries.`,
    icon: frontend,
  },
  {
    name: "backend",
    displayName: "Back-end",
    description: `I'm more back end focused and love to work with APIs in Node js and Python.`,
    icon: backend,
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
