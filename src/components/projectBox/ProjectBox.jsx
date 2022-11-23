import React, { useState } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import animate from "utils/animate/Animate";
import { GithubIcon, WebsiteIcon, VideoIcon } from "assets/Images";

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

  const typeIconMap = {
    github: GithubIcon,
    website: WebsiteIcon,
    demovideo: VideoIcon,
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
    <section className={`${appStyles["project-box-cnt"]} lineUp`} ref={ref}>
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
            const ExternalIcon = typeIconMap?.[external?.type];
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
      <div className={appStyles.descrp}>{description}</div>
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
    </section>
  );
});

export default ProjectBox;
