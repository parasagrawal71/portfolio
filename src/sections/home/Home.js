import React from "react";
import Particles from "react-particles-js";

// IMPORT USER-DEFINED COMPONENTS HERE //
import CharTransition from "../../components/charTransition/CharTransition";

// IMPORT OTHERS HERE //
import "./Home.scss";

const Home = () => {
  const firstName = "Paras".split("");
  const lastName = "Agrawal".split("");

  return (
    <main className="home" id="#">
      <section className="home-content">
        <div className="home-hi">Hi there, I&#39;m</div>
        <div className="home-name-wrapper">
          <CharTransition charArray={firstName} />
          <div>&nbsp;</div>
          <CharTransition charArray={lastName} />
        </div>
        <div className="home-designation">Full Stack Developer</div>
      </section>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </main>
  );
};

export default Home;
