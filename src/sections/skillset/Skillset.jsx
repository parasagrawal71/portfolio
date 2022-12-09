import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { scrollToTop } from "utils/functions";

// IMPORT OTHERS HERE //
import { TextButton } from "libs";
import { skillsetsArray, skillCategory } from "config/skillset";
import appStyles from "./Skillset.module.scss";

const Skillset = () => {
  // STATE VARIABLEs HERE
  const [currentCategory, setCurrentCategory] = useState("");
  const [skills, setSkills] = useState(skillsetsArray);
  const currentCategoryRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      scrollToTop({ isSmooth: false });
    }, 0);
  }, []);

  function filterSkills(category = "") {
    if (category) {
      setSkills(skillsetsArray?.filter((sk) => sk?.categories?.includes(category)));
    } else {
      setSkills(skillsetsArray);
    }
  }

  useEffect(() => {
    filterSkills(currentCategory);
    currentCategoryRef.current = currentCategory;
  }, [currentCategory]);

  function toggleSkillCategory(category) {
    if (category) {
      if (currentCategoryRef.current === category) {
        setCurrentCategory("");
      } else {
        setCurrentCategory(category);
      }
    } else {
      setCurrentCategory("");
    }
  }

  return (
    <main className={appStyles["main-cnt"]} id="skillset">
      {/*
       * Skill category
       */}
      <section className={appStyles.header}>
        {skillCategory
          ?.filter((sc) => sc.show)
          ?.map((skCategory) => {
            return (
              <TextButton
                btnText={skCategory.displayName}
                customBtnClass={cx([
                  appStyles["skill-category"],
                  {
                    [appStyles.active]: currentCategory === skCategory.id,
                  },
                ])}
                btnCallback={toggleSkillCategory.bind(this, skCategory.id)}
              />
            );
          })}
      </section>
      {/*
       * Skills
       */}
      <section className={appStyles["skills-cnt"]}>
        {skills?.map((skill) => {
          const { Icon } = skill;
          return (
            <div className={appStyles.skill} key={skill?.name}>
              <Icon />
              <div className={appStyles["skill-name"]}>{skill?.name}</div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Skillset;
