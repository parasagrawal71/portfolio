import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import SectionHeaderComponent from "components/sectionHeader/SectionHeader";
import ProjectBox from "components/projectBox/ProjectBox";
import { Carousel, CarouselItem } from "libs";

// IMPORT OTHERS HERE //
import { projectsList } from "config/projects";
import appStyles from "./Projects.module.scss";

const Projects = () => {
  return (
    <main className={appStyles["main-cnt"]} id="projects">
      {/* <SectionHeaderComponent headerTitle="PROJECTS" /> */}
      <Carousel>
        {projectsList?.map((project) => {
          return (
            <CarouselItem key={project?.name}>
              <ProjectBox {...project} />
            </CarouselItem>
          );
        })}
      </Carousel>
    </main>
  );
};

export default Projects;
