import {
  calculateDiffInMonths,
  calculateYearsAndMonthsOfExperience,
  convertMonthsToYears,
} from "utils/functions";
import { techListMap } from "./techList";
import { projectsList } from "./projects";
import { careerStartDate } from ".";
import { companyExperiences } from "./experiences";

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
    id: "database",
    displayName: "Database",
    show: true,
  },
  {
    id: "others",
    displayName: "Others",
    show: false,
  },
  {
    id: "devops",
    displayName: "DevOps",
    show: true,
  },
];
const FRONTEND = skillCategory?.find((s) => s.id === "frontend")?.id;
const BACKEND = skillCategory?.find((s) => s.id === "backend")?.id;
const DATABASE = skillCategory?.find((s) => s.id === "database")?.id;
const OTHERS = skillCategory?.find((s) => s.id === "others")?.id;
const DEVOPS = skillCategory?.find((s) => s.id === "devops")?.id;

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
      industryExperience: calYoeForASkill("full_experience"),
      level: LEVEL.advanced,
      id: techListMap.javascript.id,
    }),
  },
  {
    ...techListMap.typescript,
    show: true,
    categories: [FRONTEND, BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("", { value: 2.5 }),
      level: LEVEL.advanced,
      id: techListMap.typescript.id,
    }),
  },
  {
    ...techListMap.nodejs,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("exclude_months", { months: 6 }),
      level: LEVEL.advanced,
      id: techListMap.nodejs.id,
    }),
  },
  {
    ...techListMap.expressjs,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("exclude_months", { months: 6 }),
      level: LEVEL.advanced,
      id: techListMap.expressjs.id,
    }),
  },
  {
    ...techListMap.sql,
    show: true,
    categories: [BACKEND, DATABASE],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("same_as_given_companies", { companyNos: [3] }),
      level: LEVEL.intermediate,
      id: techListMap.sql.id,
    }),
  },
  {
    ...techListMap.mongo,
    show: true,
    categories: [BACKEND, DATABASE],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("full_experience"),
      level: LEVEL.advanced,
      id: techListMap.mongo.id,
    }),
  },
  {
    ...techListMap.api,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("full_experience"),
      level: LEVEL.advanced,
      id: techListMap.api.id,
    }),
  },
  {
    ...techListMap.react,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("exclude_months", { months: 6 }),
      level: LEVEL.advanced,
      id: techListMap.react.id,
    }),
  },
  {
    ...techListMap.html,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("full_experience"),
      level: LEVEL.intermediate,
      id: techListMap.html.id,
    }),
  },
  {
    ...techListMap.css,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("full_experience"),
      level: LEVEL.intermediate,
      id: techListMap.css.id,
    }),
  },
  {
    ...techListMap.sass,
    show: true,
    categories: [FRONTEND],

    details: getSkillDetails({
      industryExperience: calYoeForASkill("full_experience"),
      level: LEVEL.intermediate,
      id: techListMap.sass.id,
    }),
  },
  {
    ...techListMap.materialUi,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("exclude_months", { months: 12 }),
      level: LEVEL.intermediate,
      id: techListMap.materialUi.id,
    }),
  },
  {
    ...techListMap.redux,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("", { value: 2 }),
      level: LEVEL.intermediate,
      id: techListMap.redux.id,
    }),
  },
  {
    ...techListMap.git,
    show: true,
    categories: [OTHERS],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("full_experience"),
      level: LEVEL.intermediate,
      id: techListMap.git.id,
    }),
  },
  {
    ...techListMap.linux,
    show: true,
    categories: [OTHERS],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("full_experience"),
      level: LEVEL.intermediate,
      id: techListMap.linux.id,
    }),
  },
  {
    ...techListMap.vuejs,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("", { value: 1 }),
      level: LEVEL.intermediate,
      id: techListMap.vuejs.id,
    }),
  },
  {
    ...techListMap.python,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("", { value: 1 }),
      level: LEVEL.intermediate,
      id: techListMap.python.id,
    }),
  },
  {
    ...techListMap.aws,
    show: true,
    categories: [BACKEND, DEVOPS],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("", { value: 1 }),
      level: LEVEL.intermediate,
      id: techListMap.aws.id,
    }),
  },
  {
    ...techListMap.kafka,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("exclude_months", { months: 18 }),
      level: LEVEL.intermediate,
      id: techListMap.kafka.id,
    }),
  },
  {
    ...techListMap.graphql,
    show: true,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("same_as_given_companies", { companyNos: [3] }),
      level: LEVEL.beginner,
      id: techListMap.graphql.id,
    }),
  },
  {
    ...techListMap.docker,
    show: true,
    categories: [BACKEND, DEVOPS],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("same_as_given_companies", { companyNos: [2, 3] }),
      level: LEVEL.intermediate,
      id: techListMap.docker.id,
    }),
  },
  {
    ...techListMap.nextjs,
    show: true,
    categories: [FRONTEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("same_as_given_companies", { companyNos: [3] }),
      level: LEVEL.intermediate,
      id: techListMap.nextjs.id,
    }),
  },
  {
    ...techListMap.nestjs,
    show: false,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("same_as_given_companies", { companyNos: [3] }),
      level: LEVEL.intermediate,
      id: techListMap.nestjs.id,
    }),
  },
  {
    ...techListMap.postgresql,
    show: true,
    categories: [BACKEND, DATABASE],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("same_as_given_companies", { companyNos: [3] }),
      level: LEVEL.intermediate,
      id: techListMap.postgresql.id,
    }),
  },
  {
    ...techListMap.golang,
    show: false,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("", { value: 0.5 }),
      level: LEVEL.beginner,
      id: techListMap.golang.id,
    }),
  },
  {
    ...techListMap.redis,
    show: false,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("", { value: 0 }),
      level: LEVEL.intermediate,
      id: techListMap.redis.id,
    }),
  },
  {
    ...techListMap.typeorm,
    show: false,
    categories: [BACKEND],
    details: getSkillDetails({
      industryExperience: calYoeForASkill("", { value: 0 }),
      level: LEVEL.intermediate,
      id: techListMap.typeorm.id,
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

// Function to calculate the years of experience for a skill
function calYoeForASkill(type, { value = 0, months = 0, companyNos = [] } = {}) {
  let result = 0;

  const companyWiseExperience = calCompanyWiseExperience();

  const { years: careerTotalYears, months: careerTotalMonths } =
    calculateYearsAndMonthsOfExperience(careerStartDate);

  if (type === "full_experience") {
    // Same as total experience
    result = formatYoE(careerTotalYears, careerTotalMonths);
  } else if (type === "exclude_months") {
    // Exclude number of months from total experience
    result = formatYoE(careerTotalYears, careerTotalMonths - months);
  } else if (type === "same_as_given_companies") {
    // Same as given companies
    result = companyNos.reduce((acc, companyNo) => acc + companyWiseExperience[companyNo], 0);
  } else {
    // Same as given value
    result = value;
  }

  function formatYoE(yrs, mnths) {
    const monthsInDecimal = (mnths / 12).toFixed(1);
    if (Number.isNaN(yrs) || Number.isNaN(mnths)) {
      return 0;
    }
    return Number(`${Number(yrs) + Number(monthsInDecimal)}`);
  }

  return result > 1 ? `${result} yrs` : `${result} yr`;
}

/**
 * Returns an object where the keys are the company numbers and the values are
 * the years of experience in that company.
 */
function calCompanyWiseExperience() {
  const map = {};
  companyExperiences.map((exp) => {
    if (exp.endDate === "Present") {
      exp.endDate = new Date().toISOString();
    }
    const months = calculateDiffInMonths(exp.startDate, exp.endDate);
    map[exp.companyNo] = convertMonthsToYears(months);
    return exp;
  });
  return map;
}
