export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearInterval(timer);
    const context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const handleResize = () => {
  const threshold = 600;
  const initialDiff = window.innerWidth > threshold ? 1 : -1;

  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const currentDiff = width - threshold;
    if (currentDiff * initialDiff < 0) {
      // eslint-disable-next-line no-restricted-globals, no-undef
      location.reload();
    }
  });
};

export function customTypingEffect(wordsList, id, speed = 200) {
  let charPos = 0;
  let wordPos = 0;
  let type = "inc";
  const wordLen = wordsList.length;
  const demoEle = document.getElementById(id);

  return function typeWriter() {
    if (!demoEle) {
      return;
    }
    const txt = wordsList[wordPos];
    const txtLen = txt ? txt.length : 0;
    // console.log(`wordPos, charPos: `, wordPos, charPos);
    if (type === "inc") {
      if (charPos < txtLen) {
        demoEle.innerHTML += txt.charAt(charPos);
        charPos += 1;
      } else {
        type = "dec";
      }
    } else if (type === "dec") {
      if (charPos > -1) {
        demoEle.innerHTML = txt.substr(0, charPos);
        charPos -= 1;
      } else {
        type = "inc";
        wordPos = (wordPos + 1) % wordLen;
      }
    }
    setTimeout(typeWriter, speed);
  };
}

export function scrollToTop({ isSmooth = true }) {
  const app = document.getElementById("app");
  app.scrollTo({ top: 0, behavior: isSmooth ? "smooth" : "auto" });
}

/**
 * Calculates the total years of experience from the given start date to the current date.
 * The result is returned as a string in years with one decimal point precision.
 *
 * @param {string} startDateStr Start date in "YYYY-MM-DD" format.
 * @returns {string} Total years of experience as a string in decimal format.
 */
export function calculateYearsOfExperience(startDateStr) {
  const startDate = new Date(startDateStr);
  const startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  const currentDate = new Date();
  const endMonth = currentDate.getFullYear() * 12 + currentDate.getMonth();
  const monthInterval = endMonth - startMonth;

  const yearsOfExperience = Math.floor(monthInterval / 12);
  const monthsOfExperience = monthInterval % 12;
  const monthsInDecimal = (monthsOfExperience / 12).toFixed(1);
  if (Number.isNaN(yearsOfExperience) || Number.isNaN(monthsOfExperience)) {
    return "0";
  }
  return `${Number(yearsOfExperience) + Number(monthsInDecimal)}`;
}

/**
 * Calculates the difference in years and months between the given start date and the current date.
 * @param {string} startDateStr Start date in "YYYY-MM-DD" format.
 * @returns {{years: number, months: number}} Difference in years and months between the given start and current dates.
 */
export function calculateYearsAndMonthsOfExperience(startDateStr) {
  const result = { years: 0, months: 0 };
  const startDate = new Date(startDateStr);
  const startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  const currentDate = new Date();
  const endMonth = currentDate.getFullYear() * 12 + currentDate.getMonth();
  const monthInterval = endMonth - startMonth;

  const yearsOfExperience = Math.floor(monthInterval / 12);
  const monthsOfExperience = monthInterval % 12;
  if (Number.isNaN(yearsOfExperience) || Number.isNaN(monthsOfExperience)) {
    return result;
  }
  result.years = Number(yearsOfExperience);
  result.months = Number(monthsOfExperience);
  return result;
}

/**
 * Calculates the difference in months between the given start and end dates.
 * @param {string} startDateStr Start date in "YYYY-MM-DD" or "YYYY-MM"  format.
 * @param {string} endDateStr End date in "YYYY-MM-DD" or "YYYY-MM" format.
 * @returns {number} Difference in months between the given start and end dates.
 */
export function calculateDiffInMonths(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  const endDate = new Date(endDateStr);
  const endMonth = endDate.getFullYear() * 12 + endDate.getMonth();
  const monthInterval = endMonth - startMonth;
  return monthInterval;
}

/**
 * Converts given number of months into years and months in decimal.
 * @param {number} months Number of months to convert.
 * @returns {number} Number of years and months in decimal (e.g. 1.5 for 1 year and 6 months).
 */
export function convertMonthsToYears(months) {
  const years = Math.floor(months / 12);
  const monthsInDecimal = ((months % 12) / 12).toFixed(1);
  return Number(`${Number(years) + Number(monthsInDecimal)}`);
}

// Filter list in the same order as given in the 'list'
export function filterInSameOrder(parentList, filterIds) {
  return filterIds
    .map((filterId) => parentList.find((item) => item.id === filterId))
    .filter(Boolean);
}
