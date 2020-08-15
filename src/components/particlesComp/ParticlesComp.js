import React from "react";
import Particles from "react-particles-js";

// IMPORT OTHERS HERE //
import "./ParticlesComp.scss";

const ParticlesComp = ({ className }) => {
  return (
    <Particles
      className={`${className} particles-comp`}
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          color: {
            value: "#787878",
          },
          line_linked: {
            color: "#787878",
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
  );
};

export default ParticlesComp;
