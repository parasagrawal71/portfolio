import { techListMap } from "./techList";
import { projectsList } from "./projects";

/* *********************************************************************************************************** */
/* *********************************************************************************************************** */

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

// Skill levels
const LEVEL = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

// Skills list
export const skillsetsArray = [
  {
    ...techListMap.javascript,
    show: true,
    categories: [FRONTEND, BACKEND],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.advanced,
      usedInProjects: calNoOfProjectsSkillUsedIn("javascript"),
    }),
  },
  {
    ...techListMap.nodejs,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.advanced,
      usedInProjects: calNoOfProjectsSkillUsedIn("nodejs"),
    }),
  },
  {
    ...techListMap.expressjs,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.advanced,
      usedInProjects: calNoOfProjectsSkillUsedIn("expressjs"),
    }),
  },
  {
    ...techListMap.mongo,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.advanced,
      usedInProjects: calNoOfProjectsSkillUsedIn("mongo"),
    }),
  },
  {
    ...techListMap.api,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.advanced,
      usedInProjects: calNoOfProjectsSkillUsedIn("api"),
    }),
  },
  {
    ...techListMap.react,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.advanced,
      usedInProjects: calNoOfProjectsSkillUsedIn("react"),
    }),
  },
  {
    ...techListMap.html,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("html"),
    }),
  },
  {
    ...techListMap.css,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("css"),
    }),
  },
  {
    ...techListMap.sass,
    show: true,
    categories: [FRONTEND],

    details: getSkillDetails({
      industryExperience: 2,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("sass"),
    }),
  },
  {
    ...techListMap.materialUi,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 2,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("materialUi"),
    }),
  },
  {
    ...techListMap.redux,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("redux"),
    }),
  },
  {
    ...techListMap.git,
    show: true,
    categories: [OTHERS],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("git"),
    }),
  },
  {
    ...techListMap.linux,
    show: true,
    categories: [OTHERS],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("linux"),
    }),
  },
  {
    ...techListMap.vuejs,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 1,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("vuejs"),
    }),
  },
  {
    ...techListMap.python,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 1,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("python"),
    }),
  },
  {
    ...techListMap.aws,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 1,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("aws"),
    }),
  },
  {
    ...techListMap.kafka,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 1,
      level: LEVEL.intermediate,
      usedInProjects: calNoOfProjectsSkillUsedIn("kafka"),
    }),
  },
];

// Function to get skill details
function getSkillDetails({ industryExperience, level, usedInProjects }) {
  return [
    {
      displayName: "Industry YOE:",
      id: "industryExperience",
      value: industryExperience,
      show: true,
    },
    {
      displayName: "Proficiency:",
      id: "level",
      value: level,
      show: true,
    },
    {
      displayName: "Used In Projects:",
      id: "usedInProjects",
      value: usedInProjects,
      show: true,
    },
  ];
}

// Function to calculate the number of projects skills used in
function calNoOfProjectsSkillUsedIn(skillId) {
  let noOfProjects = 0;
  projectsList.map((project) => {
    const techIds = project?.techList?.map((tech) => tech.id);
    if (techIds?.includes(skillId)) {
      noOfProjects += 1;
    }
    return project;
  });
  return noOfProjects;
}
