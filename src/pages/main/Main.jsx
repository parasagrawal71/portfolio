import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import HeaderComponent from "components/header/Header";
import HomeSection from "sections/home/Home";
import AboutSection from "sections/about/About";
import SkillsetSection from "sections/skillset/Skillset";
// import ExperienceSection from "sections/experience/Experience";
// import ProjectsSection from "sections/projects/Projects";
// import ContactSection from "sections/contact/Contact";
import ScrollToTopBtnComponent from "components/scrollToTopBtn/ScrollToTopBtn";
import FooterSection from "sections/footer/Footer";

// IMPORT OTHERS HERE //

const Main = () => {
  return (
    <>
      <HeaderComponent />
      <HomeSection />
      <AboutSection />
      <SkillsetSection />
      <FooterSection />

      <ScrollToTopBtnComponent />
    </>
  );
};

export default Main;
