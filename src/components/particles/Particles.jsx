import React from "react";
import Particles from "react-particles-js";
import cx from "classnames";

// IMPORT OTHERS HERE //
import appStyles from "./Particles.module.scss";

const ParticlesComponent = ({ className }) => {
  return (
    <Particles
      className={cx(appStyles["particles-cnt"], className)}
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

export default ParticlesComponent;
