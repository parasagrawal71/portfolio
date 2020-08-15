import React from "react";
import Particles from "react-particles-js";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT OTHERS HERE //
import "./Home.scss";

const Home = () => {
  const fullName = Array.from("Paras Agrawal");
  const designation = Array.from("Full Stack Developer");

  return (
    <main className="home" id="#">
      <section className="home-content">
        <div className="home-hi">Hi there, I&#39;m</div>
        <div className="home-name">
          {fullName.map((char, index) => (
            <span key={index} style={{ animationDelay: `${0.3 + index / 10}s` }}>
              {char}
            </span>
          ))}
        </div>
        <div className="home-designation">{designation}</div>
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
