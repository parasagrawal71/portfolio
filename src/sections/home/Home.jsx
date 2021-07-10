import React, { useState, useEffect } from "react";
import Typical from "react-typical";

// IMPORT USER-DEFINED COMPONENTS HERE //
import ParticlesComponent from "components/particles/Particles";

// IMPORT OTHERS HERE //
import { fullName } from "config";
import { handleResize } from "utils/functions";
import { designations } from "config/home";
import appStyles from "./Home.module.scss";

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

  const getStepsForTypical = () => {
    const stepsArr = [];
    for (let i = 0; i < designations?.length; i += 1) {
      stepsArr.push(designations[i]);
      stepsArr.push(2000); // 2000ms after which typing starts again
    }

    return stepsArr;
  };

  return (
    <main className={appStyles["main-cnt"]} id="#">
      <section className={appStyles["home-content"]}>
        <div className={appStyles.greeting}>Hi there!, I&#39;m</div>
        <div className={appStyles.name}>
          {fullNameArray?.map((char, index) => (
            <span
              className={appStyles.character}
              key={index}
              style={{ animationDelay: `${0.3 + index / 10}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        {enableTyping && (
          <section className={appStyles.designation}>
            <Typical steps={getStepsForTypical()} loop={Infinity} wrapper="span" />
            <span>Developer</span>
          </section>
        )}
      </section>

      <ParticlesComponent className={appStyles.particles} />
    </main>
  );
};

export default Home;
