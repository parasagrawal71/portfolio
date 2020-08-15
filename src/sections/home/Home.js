import React, { useState, useEffect } from "react";
import Typical from "react-typical";

// IMPORT USER-DEFINED COMPONENTS HERE //
import ParticlesComp from "components/particlesComp/ParticlesComp";

// IMPORT OTHERS HERE //
import "./Home.scss";

const Home = () => {
  // STATE Variables
  const [enableTyping, setEnableTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableTyping(true);
    }, 2200);
    handleResize();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleResize = () => {
    const threshold = 600;
    const initialDiff = window.innerWidth > threshold ? 1 : -1;

    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      const currentDiff = width - threshold;
      if (currentDiff * initialDiff < 0) {
        // eslint-disable-next-line no-restricted-globals, no-undef
        location.reload();
      }
    });
  };

  const fullName = Array.from("Paras Agrawal");

  return (
    <main className="home" id="#">
      <section className="home-content">
        <div className="home-hi">Hi there!, I&#39;m</div>
        <div className="home-name">
          {fullName.map((char, index) => (
            <span key={index} style={{ animationDelay: `${0.3 + index / 10}s` }}>
              {char}
            </span>
          ))}
        </div>
        {enableTyping && (
          <section className="home-designation">
            <Typical
              steps={["Front-end", 2000, "Back-end", 2000, "Mobile App", 2000]}
              loop={Infinity}
              wrapper="span"
            />
            <span>Developer</span>
          </section>
        )}
      </section>
      <ParticlesComp className="particles" />
    </main>
  );
};

export default Home;
