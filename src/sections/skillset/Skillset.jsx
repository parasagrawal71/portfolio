import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT OTHERS HERE //
import { skillsetsArray } from "config/skillset";
import appStyles from "./Skillset.module.scss";

const Skillset = () => {
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
