import React from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { TextButton } from "libs";
import SectionHeaderComponent from "components/sectionHeader/SectionHeader";
import SocialProfiles from "components/socialProfiles/SocialProfiles";

// IMPORT OTHERS HERE //
import { aboutDescription, RESUME_URL, SELF_PICTURE_URL, socialProfiles, roles } from "config";
import appStyles from "./About.module.scss";

const About = () => {
  return (
    <main className={appStyles["about-section"]} id="about">
      <SectionHeaderComponent headerTitle="ABOUT" />

      <section className={appStyles["about-section--top"]}>
        <img src={SELF_PICTURE_URL} alt="Profile Pic" className={appStyles["profile-pic"]} />
        <section className={appStyles.description}>
          <p>{aboutDescription}</p>

          <section className={appStyles["social-resume-cnt"]}>
            <SocialProfiles />

            <TextButton
              btnText="download resume"
              btnCallback={() => {
                // window.open(RESUME_URL, "_none");
                window.open(RESUME_URL, "_blank");
              }}
              customBtnClass={appStyles["download-resume"]}
            />
          </section>
        </section>
      </section>

      <section className={appStyles["about-section--bottom"]}>
        <header>what i do</header>
        <section className={appStyles["about-whatIDo"]}>
          {roles?.map((role) => {
            const { Icon, icon1, icon2 } = role;
            return (
              <section
                key={role?.name}
                className={cx(appStyles["about-whatIDo-box"], "lineUp", {
                  [appStyles["frontend-container"]]: role?.name === "frontend",
                  [appStyles["backend-container"]]: role?.name === "backend",
                  [appStyles["mobileapp-container"]]: role?.name === "mobileapp",
                })}
              >
                {role?.name === "mobileapp" ? (
                  <div className={appStyles.mobileapp}>
                    <img src={icon1} alt="halfAndroid" className={appStyles.halfAndroid} />
                    <img src={icon2} alt="halfiOS" className={appStyles.halfiOS} />
                  </div>
                ) : (
                  <Icon
                    className={cx({
                      [appStyles.backend]: role?.name === "backend",
                    })}
                  />
                )}
                <div>{role?.displayName}</div>
                <p>{role?.description}</p>
              </section>
            );
          })}
        </section>
      </section>
    </main>
  );
};

export default About;
