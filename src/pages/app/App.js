import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Home from "sections/home/Home";
import AboutMe from "sections/about/About";
import TechStack from "sections/skillset/Skillset";
import Experience from "sections/experience/Experience";
import Projects from "sections/projects/Projects";
import Contact from "sections/contact/Contact";
import ScrollToTopBtn from "components/scrollToTopBtn/ScrollToTopBtn";

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
      <ScrollToTopBtn />
    </main>
  );
};

export default App;
