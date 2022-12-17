import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import ProjectBox from "components/projectBox/ProjectBox";
import { Carousel, CarouselItem } from "libs";
import { useCheckMobileScreen } from "hooks";

// IMPORT OTHERS HERE //
import { CarouselViewIcon, ListViewIcon } from "assets/Images";
import { projectsList } from "config/projects";
import appStyles from "./Projects.module.scss";

const Projects = () => {
  // STATE VARIABLEs
  const [currentView, setCurrentView] = useState("carousel");
  const [isViewOptions, setIsViewOptions] = useState(false);
  const contentCntRef = useRef(null);
  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    if (isMobile) {
      setCurrentView("list");
      setIsViewOptions(false);
    }
    if (!isMobile) {
      setIsViewOptions(true);
    }
  }, []);

  function handleToggleView(view) {
    if (view === "carousel") {
      setCurrentView("carousel");
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
          [appStyles["list-view"]]: currentView === "list",
        },
      ])}
      id="projects"
    >
      {/* 
        HEADER
      */}
      {isViewOptions ? (
        <section className={appStyles.header}>
          <CarouselViewIcon
            onClick={handleToggleView.bind(this, "carousel")}
            className={cx({
              [appStyles.active]: currentView === "carousel",
            })}
          />
          <ListViewIcon
            onClick={handleToggleView.bind(this, "list")}
            className={cx(appStyles.listIcon, {
              [appStyles.active]: currentView === "list",
            })}
          />
        </section>
      ) : null}

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

        {currentView === "list" ? (
          <section className={appStyles["projects-list-cnt"]}>
            {projectsList?.map((project) => {
              return (
                <ProjectBox
                  {...project}
                  key={project?.name}
                  mainCntClassname={appStyles.listViewProjectBoxCnt}
                />
              );
            })}
          </section>
        ) : null}
      </section>
    </main>
  );
};

export default Projects;
