import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Header from "components/header/Header";
import Home from "sections/home/Home";
import About from "sections/about/About";
import Skillset from "sections/skillset/Skillset";
// import Experience from "sections/experience/Experience";
// import Projects from "sections/projects/Projects";
// import Contact from "sections/contact/Contact";
import ScrollToTopBtn from "components/scrollToTopBtn/ScrollToTopBtn";
import Footer from "sections/footer/Footer";

// IMPORT OTHERS HERE //
import "./App.scss";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Home />
      <About />
      <Skillset />
      {/* <Contact /> */}
      <Footer />
      <ScrollToTopBtn />
    </main>
  );
};

export default App;
