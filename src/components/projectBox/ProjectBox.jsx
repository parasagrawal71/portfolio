import React from "react";
import {
  BsGithub as GithubIcon,
  BiLinkExternal as WebsiteIcon,
  BiVideo as VideoIcon,
} from "react-icons/all";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT OTHERS HERE //
import appStyles from "./ProjectBox.module.scss";

const ProjectBox = (props) => {
  const {
    name,
    duration,
    description,
    icon: Icon,
    iconSize,
    techList,
    externalUrls,
    overviewImg,
  } = props || {};

  const openLinkInNewTab = (link, e) => {
    e?.stopPropagation?.();
    window.open(link, "_blank");
  };

  const typeIconMap = {
    github: GithubIcon,
    website: WebsiteIcon,
    demovideo: VideoIcon,
  };

  return (
    <section className={`${appStyles["project-box-cnt"]} lineUp`}>
      <div className={appStyles.header}>
        <div className={appStyles["header--left"]}>
          <div className={appStyles["header--left-left"]}>
            {Icon ? (
              <span className={appStyles.icon}>
                <Icon style={{ fontSize: iconSize }} />
              </span>
            ) : null}
          </div>
          <div className={appStyles["header--left-right"]}>
            <span className={appStyles.name}>{name}</span>
            <span className={appStyles.duration}>{duration}</span>
          </div>
        </div>
        <div className={appStyles["header--right"]}>
          {externalUrls?.map((external) => {
            const ExternalIcon = typeIconMap?.[external?.type];
            return ExternalIcon ? (
              <React.Fragment key={external?.type}>
                <ExternalIcon
                  onClick={openLinkInNewTab.bind(this, external?.url)}
                  style={{ fontSize: external?.iconSize }}
                />
              </React.Fragment>
            ) : null;
          })}
        </div>
      </div>
      <div className={appStyles.content}>
        <div className={appStyles["content--top"]}>
          {overviewImg ? (
            <img src={overviewImg} alt={name} className={appStyles["overview-img"]} />
          ) : null}
          <div className={appStyles.descrp}>{description}</div>
        </div>
        {techList?.length ? (
          <div className={appStyles["tech-list"]}>
            {techList?.map((tech) => {
              return (
                <span key={tech} className={appStyles.tech}>
                  {tech}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectBox;
