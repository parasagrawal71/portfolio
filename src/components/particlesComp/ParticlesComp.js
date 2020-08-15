import React from "react";
import Particles from "react-particles-js";

const ParticlesComp = ({ className }) => {
  return (
    <Particles
      className={className}
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
  );
};

export default ParticlesComp;
