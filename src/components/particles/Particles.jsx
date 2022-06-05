import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import cx from "classnames";

// IMPORT OTHERS HERE //
import appStyles from "./Particles.module.scss";

const ParticlesComponent = ({ className }) => {
  const particlesInit = async (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <Particles
      className={cx(appStyles["particles-cnt"], className)}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 60,
          },
          size: {
            value: 1.5,
          },
          color: {
            value: "#787878",
          },
          line_linked: {
            color: "#787878",
          },
          links: {
            color: "#787878",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 0.4,
          },
          move: {
            direction: "none",
            enable: true,
            random: false,
            speed: 1,
            straight: false,
            color: "#787878",
          },
          collisions: {
            enable: true,
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
