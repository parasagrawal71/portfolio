import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import SectionHeaderComponent from "components/sectionHeader/SectionHeader";

// IMPORT OTHERS HERE //
import appStyles from "./Projects.module.scss";

const Projects = () => {
  return (
    <main className={appStyles["main-cnt"]} id="projects">
      <SectionHeaderComponent headerTitle="PROJECTS" />
    </main>
  );
};

export default Projects;
