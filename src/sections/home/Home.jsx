import React, { useState, useEffect } from "react";
import Typical from "react-typical";

// IMPORT USER-DEFINED COMPONENTS HERE //
import ParticlesComponent from "components/particles/Particles";

// IMPORT OTHERS HERE //
import { fullName } from "config";
import "./Home.scss";
import { handleResize } from "utils/functions";

const Home = () => {
  // STATE Variables
  const [enableTyping, setEnableTyping] = useState(false);

  // Variables
  const fullNameArray = Array.from(fullName);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableTyping(true);
    }, 2200);
    handleResize();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="home" id="#">
      <section className="home-content">
        <div className="home-hi">Hi there!, I&#39;m</div>
        <div className="home-name">
          {fullNameArray?.map((char, index) => (
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
      <ParticlesComponent className="particles" />
    </main>
  );
};

export default Home;
