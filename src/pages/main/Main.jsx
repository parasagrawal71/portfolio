import React, { useState } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import HeaderComponent from "components/header/Header";
import HomeSection from "sections/home/Home";
import AboutSection from "sections/about/About";
import SkillsetSection from "sections/skillset/Skillset";
import ProjectsSection from "sections/projects/Projects";
import ExperienceSection from "sections/experience/Experience";
import ContactSection from "sections/contact/Contact";
import ScrollToTopBtnComponent from "components/scrollToTopBtn/ScrollToTopBtn";
import FooterSection from "sections/footer/Footer";

// IMPORT OTHERS HERE //
import { menuItems } from "config/header";

const Main = () => {
  // STATE VARIABLEs
  const [currentSectionName, setCurrentSectionName] = useState(getSectionNameByHash());

  const nameComponentMap = {
    Home: <HomeSection />,
    About: <AboutSection />,
    Experience: <ExperienceSection />,
    Projects: <ProjectsSection />,
    Skillset: <SkillsetSection />,
    Contact: <ContactSection />,
  };

  function getSectionNameByHash() {
    const { hash } = window.location || {};
    return menuItems?.filter((mI) => mI.hash === hash)?.[0]?.name;
  }

  return (
    <>
      <HeaderComponent
        currentSectionName={currentSectionName}
        setCurrentSectionName={setCurrentSectionName}
      />
      {nameComponentMap?.[currentSectionName]}
      {/* <FooterSection /> */}
      {/* <ScrollToTopBtnComponent /> */}
    </>
  );
};

export default Main;
