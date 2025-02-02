import {
  calculateDiffInMonths,
  calculateYearsAndMonthsOfExperience,
  convertMonthsToYears,
} from "utils/functions";
import { projectsList } from "./projects";
import { careerStartDate } from ".";
import { companyExperiences } from "./experiences";

/**
 * This function takes an object with the following properties:
 * - industryExperience: The total industry experience in years for the given skill
 * - level: The proficiency level of the skill. Can be one of 'beginner', 'intermediate', or 'advanced'
 * - id: The id of the skill
 *
 * It returns an array of three objects:
 * The first object represents the industry experience in years.
 * The second object represents the proficiency level.
 * The third object represents the number of projects the skill has been used in.
 *
 */
export function getSkillDetails({ industryExperience, level, id }) {
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

/**
 * Calculates the years of experience for a given skill based on the given parameters.
 *
 * @param {string} type - The type of calculation to be performed.
 * Can be one of 'full_experience', 'exclude_months', 'same_as_given_companies', or default.
 * @param {object} params - The parameters for the given calculation.
 * If type is 'full_experience', no parameters are required as it will return the total experience.
 * If type is 'exclude_months', provide the 'months' property with the number of months to exclude.
 * If type is 'same_as_given_companies', provide the 'companyNos' property with the company numbers.
 * If type is '', provide the 'value' property with the value to be used.
 * @returns {string} The years of experience for the given skill.
 */
export function calYoeForASkill(type, { value = 0, months = 0, companyNos = [] } = {}) {
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

// ****************************** HELPER METHODS and CONSTANTS ****************************************

// Skill levels
export const LEVEL = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

/**
 * Calculates the number of projects skills used in
 *
 * @param {string} skillId - The id of the skill
 * @returns {number} - The number of projects the skill has been used in
 */
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
