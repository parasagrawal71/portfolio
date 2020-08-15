import React from "react";

// IMPORT OTHERS HERE //
import "./Header.scss";
import { pLogo } from "assets/Images";

const Header = () => {
  return (
    <main className="header">
      <section className="header--left">
        <img src={pLogo} alt="p-logo" />
      </section>

      <section className="header--right">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skillset">Skillset</a>
        {/* <a href="#experience">Experience</a>
        <a href="#projects">Projects</a> */}
        <a href="#contact">Contact</a>
      </section>
    </main>
  );
};

export default Header;
