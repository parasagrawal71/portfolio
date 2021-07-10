import React from "react";

// IMPORT OTHERS HERE //
import "./Skillset.scss";
import { lines } from "assets/Images";
import { skillsetsArray } from "config/skillset";

const Skillset = () => {
  return (
    <main className="skillset" id="skillset">
      <header className="skillset-header">
        <div>SKILLSET</div>
        <img src={lines} alt="lines" />
      </header>

      <section className="skillset-skills">
        {skillsetsArray?.map((skill) => {
          return (
            <div className="skillset-skill">
              <img src={skill?.icon} alt={skill?.name} />
              <div>{skill?.name}</div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Skillset;
