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
      id: techListMap.javascript.id,
    }),
  },
  {
    ...techListMap.nodejs,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.advanced,
      id: techListMap.nodejs.id,
    }),
  },
  {
    ...techListMap.expressjs,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.advanced,
      id: techListMap.expressjs.id,
    }),
  },
  {
    ...techListMap.mongo,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.advanced,
      id: techListMap.mongo.id,
    }),
  },
  {
    ...techListMap.api,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.advanced,
      id: techListMap.api.id,
    }),
  },
  {
    ...techListMap.react,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.advanced,
      id: techListMap.react.id,
    }),
  },
  {
    ...techListMap.html,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.intermediate,
      id: techListMap.html.id,
    }),
  },
  {
    ...techListMap.css,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.intermediate,
      id: techListMap.css.id,
    }),
  },
  {
    ...techListMap.sass,
    show: true,
    categories: [FRONTEND],

    details: getSkillDetails({
      industryExperience: 2,
      level: LEVEL.intermediate,
      id: techListMap.sass.id,
    }),
  },
  {
    ...techListMap.materialUi,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 2,
      level: LEVEL.intermediate,
      id: techListMap.materialUi.id,
    }),
  },
  {
    ...techListMap.redux,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.intermediate,
      id: techListMap.redux.id,
    }),
  },
  {
    ...techListMap.git,
    show: true,
    categories: [OTHERS],
    details: getSkillDetails({
      industryExperience: 3.5,
      level: LEVEL.intermediate,
      id: techListMap.git.id,
    }),
  },
  {
    ...techListMap.linux,
    show: true,
    categories: [OTHERS],
    details: getSkillDetails({
      industryExperience: 3,
      level: LEVEL.intermediate,
      id: techListMap.linux.id,
    }),
  },
  {
    ...techListMap.vuejs,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: 1,
      level: LEVEL.intermediate,
      id: techListMap.vuejs.id,
    }),
  },
  {
    ...techListMap.python,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 1,
      level: LEVEL.intermediate,
      id: techListMap.python.id,
    }),
  },
  {
    ...techListMap.aws,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 1,
      level: LEVEL.intermediate,
      id: techListMap.aws.id,
    }),
  },
  {
    ...techListMap.kafka,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: 1,
      level: LEVEL.intermediate,
      id: techListMap.kafka.id,
    }),
  },
];

// Function to get skill details
function getSkillDetails({ industryExperience, level, id }) {
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
      value: calNoOfProjectsSkillUsedIn(id),
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
