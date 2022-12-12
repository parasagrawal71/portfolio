// IMPORTs HERE
import { calculateYearsOfExperience } from "utils/functions";

// GLOBAL VARIABLEs
const space = `\u00A0`;

// EXPORTs HERE
export const fullName = "Paras Agrawal";
export const currentCompanyName = "nference";
export const currentCompanySite = "https://nference.com/";
export const emailId = "parasagrawal71@gmail.com";
export const designation = "Senior Engineer";
export const careerStartDate = "07-15-2019"; // 15 July 2019; Format: MM-DD-YYYY;
export const YOE = calculateYearsOfExperience(careerStartDate);
export const RESUME_URL = "https://drive.google.com/uc?id=1yBdmFvsmzKpEB2c203g0rK8oOWWqU8DQ";
export const SELF_PICTURE_URL = `https://github.com/parasagrawal71.png`;
export const shortDescriptionHtml = `Hello! 👋🏼${space.repeat(2)}I'm a guy slightly obsessed 
  with code quality. I have ${YOE} years of experience in full-stack development. I am currently working 
  at <a href="${currentCompanySite}" target="_blank">${currentCompanyName}</a>.`;
