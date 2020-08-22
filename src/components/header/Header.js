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
    // const activeMenuItemListener = window.addEventListener("scroll", checkActiveMenuItem);

    return () => {
      window.removeEventListener(headerShadowListener);
      // window.removeEventListener(activeMenuItemListener);
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

  // const checkActiveMenuItem = () => {
  //   const windowHeight = window.innerHeight;
  //   const positionFromTop = window.pageYOffset;
  //   if (positionFromTop < windowHeight) {
  //     // window.location.hash = "";
  //   } else if (positionFromTop > windowHeight && positionFromTop < 2 * windowHeight) {
  //     // window.location.hash = "#about";
  //   } else if (positionFromTop > 2 * windowHeight && positionFromTop < 3 * windowHeight) {
  //     // window.location.hash = "#skillset";
  //   } else if (positionFromTop > 3 * windowHeight) {
  //     // window.location.hash = "#contact";
  //   }
  // };

  // eslint-disable-next-line no-unused-vars
  const enableBorderOfMenuItem = (hash) => {
    // if (window.location.hash === hash) {
    //   return "border-bottom";
    // }
    // return "border-none";
  };

  const renderMenuIcon = () => {
    return <img src={hamBurger} alt="hamburger" />;
  };

  const renderMenuItems = () => {
    return (
      <>
        <a href="#" className={enableBorderOfMenuItem("")}>
          Home
        </a>
        <a href="#about" className={enableBorderOfMenuItem("#about")}>
          About
        </a>
        <a href="#projects" className={enableBorderOfMenuItem("#projects")}>
          Projects
        </a>
        <a href="#skillset" className={enableBorderOfMenuItem("#skillset")}>
          Skillset
        </a>
        <a href="#contact" className={enableBorderOfMenuItem("#contact")}>
          Contact
        </a>
      </>
    );
  };

  return (
    <main className={`header ${enableShadow ? "header-shadow" : "no-shadow"}`}>
      <section className="header--left">
        <img src={pLogo} alt="p-logo" />
      </section>

      <section className="header--right-web">{renderMenuItems()}</section>

      <section className="header--right-mobile">
        <TextButton
          btnText={null}
          iconOnRight={renderMenuIcon()}
          customBtnClass="header--right-mobile-btn"
          customDropdownClass="header--right-mobile-menu-items"
          onClickRequired
        >
          {renderMenuItems()}
        </TextButton>
      </section>
    </main>
  );
};

export default Header;
