import React, { useEffect, useRef } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import ExperienceCard from "components/experienceCard/ExperienceCard";
import { experienceList } from "config/experiences";

// IMPORT OTHERS HERE //
import appStyles from "./Experiences.module.scss";

const Experience = () => {
  // REFs
  const experiencesRef = useRef(null);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className={appStyles["main-cnt"]} id="experience" ref={experiencesRef}>
      <section className={appStyles["experience-cnt"]}>
        {experienceList?.map((experience, index) => {
          return (
            <ExperienceCard
              cntClassName={appStyles["experience-card"]}
              key={index}
              {...experience}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Experience;
