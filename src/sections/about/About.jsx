import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import TextButton from "subComponents/textButton/TextButton";

// IMPORT OTHERS HERE //
import "./About.scss";
import {
  myPicture,
  lines,
  github,
  linkedin,
  mail,
  instagram,
  frontend,
  backend,
  halfAndroid,
  halfiOS,
} from "assets/Images";
import { GITHUB_URL, LINKEDIN_URL, MAIL_ID, INSTAGRAM_URL } from "utils/constants";
import myCV from "assets/pdfs/Paras-Agrawal_Full-Stack_CV.pdf";

const About = () => {
  // const downloadCV = () => {
  //   const link = window.document.createElement("a");
  //   link.setAttribute("href", myCV);
  //   // link.setAttribute("download", myCV);
  //   link.click();
  // };

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
            Hello! I&#39;m Paras Agrawal, a full-stack developer, and a guy slightly obsessed with
            code quality. I am currently working for a start-up, nference. I not only love to code
            also like to solve problems.
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
            btnCallback={() => window.open(myCV, "_none")}
            customBtnClass="download-resume"
          />
        </section>
      </section>

      <section className="about--bottom">
        <header>
          <div>what i do</div>
        </header>
        <section className="about-whatIDo">
          <section className="about-whatIDo-box frontend-container">
            <img src={frontend} alt="frontend" />
            <div>Front-end</div>
            <p>As a javascript developer, I have experience in React JS and Vue JS libraries.</p>
          </section>

          <section className="about-whatIDo-box backend-container">
            <img src={backend} alt="backend" className="backend" />
            <div>Back-end</div>
            <p>I&#39;m more back end focused and love to work with APIs in Node js and Python.</p>
          </section>

          <section className="about-whatIDo-box mobileapp-container">
            <div className="mobileapp">
              <img src={halfAndroid} alt="halfAndroid" className="halfAndroid" />
              <img src={halfiOS} alt="halfiOS" className="halfiOS" />
            </div>
            <div>Mobile App</div>
            <p>
              I love building mobile app using React Native library for android as well as iOS
              platform
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default About;
