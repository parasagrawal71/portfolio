import React from "react";

// IMPORT OTHERS HERE //
import "./Header.scss";

const Header = () => {
  return (
    <main className="header">
      <section className="header--left">Portfolio</section>
      <section className="header--right">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#techStack">Tech Stack</a>
        <a href="#a">Experience</a>
        <a href="#a">Projects</a>
        <a href="#a">Contact</a>
      </section>
    </main>
  );
};

export default Header;
