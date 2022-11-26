// IMPORTs HERE
import {
  myPicture,
  frontend,
  backend,
  halfAndroid,
  halfiOS,
  GithubIcon,
  MailIcon,
  LinkedInIcon,
  InstagramIcon,
} from "assets/Images";
import myResume from "assets/pdfs/Paras-Agrawal_Senior-Engineer_Resume.pdf";

// EXPORTs HERE
export const fullName = "Paras Agrawal";
export const companyName = "nference";
export const designation = "Senior Engineer";
export const YOE = 3;
export const designations = ["Back-end", "Front-end", "Mobile App"];
export const RESUME_URL = myResume;
// export const RESUME_URL =
//   "https://drive.google.com/file/d/1teFr1xr-BEY2rxtjk_K7gsuRWKEex4Ot/view?usp=sharing";
export const SELF_PICTURE_URL = myPicture;
export const aboutDescription = `Hello! I'm ${fullName}, a ${designation}, and a guy slightly obsessed with code
  quality. I have 3 years of experience in full-stack development. I am currently working at ${companyName}, a healthcare-based company.
  I have very good knowledge of JavaScript, ReactJS, NodeJS, MongoDB, API Development, and Git. In addition, I have worked with and implemented 
  technologies like Kafka, Electron.js, AWS, and more. I enjoy developing applications and am always keen to learn new skills.`;

export const socialProfiles = [
  {
    name: "Mail",
    href: `mailto:parasagrawal71@gmail.com`,
    Icon: MailIcon,
  },
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
];

export const roles = [
  {
    name: "backend",
    displayName: "Back-end",
    description: `I'm more back end focused and love to work with APIs in Node js and Python.`,
    icon: backend,
  },
  {
    name: "frontend",
    displayName: "Front-end",
    description: `As a javascript developer, I have experience in React JS and Vue JS libraries.`,
    icon: frontend,
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
