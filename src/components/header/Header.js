import React from "react";

// IMPORT OTHERS HERE //
import "./Header.scss";

const Header = () => {
  return (
    <main className="header">
      <section className="header--left">Portfolio</section>
      <section className="header--right">
        <a href="#home">Home</a>
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
