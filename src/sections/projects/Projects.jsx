import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import ProjectBox from "components/projectBox/ProjectBox";
import { Carousel, CarouselItem } from "libs";
import { usePrevious } from "hooks";

// IMPORT OTHERS HERE //
import { CarouselViewIcon, GridViewIcon, ListViewIcon } from "assets/Images";
import { projectsList } from "config/projects";
import appStyles from "./Projects.module.scss";

const Projects = () => {
  // STATE VARIABLEs
  const [currentView, setCurrentView] = useState("carousel");
  const oldValueOfCurrentView = usePrevious(currentView);
  const [contentCntHeight, setContentCntHeight] = useState(0);
  const contentCntRef = useRef(null);

  function handleToggleView(view) {
    if (view === "carousel") {
      setCurrentView("carousel");
    } else if (view === "grid") {
      setCurrentView("grid");
    } else if (view === "list") {
      setCurrentView("list");
    }
  }

  useEffect(() => {
    if (oldValueOfCurrentView !== currentView) {
      // calculateCarouselParentHeight();
    }
  }, [currentView]);

  function calculateCarouselParentHeight(ele) {
    const carouselParentEle = ele || contentCntRef?.current;
    let parentHeight = 0;
    if (carouselParentEle) {
      const carouselParentBoundingBox = carouselParentEle?.getBoundingClientRect();
      const nodeStyle = window.getComputedStyle(carouselParentEle);
      let topPadding = nodeStyle?.getPropertyValue("padding-top")?.replace("px", "");
      topPadding = topPadding && typeof topPadding === "string" ? Number(topPadding) : 0;
      let bottomPadding = nodeStyle?.getPropertyValue("padding-bottom")?.replace("px", "");
      bottomPadding =
        bottomPadding && typeof bottomPadding === "string" ? Number(bottomPadding) : 0;
      parentHeight = (carouselParentBoundingBox?.height || 0) - topPadding - bottomPadding;
    }
    // console.log(`Calculated parentHeight: `, parentHeight);
    setContentCntHeight(parentHeight);
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
          calculateCarouselParentHeight(el);
          return contentCntRef;
        }}
      >
        {currentView === "carousel" ? (
          <Carousel parentCntHeight={contentCntHeight}>
            {projectsList?.map((project) => {
              return (
                <CarouselItem key={project?.name}>
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
