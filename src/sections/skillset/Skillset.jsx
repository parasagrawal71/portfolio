import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import SectionHeaderComponent from "components/sectionHeader/SectionHeader";

// IMPORT OTHERS HERE //
import { skillsetsArray } from "config/skillset";
import appStyles from "./Skillset.module.scss";

const Skillset = () => {
  return (
    <main className={appStyles["main-cnt"]} id="skillset">
      <SectionHeaderComponent headerTitle="SKILLSET" />

      <section className={appStyles["skills-cnt"]}>
        {skillsetsArray?.map((skill) => {
          return (
            <div className={appStyles.skill} key={skill?.name}>
              <img src={skill?.icon} alt={skill?.name} style={{ height: skill?.imgHeight }} />
              <div className={appStyles["skill-name"]}>{skill?.name}</div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Skillset;
