import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import TextButton from "subComponents/textButton/TextButton";

// IMPORT OTHERS HERE //
import "./About.scss";
import { myPicture, lines, github, linkedin, mail, instagram } from "assets/Images";
import { GITHUB_URL, LINKEDIN_URL, MAIL_ID, INSTAGRAM_URL } from "utils/constants";

const About = () => {
  return (
    <main className="about" id="about">
      <header className="about-header">
        <div>ABOUT</div>
        <img src={lines} alt="lines" />
      </header>

      <section className="about--top">
        <img src={myPicture} alt="profile-pic" className="profile-pic" />
        <section className="about-descrp">
          <p>
            Hello! I&#39;m Paras Agrawal, a full stack developer, a Python enthusiast, and a guy
            slighty obsessed for code quality.
          </p>
          <section>
            <a href={`mailto:${MAIL_ID}`} className="social-link">
              <img src={mail} alt="mail" />
            </a>
            <a href={GITHUB_URL} className="social-link" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" />
            </a>
            <a
              href={LINKEDIN_URL}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href={INSTAGRAM_URL}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </section>
          <TextButton
            btnText="download resume"
            btnCallback={() => {}}
            customBtnClass="download-resume"
          />
        </section>
      </section>

      {/* <section className="about--bottom">
        <header>what i do</header>
        <section className="about--bottom-whatIDo">
          <section className="about-whatIDo-box">
            <img src={frontend} alt="frontend" />
            <div>Front-End</div>
            <p>
              As a javascript developer, I have experience in HTML5 and CSS3 techniques working with
              jQuery or more advanced javascript MVC frameworks such as angular
            </p>
          </section>
          <section className="about-whatIDo-box">
            <img src={frontend} alt="frontend" />
            <div>Back-End</div>
            <p>
              As a javascript developer, I have experience in HTML5 and CSS3 techniques working with
              jQuery or more advanced javascript MVC frameworks such as angular
            </p>
          </section>
          <section className="about-whatIDo-box">
            <img src={frontend} alt="frontend" />
            <div>Mobile App</div>
            <p>
              As a javascript developer, I have experience in HTML5 and CSS3 techniques working with
              jQuery or more advanced javascript MVC frameworks such as angular
            </p>
          </section>
        </section>
      </section> */}
    </main>
  );
};

export default About;
