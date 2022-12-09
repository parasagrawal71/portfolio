import React, { useState } from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import animate from "utils/animate/Animate";
import {
  GithubIcon,
  WebsiteIcon,
  VideoIcon,
  JavaScriptIcon,
  ReactIcon,
  ReduxIcon,
  NodejsIcon,
  MongoDBIcon,
  Html5Icon,
  CSS3Icon,
  SassIcon,
  ExpressJsIcon,
  SocketIoIcon,
} from "assets/Images";

// IMPORT OTHERS HERE //
import appStyles from "./ProjectBox.module.scss";

const ProjectBox = React.forwardRef((props, ref) => {
  // PROPs
  const {
    name,
    duration,
    description,
    icon: Icon,
    iconSize,
    techList,
    externalUrls,
    overviewImg,
    mainCntClassname,
  } = props || {};

  // STATE VARIABLEs
  const [videoUrl, setVideoUrl] = useState(false);

  const openLinkInNewTab = (link, isVideo, index, e) => {
    animate.jumpUp({ targets: `#external-icon-${index}` });
    if (!isVideo) {
      e?.stopPropagation?.();
      window.open(link, "_blank");
    } else {
      toggleShowVideo();
    }
  };

  const iconMap = {
    github: GithubIcon,
    website: WebsiteIcon,
    demovideo: VideoIcon,
    javascript: JavaScriptIcon,
    react: ReactIcon,
    redux: ReduxIcon,
    nodejs: NodejsIcon,
    express: ExpressJsIcon,
    mongo: MongoDBIcon,
    html: Html5Icon,
    css: CSS3Icon,
    sass: SassIcon,
    websocket: SocketIoIcon,
  };

  function toggleShowVideo() {
    const videoLink = externalUrls?.filter?.((e) => e.isVideo)?.[0]?.url;
    if (videoUrl) {
      setVideoUrl(null);
    } else {
      setVideoUrl(videoLink);
    }
  }

  return (
    <section className={cx([appStyles["project-box-cnt"], "lineUp", mainCntClassname])} ref={ref}>
      {/*
       * HEADER
       */}
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
          {externalUrls?.map((external, i) => {
            const ExternalIcon = iconMap?.[external?.type];
            return ExternalIcon ? (
              <React.Fragment key={external?.type}>
                <ExternalIcon
                  onClick={openLinkInNewTab.bind(this, external?.url, external?.isVideo, i)}
                  style={{ fontSize: external?.iconSize }}
                  id={`external-icon-${i}`}
                />
              </React.Fragment>
            ) : null;
          })}
        </div>
      </div>

      {/*
       * Content Image
       */}
      <div className={appStyles["content-img-cnt"]}>
        {!videoUrl && overviewImg ? (
          <img src={overviewImg} alt={name} className={appStyles["overview-img"]} />
        ) : null}
        {videoUrl ? (
          <video className={appStyles["overview-video"]} controls autoPlay>
            <source src={videoUrl} type="video/webm" />
          </video>
        ) : null}
      </div>

      {/*
       * Description
       */}
      <div className={appStyles.descrp}>{description}</div>
      {techList?.length ? (
        <div className={appStyles["tech-list"]}>
          {techList?.map((tech) => {
            const SkillIcon = iconMap?.[tech?.id];
            return (
              <div className={appStyles.tech}>
                {iconMap?.[tech?.id] ? <SkillIcon /> : null}
                <div key={tech?.displayName}>{tech?.displayName}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
});

export default ProjectBox;
