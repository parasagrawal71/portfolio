import React from "react";

// IMPORT OTHERS HERE //
import { lines } from "assets/Images";
import { skillsetsArray } from "config/skillset";
import appStyles from "./Skillset.module.scss";

const Skillset = () => {
  return (
    <main className={appStyles["main-cnt"]} id="skillset">
      <header className={appStyles["main-header"]}>
        <div className={appStyles["main-header__name"]}>SKILLSET</div>
        <img src={lines} alt="lines" />
      </header>

      <section className={appStyles["skills-cnt"]}>
        {skillsetsArray?.map((skill) => {
          return (
            <div className={appStyles.skill}>
              <img src={skill?.icon} alt={skill?.name} />
              <div className={appStyles["skill-name"]}>{skill?.name}</div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Skillset;
