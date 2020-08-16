import React, { useState, useEffect } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import TextButton from "subComponents/textButton/TextButton";

// IMPORT OTHERS HERE //
import "./Header.scss";
import { pLogo, hamBurger } from "assets/Images";

const Header = () => {
  const [enableShadow, setEnableShadow] = useState(false);

  useEffect(() => {
    const headerShadowListener = window.addEventListener("scroll", enableHeaderShadow);
    return () => {
      window.removeEventListener(headerShadowListener);
    };
  }, []);

  const enableHeaderShadow = () => {
    const positionFromTop = window.innerWidth > 600 ? 400 : 400;
    if (window.pageYOffset > positionFromTop) {
      setEnableShadow(true);
      return;
    }
    setEnableShadow(false);
  };

  const returnMenuIcon = () => {
    return <img src={hamBurger} alt="hamburger" />;
  };

  return (
    <main className={`header ${enableShadow ? "header-shadow" : "no-shadow"}`}>
      <section className="header--left">
        <img src={pLogo} alt="p-logo" />
      </section>

      <section className="header--right-web">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skillset">Skillset</a>
        <a href="#contact">Contact</a>
      </section>

      <section className="header--right-mobile">
        <TextButton
          btnText={null}
          iconOnRight={returnMenuIcon()}
          customBtnClass="header--right-mobile-btn"
          customDropdownClass="header--right-mobile-menu-items"
          onClickRequired
        >
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skillset">Skillset</a>
          <a href="#contact">Contact</a>
        </TextButton>
      </section>
    </main>
  );
};

export default Header;
