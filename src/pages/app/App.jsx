import React from "react";
import { Helmet } from "react-helmet";

// IMPORT USER-DEFINED COMPONENTS HERE //
import HeaderComponent from "components/header/Header";
import HomeSection from "sections/home/Home";
import AboutSection from "sections/about/About";
import SkillsetSection from "sections/skillset/Skillset";
// import ExperienceSection from "sections/experience/Experience";
// import ProjectsSection from "sections/projects/Projects";
// import ContactSection from "sections/contact/Contact";
import ScrollToTopBtn from "components/scrollToTopBtn/ScrollToTopBtn";
import FooterSection from "sections/footer/Footer";

// IMPORT OTHERS HERE //
import { fullName } from "config";
import "./App.scss";

const App = () => {
  return (
    <main className="app">
      <Helmet>
        <title>{fullName}</title>
      </Helmet>

      <HeaderComponent />
      <HomeSection />
      <AboutSection />
      <SkillsetSection />
      <FooterSection />

      <ScrollToTopBtn />
    </main>
  );
};

export default App;
