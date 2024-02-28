import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import animate from "utils/animate/Animate";
import { GithubIcon, WebsiteIcon, VideoIcon } from "assets/Images";

// IMPORT OTHERS HERE //
import appStyles from "./ProjectBox.module.scss";

const ProjectBox = React.forwardRef((props, ref) => {
  // PROPS HERE
  const { project } = props || {};
  const { overviewImg, name, externalUrls, techList } = project || {};
  const navigate = useNavigate();

  // STATE VARIABLEs
  const [videoUrl, setVideoUrl] = useState(null);

  function handleClickOnProject() {
    navigate(`/project?name=${name}`);
  }

  const iconMap = {
    github: GithubIcon,
    website: WebsiteIcon,
    demovideo: VideoIcon,
  };

  const openLinkInNewTab = (link, isVideo, index, e) => {
    animate.jumpUp({ targets: `#external-icon-${index}` });
    if (!isVideo) {
      e?.stopPropagation?.();
      window.open(link, "_blank");
    } else {
      e?.stopPropagation?.();
      toggleShowVideo();
    }
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
    <section
      className={appStyles["project-box-cnt"]}
      onClick={handleClickOnProject}
      role="button"
      onKeyDown={() => {}}
      tabIndex="0"
    >
      <div className={appStyles.header}>
        <div className={appStyles["header--left"]}>{name}</div>
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

      <div className={appStyles["content-img-cnt"]}>
        {!videoUrl && overviewImg ? (
          <img src={overviewImg} alt={name} className={appStyles["overview-img"]} />
        ) : null}
        {videoUrl ? (
          <video className={appStyles["overview-video"]} controls autoPlay>
            <source src={videoUrl} type="video/webm" />
          </video>
        ) : null}

        {techList?.length ? (
          <div className={appStyles["skills-outer-cnt"]}>
            <div className={appStyles["skills-cnt"]}>
              {techList?.slice(0, 5)?.map((tech) => {
                const { displayName } = tech || {};
                const SkillIcon = tech?.Icon || null;
                return (
                  <div key={displayName} className={appStyles.skill}>
                    <SkillIcon />
                    <div>{displayName}</div>
                  </div>
                );
              })}
            </div>
            <div className={appStyles.more}>More ...</div>
          </div>
        ) : null}
      </div>

      <div className={appStyles["banner-container"]}>
        <div className={appStyles.banner}>{name}</div>
      </div>
    </section>
  );
});

export default ProjectBox;
