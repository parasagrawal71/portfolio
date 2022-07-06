import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import SectionHeaderComponent from "components/sectionHeader/SectionHeader";
import ProjectBox from "components/projectBox/ProjectBox";

// IMPORT OTHERS HERE //
import { projectsList } from "config/projects";
import appStyles from "./Projects.module.scss";

const Projects = () => {
  return (
    <main className={appStyles["main-cnt"]} id="projects">
      <SectionHeaderComponent headerTitle="PROJECTS" />
      <section className={appStyles["projects-cnt"]}>
        {projectsList?.map((project) => {
          return <ProjectBox key={project?.name} {...project} />;
        })}
      </section>
    </main>
  );
};

export default Projects;
