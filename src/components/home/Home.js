import React from "react";
import Particles from "react-particles-js";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT OTHERS HERE //
import "./Home.scss";

const Home = () => {
  return (
    <main className="home" id="#">
      <section className="home-content">
        <div className="home-hi">Hi there, I&#39;m</div>
        <div className="home-name">Paras Agrawal</div>
        <div className="home-designation">Full Stack Developer</div>
      </section>
      <Particles
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
