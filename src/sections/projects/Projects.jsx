import React, { useRef, useState } from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import ProjectBox from "components/projectBox/ProjectBox";
import { Carousel, CarouselItem } from "libs";
import { usePrevious } from "hooks";
import { useGlobalState } from "contexts/GlobalContextProvider";

// IMPORT OTHERS HERE //
import { CarouselViewIcon, GridViewIcon, ListViewIcon } from "assets/Images";
import { projectsList } from "config/projects";
import appStyles from "./Projects.module.scss";

const Projects = () => {
  // STATE VARIABLEs
  const [currentView, setCurrentView] = useState("carousel");
  const oldValueOfCurrentView = usePrevious(currentView);
  const contentCntRef = useRef(null);
  const { globalState } = useGlobalState();

  function handleToggleView(view) {
    if (view === "carousel") {
      setCurrentView("carousel");
    } else if (view === "grid") {
      setCurrentView("grid");
    } else if (view === "list") {
      setCurrentView("list");
    }
  }

  return (
    <main
      className={cx([
        appStyles["main-cnt"],
        {
          [appStyles["carousel-view"]]: currentView === "carousel",
          [appStyles["grid-view"]]: currentView === "grid",
        },
      ])}
      id="projects"
    >
      {/* 
        HEADER
      */}
      {/* <section className={appStyles.header}>
        <CarouselViewIcon
          onClick={handleToggleView.bind(this, "carousel")}
          className={cx({
            [appStyles.active]: currentView === "carousel",
          })}
        />
        <GridViewIcon
          onClick={handleToggleView.bind(this, "grid")}
          className={cx({
            [appStyles.active]: currentView === "grid",
          })}
        />
        <ListViewIcon
          onClick={handleToggleView.bind(this, "list")}
          className={cx(appStyles.listIcon, {
            [appStyles.active]: currentView === "list",
          })}
        />
      </section> */}

      {/* 
        CONTENT
      */}
      <section
        className={appStyles["content-cnt"]}
        ref={(el) => {
          if (!el) return;
          return contentCntRef;
        }}
      >
        {currentView === "carousel" ? (
          <Carousel carouselClassName={appStyles.carousel}>
            {projectsList?.map((project) => {
              return (
                <CarouselItem key={project?.name} carouselItemClassName="">
                  <ProjectBox {...project} />
                </CarouselItem>
              );
            })}
          </Carousel>
        ) : null}

        {currentView === "grid" ? (
          <section className={appStyles["projects-grid-cnt"]}>
            {projectsList?.map((project) => {
              return <ProjectBox {...project} key={project?.name} />;
            })}
          </section>
        ) : null}
      </section>
    </main>
  );
};

export default Projects;
