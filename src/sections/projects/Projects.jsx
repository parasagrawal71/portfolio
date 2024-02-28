import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import ProjectBox from "components/projectBox/ProjectBox";

// IMPORT OTHERS HERE //
import { projectsList, techFilters } from "config/projects";
import { TextButton } from "libs";
import appStyles from "./Projects.module.scss";

const Projects = () => {
  // STATE VARIABLEs
  const [currentFilter, setCurrentFilter] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    filterProjects(currentFilter);
  }, [currentFilter]);

  function toggleFilter(tech) {
    if (tech) {
      if (currentFilter === tech.id) {
        setCurrentFilter("");
      } else {
        setCurrentFilter(tech.id);
      }
    } else {
      setCurrentFilter("");
    }
  }

  function filterProjects(currentSelectedTech) {
    let projects = projectsList;
    if (currentSelectedTech) {
      projects = projectsList.filter((p) => {
        const techListIds = p.techList.map((tech) => tech.id);
        return techListIds.includes(currentSelectedTech);
      });
    }
    setFilteredProjects(projects);
  }

  return (
    <main className={appStyles["main-cnt"]}>
      {/* ************ HEADER CONTAINER: Filters ************ */}
      <section className={appStyles["header-cnt"]}>
        {techFilters?.map((aTech) => {
          return (
            <TextButton
              key={aTech.id}
              btnText={aTech.displayName}
              customBtnClass={cx([
                appStyles.filter,
                {
                  [appStyles.active]: currentFilter === aTech.id,
                },
              ])}
              btnCallback={toggleFilter.bind(this, aTech)}
            />
          );
        })}
      </section>

      {/* ************ CONTENT CONTAINER: Projects ************ */}
      <section className={appStyles["content-cnt"]}>
        {filteredProjects?.map((project) => {
          return <ProjectBox key={project.name} project={project} />;
        })}
      </section>
    </main>
  );
};

export default Projects;
