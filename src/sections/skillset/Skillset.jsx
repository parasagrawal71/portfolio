import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { scrollToTop } from "utils/functions";
import { MouseOverPopover, TextButton } from "libs";

// IMPORT OTHERS HERE //
import { skillsetsArray, skillCategory } from "config/skillset";
import { HoverIllustration } from "assets/Images";
import appStyles from "./Skillset.module.scss";

const Skillset = () => {
  // STATE VARIABLEs HERE
  const [currentCategory, setCurrentCategory] = useState("");
  const [skills, setSkills] = useState(skillsetsArray?.filter((s) => s.show));
  const currentCategoryRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      scrollToTop({ isSmooth: false });
    }, 0);
  }, []);

  useEffect(() => {
    filterSkills(currentCategory);
    currentCategoryRef.current = currentCategory;
  }, [currentCategory]);

  function filterSkills(category = "") {
    if (category) {
      setSkills(skillsetsArray?.filter((sk) => sk?.categories?.includes(category) && sk.show));
    } else {
      setSkills(skillsetsArray?.filter((s) => s.show));
    }
  }

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
    <>
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
                  key={skCategory.id}
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
            const { Icon, details, displayName } = skill;
            return (
              <MouseOverPopover
                PopoverComponent={SkillDetailsComponent({ details })}
                key={displayName}
                arrowPosition="bottomCenter"
              >
                <div className={appStyles.skill}>
                  <Icon />
                  <div className={appStyles["skill-name"]}>{displayName}</div>
                </div>
              </MouseOverPopover>
            );
          })}
        </section>
      </main>
      <section className={appStyles.hoverIllustration}>
        <HoverIllustration />
        <div>Hover</div>
      </section>
    </>
  );
};

function SkillDetailsComponent({ details = [] }) {
  return (
    <section className={appStyles.skillDetails}>
      {details
        ?.filter((s) => s.show)
        ?.map((row) => {
          return (
            <div key={row.id} className={appStyles.detailsRow}>
              <div className={appStyles.detailsKey}>{row?.displayName}</div>
              <div className={appStyles.detailsValue}>{row?.value}</div>
            </div>
          );
        })}
    </section>
  );
}

export default Skillset;
