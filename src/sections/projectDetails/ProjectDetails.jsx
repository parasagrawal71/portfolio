import React, { useEffect, useState } from "react";
import cx from "classnames";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

// todo: FIX for mobile screen
// IMPORT USER-DEFINED COMPONENTS HERE //
import {
  GithubIcon,
  Menu3x3Icon,
  NextItemIcon,
  PreviousItemIcon,
  WebsiteIcon,
} from "assets/Images";

// IMPORT OTHERS HERE //
import { projectsList } from "config/projects";
import { Button, SecondaryLoader } from "libs";
import appStyles from "./ProjectDetails.module.scss";

const ProjectDetails = React.forwardRef((props, ref) => {
  // HOOKS
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentProject, setCurrentProject] = useState({});
  const [showLoader, setShowLoader] = useState(true);
  const [disablePrevBtn, setDisablePrevBtn] = useState(false);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  useEffect(() => {
    updateCurrentProject();
  }, []);

  // PROPS HERE
  //   const {} = props || {};
  const { name, duration, description, techList, externalUrls, overviewImg } = currentProject || {};
  const videoUrl = externalUrls?.filter((e) => e.type === "demovideo")?.[0]?.url;

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 500);
  }, [showLoader]);

  function updateCurrentProject() {
    let currentProjectIndex = -1;
    const project = projectsList?.filter((p, pIndex) => {
      if (p.name === searchParams?.get("name")) {
        currentProjectIndex = pIndex;
      }
      return p.name === searchParams?.get("name");
    })?.[0];
    updateDisableState(currentProjectIndex);
    setCurrentProject(project);
  }

  function updateDisableState(projectIndex) {
    if (projectIndex === 0) {
      setDisablePrevBtn(true);
    } else {
      setDisablePrevBtn(false);
    }
    if (projectIndex === (projectsList?.length || 0) - 1) {
      setDisableNextBtn(true);
    } else {
      setDisableNextBtn(false);
    }
  }

  function handleClickOnMenu() {
    navigate("/#projects");
  }

  function handleClickOnPrevious() {
    if (disablePrevBtn) {
      return;
    }
    setShowLoader(true);
    let projectIndex = -1;
    projectsList?.map((p, pIndex) => {
      if (p.name === searchParams?.get("name")) {
        projectIndex = pIndex;
      }
      return p;
    });

    if (projectIndex > 0) {
      const newProjectIndex = projectIndex - 1;
      const project = projectsList.at(newProjectIndex);
      setCurrentProject(project);
      updateDisableState(newProjectIndex);
      setSearchParams(createSearchParams({ name: project?.name }).toString());
    }
  }

  function handleClickOnNext() {
    if (disableNextBtn) {
      return;
    }
    setShowLoader(true);
    let projectIndex = -1;
    projectsList?.map((p, pIndex) => {
      if (p.name === searchParams?.get("name")) {
        projectIndex = pIndex;
      }
      return p;
    });

    if (projectIndex < projectsList.length - 1) {
      const newProjectIndex = projectIndex + 1;
      const project = projectsList.at(newProjectIndex);
      setCurrentProject(project);
      updateDisableState(newProjectIndex);
      setSearchParams(createSearchParams({ name: project?.name }).toString());
    }
  }

  const openUrl = (type, event) => {
    const link = externalUrls?.filter((e) => e.type === type)?.[0]?.url;
    event?.stopPropagation?.();
    window.open(link, "_blank");
  };

  return (
    <section
      className={cx(appStyles["project-details-cnt"], {
        [appStyles.height100]: showLoader,
      })}
    >
      {showLoader ? (
        <div className={appStyles.loaderCnt}>
          <SecondaryLoader />
        </div>
      ) : (
        <>
          <Menu3x3Icon className={appStyles.menu3x3Icon} onClick={handleClickOnMenu} />
          <div className={appStyles.projectName}>{name}</div>
          <div className={appStyles.duration}>{duration}</div>
          <div className={appStyles.description}>{description}</div>

          <div className={appStyles["btns-cnt"]}>
            <div className={appStyles["btns-cnt--left"]}>
              <Button
                btnText="Visit website"
                customBtnClass={cx([appStyles.btn, appStyles.visitWebsite])}
                btnCallback={openUrl.bind(this, "website")}
                iconOnLeft={<WebsiteIcon />}
              />
            </div>
            <div className={appStyles["btns-cnt--right"]}>
              <Button
                btnText="GitHub"
                customBtnClass={cx([appStyles.btn, appStyles.github])}
                btnCallback={openUrl.bind(this, "github")}
                iconOnLeft={<GithubIcon />}
              />
            </div>
          </div>

          <div className={appStyles.demovideo}>
            <PreviousItemIcon
              className={cx([
                appStyles.previousIcon,
                {
                  [appStyles.disabled]: disablePrevBtn,
                },
              ])}
              onClick={handleClickOnPrevious}
            />
            {videoUrl ? (
              <video className={appStyles["overview-video"]} controls>
                <source src={videoUrl} type="video/webm" />
              </video>
            ) : null}

            {!videoUrl && overviewImg ? (
              <img src={overviewImg} alt={name} className={appStyles["overview-img"]} />
            ) : null}

            <NextItemIcon
              className={cx([
                appStyles.nextIcon,
                {
                  [appStyles.disabled]: disableNextBtn,
                },
              ])}
              onClick={handleClickOnNext}
            />
          </div>

          {techList?.length ? (
            <section className={appStyles["tech-list-cnt"]}>
              <div className={appStyles["tech-list-header"]}>Tech Stack</div>
              <div className={appStyles["tech-list"]}>
                {techList?.map((tech) => {
                  const { displayName } = tech || {};
                  const SkillIcon = tech?.Icon || null;
                  return (
                    <div key={displayName} className={appStyles.tech}>
                      <SkillIcon />
                      <div>{displayName}</div>
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}
        </>
      )}
    </section>
  );
});

export default ProjectDetails;
