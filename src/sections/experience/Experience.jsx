import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import SectionHeaderComponent from "components/sectionHeader/SectionHeader";

// IMPORT OTHERS HERE //
import appStyles from "./Experience.module.scss";

const Experience = () => {
  return (
    <main className={appStyles["main-cnt"]} id="experience">
      <SectionHeaderComponent headerTitle="EXPERIENCE" />
    </main>
  );
};

export default Experience;
