// IMPORTs HERE
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
import myResume from "assets/pdfs/Paras-Agrawal_Senior-Engineer_Resume.pdf";

// EXPORTs HERE
export const fullName = "Paras Agrawal";
export const companyName = "nference";
export const designations = ["Front-end", "Back-end", "Mobile App"];
export const RESUME_URL = myResume;
// export const RESUME_URL =
//   "https://drive.google.com/file/d/1teFr1xr-BEY2rxtjk_K7gsuRWKEex4Ot/view?usp=sharing";
export const SELF_PICTURE_URL = myPicture;
export const aboutDescription = `Hello! I'm ${fullName}, a full-stack developer, and a guy slightly obsessed with code
  quality. I am currently working for a start-up, ${companyName}. I not only love to code also
  like to solve problems.`;

export const socialProfiles = [
  {
    name: "Mail",
    href: `mailto:parasagrawal71@gmail.com`,
    icon: mail,
  },
  {
    name: "Github",
    href: `https://github.com/parasagrawal71`,
    icon: github,
    newTab: true,
  },
  {
    name: "LinkedIn",
    href: `https://www.linkedin.com/in/parasagrawal71`,
    icon: linkedin,
    newTab: true,
  },
  {
    name: "Instagram",
    href: `https://www.instagram.com/paras__fbg`,
    icon: instagram,
    newTab: true,
  },
];

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
