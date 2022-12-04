import React, { useEffect } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { scrollToTop } from "utils/functions";

// IMPORT OTHERS HERE //
import { skillsetsArray } from "config/skillset";
import appStyles from "./Skillset.module.scss";

const Skillset = () => {
  useEffect(() => {
    setTimeout(() => {
      scrollToTop({ isSmooth: false });
    }, 0);
  }, []);

  return (
    <main className={appStyles["main-cnt"]} id="skillset">
      <section className={appStyles["skills-cnt"]}>
        {skillsetsArray?.map((skill) => {
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
