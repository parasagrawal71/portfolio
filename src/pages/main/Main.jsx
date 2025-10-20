import React, { useEffect, useState } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import HeaderComponent from "components/header/Header";
import HomeSection from "sections/home/Home";
import AboutSection from "sections/about/About";
import SkillsetSection from "sections/skillset/Skillset";
import ProjectsSection from "sections/projects/Projects";
import ExperienceSection from "sections/experiences/Experiences";
import ContactSection from "sections/contact/Contact";
import ScrollToTopBtnComponent from "components/scrollToTopBtn/ScrollToTopBtn";
import FooterSection from "sections/footer/Footer";
import { useGlobalState } from "contexts/GlobalContextProvider";
import { Loader } from "libs";
import { createTheme, ThemeProvider } from "@material-ui/core";

// IMPORT OTHERS HERE //

const Main = () => {
  // STATE VARIABLEs
  const { globalState } = useGlobalState();
  const [isLoading, setIsLoading] = useState(true);
  const [prefersDarkMode] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const nameComponentMap = {
    Home: <HomeSection />,
    About: <AboutSection />,
    Experience: <ExperienceSection />,
    "Side Projects": <ProjectsSection />,
    Skillset: <SkillsetSection />,
    Contact: <ContactSection />,
  };

  return isLoading ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      {nameComponentMap?.[globalState?.activeSectionName]}
      {globalState?.activeSectionName === "Home" ? <FooterSection /> : null}
      <ScrollToTopBtnComponent />
    </ThemeProvider>
  );
};

export default Main;
