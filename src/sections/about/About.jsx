import React from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import TextButton from "subComponents/textButton/TextButton";
import SectionHeaderComponent from "components/sectionHeader/SectionHeader";

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
            <section className={appStyles["social-icons-cnt"]}>
              {socialProfiles?.map((social) => {
                return (
                  <a
                    key={social?.name}
                    href={social?.href}
                    className={appStyles["social-link"]}
                    target={social?.newTab && "_blank"}
                    rel={social?.newTab && "noopener noreferrer"}
                  >
                    <img src={social?.icon} alt={social?.name} />
                  </a>
                );
              })}
            </section>

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
                    <img src={role?.icon1} alt="halfAndroid" className={appStyles.halfAndroid} />
                    <img src={role?.icon2} alt="halfiOS" className={appStyles.halfiOS} />
                  </div>
                ) : (
                  <img
                    src={role?.icon}
                    alt={role?.name}
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
