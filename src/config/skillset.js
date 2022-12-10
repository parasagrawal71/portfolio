import {
  CSS3Icon,
  JavaScriptIcon,
  ReactIcon,
  Html5Icon,
  ReactNativeIcon,
  ReduxIcon,
  VueIcon,
  NodejsIcon,
  MongoDBIcon,
  GitIcon,
  LinuxIcon,
  SassIcon,
  PythonIcon,
  KafkaIcon,
  AwsIcon,
  ApiSkillIcon,
  ExpressJsIcon,
  MaterialUiIcon,
} from "assets/Images";

// Skill category
export const skillCategory = [
  {
    id: "backend",
    displayName: "Backend",
    show: true,
  },
  {
    id: "frontend",
    displayName: "Frontend",
    show: true,
  },
  {
    id: "others",
    displayName: "Others",
    show: false,
  },
];
const FRONTEND = skillCategory?.filter((s) => s.id === "frontend")?.[0]?.id;
const BACKEND = skillCategory?.filter((s) => s.id === "backend")?.[0]?.id;
const OTHERS = skillCategory?.filter((s) => s.id === "others")?.[0]?.id;

export const skillsetsArray = [
  {
    name: "Javascript",
    Icon: JavaScriptIcon,
    categories: [FRONTEND, BACKEND],
  },
  {
    name: "Node JS",
    Icon: NodejsIcon,
    categories: [BACKEND],
  },
  {
    name: "Express JS",
    Icon: ExpressJsIcon,
    categories: [BACKEND],
  },
  {
    name: "MongoDB",
    Icon: MongoDBIcon,
    categories: [BACKEND],
  },
  {
    name: "API",
    Icon: ApiSkillIcon,
    categories: [BACKEND],
  },
  {
    name: "React",
    Icon: ReactIcon,
    categories: [FRONTEND],
  },
  {
    name: "HTML",
    Icon: Html5Icon,
    categories: [FRONTEND],
  },
  {
    name: "CSS",
    Icon: CSS3Icon,
    categories: [FRONTEND],
  },
  {
    name: "Sass",
    Icon: SassIcon,
    categories: [FRONTEND],
  },
  {
    name: "Material UI",
    Icon: MaterialUiIcon,
    categories: [FRONTEND],
  },
  {
    name: "Redux",
    Icon: ReduxIcon,
    categories: [FRONTEND],
  },
  {
    name: "Git",
    Icon: GitIcon,
    categories: [OTHERS],
  },
  {
    name: "Linux",
    Icon: LinuxIcon,
    categories: [OTHERS],
  },
  {
    name: "Vue",
    Icon: VueIcon,
    categories: [FRONTEND],
  },
  {
    name: "Python",
    Icon: PythonIcon,
    categories: [BACKEND],
  },
  {
    name: "AWS",
    Icon: AwsIcon,
    categories: [BACKEND],
  },
  {
    name: "Kafka",
    Icon: KafkaIcon,
    categories: [BACKEND],
  },
];
