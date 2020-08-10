import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Home from "components/home/Home";
import AboutMe from "components/aboutMe/AboutMe";
import TechStack from "components/techStack/TechStack";
import Experience from "components/experience/Experience";
import Projects from "components/projects/Projects";
import Contact from "components/contact/Contact";

// IMPORT OTHERS HERE //
import "./App.scss";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Home />
      <AboutMe />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;
