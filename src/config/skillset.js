import {
  CSS3Icon,
  JavaScriptIcon,
  ReactIcon,
  Html5Icon,
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

// GLOBAL VARIABLEs
const LEVEL = {
  // Skill levels
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

function getSkillDetails({ industryExperience, level }) {
  return [
    {
      displayName: "Industry YOE",
      id: "industryExperience",
      value: industryExperience,
    },
    {
      displayName: "Level",
      id: "level",
      value: level,
    },
  ];
}

export const skillsetsArray = [
  {
    name: "Javascript",
    Icon: JavaScriptIcon,
    categories: [FRONTEND, BACKEND],
    details: getSkillDetails({ industryExperience: 3.5, level: LEVEL.advanced }),
  },
  {
    name: "Node JS",
    Icon: NodejsIcon,
    categories: [BACKEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "Express JS",
    Icon: ExpressJsIcon,
    categories: [BACKEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "MongoDB",
    Icon: MongoDBIcon,
    categories: [BACKEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "API",
    Icon: ApiSkillIcon,
    categories: [BACKEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "React",
    Icon: ReactIcon,
    categories: [FRONTEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "HTML",
    Icon: Html5Icon,
    categories: [FRONTEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "CSS",
    Icon: CSS3Icon,
    categories: [FRONTEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "Sass",
    Icon: SassIcon,
    categories: [FRONTEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "Material UI",
    Icon: MaterialUiIcon,
    categories: [FRONTEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "Redux",
    Icon: ReduxIcon,
    categories: [FRONTEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "Git",
    Icon: GitIcon,
    categories: [OTHERS],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "Linux",
    Icon: LinuxIcon,
    categories: [OTHERS],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "Vue",
    Icon: VueIcon,
    categories: [FRONTEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "Python",
    Icon: PythonIcon,
    categories: [BACKEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "AWS",
    Icon: AwsIcon,
    categories: [BACKEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
  {
    name: "Kafka",
    Icon: KafkaIcon,
    categories: [BACKEND],
    details: getSkillDetails({ industryExperience: 0, level: "" }),
  },
];
