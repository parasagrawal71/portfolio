import React from "react";

// IMPORT OTHERS HERE //
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <main className="aboutMe" id="about">
      <section className="aboutMe--top">
        <header>ABOUT ME</header>
        <p>description</p>
      </section>
      <section className="aboutMe--bottom">
        <div>Front-end</div>
        <div>Back-end</div>
        <div>App development</div>
      </section>
    </main>
  );
};

export default AboutMe;
