import React, { useEffect, useRef } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import ExperienceCard from "components/experienceCard/ExperienceCard";
import { experienceList } from "config/experiences";
import { scrollToTop } from "utils/functions";
import SquiggleSvg from "components/squiggleSvg/SquiggleSvg";

// IMPORT OTHERS HERE //
import appStyles from "./Experiences.module.scss";

const Experience = () => {
  // REFs
  const experiencesRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      scrollToTop({ isSmooth: false });
    }, 0);
  }, []);

  return (
    <main className={appStyles["main-cnt"]} id="experience" ref={experiencesRef}>
      <section className={appStyles["experience-cnt"]}>
        {experienceList?.map((experience, index) => {
          return (
            <ExperienceCard
              id={`experience-card-${index + 1}`}
              cntClassName={appStyles["experience-card"]}
              key={`experience-card-${index + 1}`}
              {...experience}
            />
          );
        })}
      </section>

      <SquiggleSvg customStyle={{ left: "calc(50% - 100px)", top: 300 }} />
    </main>
  );
};

export default Experience;
