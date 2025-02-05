import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import { cloneDeep } from "lodash";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { scrollToTop } from "utils/functions";
import { MouseOverPopover, SelectInput, TextButton } from "libs";
import { useCheckMobileScreen } from "hooks";

// IMPORT OTHERS HERE //
import { skillsetsArray, skillCategory, sortByOptions } from "config/skillset";
import { FilterIcon, HoverIllustration, SortIcon } from "assets/Images";
import appStyles from "./Skillset.module.scss";

const Skillset = () => {
  // STATE VARIABLEs HERE
  const [currentCategory, setCurrentCategory] = useState("");
  const [allSkills] = useState(skillsetsArray?.filter((s) => s.show));
  const [skills, setSkills] = useState([]);
  const currentCategoryRef = useRef(null);
  const [sortBy, setSortBy] = useState("");

  // HOOKs
  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    setTimeout(() => {
      scrollToTop({ isSmooth: false });
    }, 0);
  }, []);

  useEffect(() => {
    filterAndSortSkills();
    currentCategoryRef.current = currentCategory;
  }, [currentCategory, sortBy]);

  function filterAndSortSkills() {
    let skillsList = cloneDeep(allSkills);

    if (currentCategory) {
      skillsList = allSkills?.filter((sk) => sk?.categories?.includes(currentCategory)) || [];
    }

    if (sortBy) {
      skillsList =
        skillsList?.sort((s1, s2) => s2.industryExperience - s1.industryExperience) || [];
    }

    setSkills(skillsList);
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
          <SelectInput
            label="Sort by"
            options={sortByOptions?.filter((sc) => sc.show)}
            handleChange={(value) => {
              setSortBy(value);
            }}
            handleClear={() => setSortBy("")}
            value={sortBy}
            startAdornment={<SortIcon />}
          />

          <SelectInput
            label="Filter by"
            options={skillCategory?.filter((sc) => sc.show)}
            handleChange={(value) => {
              setCurrentCategory(value);
            }}
            handleClear={() => setCurrentCategory("")}
            value={currentCategory}
            startAdornment={<FilterIcon />}
          />
          {/* {skillCategory
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
            })} */}
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
        <div>{isMobile ? "Tap" : "Hover"}</div>
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
