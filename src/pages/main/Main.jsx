import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import HeaderComponent from "components/header/Header";
import HomeSection from "sections/home/Home";
import AboutSection from "sections/about/About";
import SkillsetSection from "sections/skillset/Skillset";
// import ProjectsSection from "sections/projects/Projects";
// import ExperienceSection from "sections/experience/Experience";
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
      {/* <ProjectsSection /> */}
      <SkillsetSection />
      <FooterSection />

      <ScrollToTopBtnComponent />
    </>
  );
};

export default Main;
