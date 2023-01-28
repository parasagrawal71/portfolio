// IMPORTs HERE
import { FrontendIcon, BackendIcon, halfAndroid, halfiOS } from "assets/Images";
import { currentCompanyName, designation, fullName, YOE } from "config";

export const designations = ["Back-end", "Front-end", "Mobile App"];
export const aboutDescription = `Hello! I'm ${fullName}, a ${designation}, and a guy slightly obsessed with code
  quality. I have ${YOE} years of experience in full-stack development. I am currently working at ${currentCompanyName}, a healthcare-based company.
  I have very good knowledge of JavaScript, ReactJS, NodeJS, MongoDB, API Development, and Git. In addition, I have worked with and implemented 
  technologies like Kafka, Electron.js, AWS, and more. I enjoy developing applications and am always keen to learn new skills.`;
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
