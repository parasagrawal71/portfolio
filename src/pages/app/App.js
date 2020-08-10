import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Home from "components/home/Home";
import AboutMe from "components/aboutMe/AboutMe";
import TechStack from "components/techStack/TechStack";

// IMPORT OTHERS HERE //
import "./App.scss";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Home />
      <AboutMe />
      <TechStack />
    </main>
  );
};

export default App;
