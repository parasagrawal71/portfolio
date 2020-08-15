import React from "react";
import Particles from "react-particles-js";

// IMPORT USER-DEFINED COMPONENTS HERE //
import CharTransition from "../../components/charTransition/CharTransition";

// IMPORT OTHERS HERE //
import "./Home.scss";

const firstName = [
  { text: "P", key: 0 },
  { text: "a", key: 1 },
  { text: "r", key: 2 },
  { text: "a", key: 3 },
  { text: "s", key: 4 },
];

const lastName = [
  { text: "A", key: 6 },
  { text: "g", key: 7 },
  { text: "r", key: 8 },
  { text: "a", key: 9 },
  { text: "w", key: 10 },
  { text: "a", key: 11 },
  { text: "l", key: 12 },
];

const Home = () => {
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
