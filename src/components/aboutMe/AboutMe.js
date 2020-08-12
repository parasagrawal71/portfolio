import React from "react";

// IMPORT OTHERS HERE //
import "./AboutMe.scss";
import profilePic from "assets/img/paras_formal.jpg";
import frontend from "assets/img/frontend.svg";

const AboutMe = () => {
  return (
    <main className="aboutMe" id="about">
      <section className="aboutMe--top">
        <header>ABOUT ME</header>
        <section className="aboutMe-descrp">
          <img src={profilePic} alt="profile" />
          <p>
            Hello! I&#39;m Paras Agrawal, a full stack developer, a Python enthusiast, and a guy
            slighty obsessed for code quality. Also I&#39;m a co-founder of pykod.com. I’m currently
            available for freelance work. If you have a project that you want to get started or
            think you need my help with something, then get in touch.
          </p>
        </section>
      </section>
      <section className="aboutMe--bottom">
        <header>what i do</header>
        <section className="aboutMe--bottom-whatIDo">
          <section className="aboutMe-whatIDo-box">
            <img src={frontend} alt="frontend" />
            <div>Front-End</div>
            <p>
              As a javascript developer, I have experience in HTML5 and CSS3 techniques working with
              jQuery or more advanced javascript MVC frameworks such as angular
            </p>
          </section>
          <section className="aboutMe-whatIDo-box">
            <img src={frontend} alt="frontend" />
            <div>Back-End</div>
            <p>
              As a javascript developer, I have experience in HTML5 and CSS3 techniques working with
              jQuery or more advanced javascript MVC frameworks such as angular
            </p>
          </section>
          <section className="aboutMe-whatIDo-box">
            <img src={frontend} alt="frontend" />
            <div>Mobile App</div>
            <p>
              As a javascript developer, I have experience in HTML5 and CSS3 techniques working with
              jQuery or more advanced javascript MVC frameworks such as angular
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default AboutMe;
