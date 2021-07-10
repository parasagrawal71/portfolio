import React from "react";

// IMPORT OTHERS HERE //
import "./Skillset.scss";
import {
  lines,
  html5,
  css3,
  javascript,
  react,
  reactNative,
  redux,
  vuejs,
  nodejs,
  python,
  mongodb,
  git,
  linux,
  aws,
  api,
} from "assets/Images";

const Skillset = () => {
  const skillsetsArray = [
    {
      name: "HTML",
      icon: html5,
    },
    {
      name: "CSS",
      icon: css3,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "React Native",
      icon: reactNative,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Vue",
      icon: vuejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "API",
      icon: api,
    },
  ];

  return (
    <main className="skillset" id="skillset">
      <header className="skillset-header">
        <div>SKILLSET</div>
        <img src={lines} alt="lines" />
      </header>

      <section className="skillset-skills">
        {skillsetsArray?.map((skill) => {
          return (
            <div className="skillset-skill">
              <img src={skill?.icon} alt="html5" />
              <div>{skill?.name}</div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Skillset;
