import React, { useState, useEffect } from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import TextButton from "subComponents/textButton/TextButton";

// IMPORT OTHERS HERE //
import { pLogo, hamBurger } from "assets/Images";
import { menuItems } from "config/header";
import appStyles from "./Header.module.scss";

const Header = () => {
  const [enableShadow, setEnableShadow] = useState(false);

  useEffect(() => {
    const headerShadowListener = window.addEventListener("scroll", enableHeaderShadow);

    return () => {
      window.removeEventListener("scroll", headerShadowListener);
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

  const renderMenuItems = () => {
    return menuItems?.map((menuItem) => {
      return (
        <a key={menuItem?.name} href={menuItem?.href}>
          {menuItem?.name}
        </a>
      );
    });
  };

  return (
    <main
      className={cx(appStyles.header, {
        [appStyles["header-shadow"]]: enableShadow,
        [appStyles["no-shadow"]]: !enableShadow,
      })}
    >
      <section className={appStyles["header--left"]}>
        <img src={pLogo} alt="P Logo" />
      </section>

      <section className={appStyles["header--right-web"]}>{renderMenuItems()}</section>

      <section className={appStyles["header--right-mobile"]}>
        <TextButton
          btnText={null}
          iconOnRight={<img src={hamBurger} alt="Menu" />}
          customBtnClass={appStyles["header--right-mobile-btn"]}
          customDropdownClass={appStyles["header--right-mobile-menu-items"]}
          onClickRequired
        >
          {renderMenuItems()}
        </TextButton>
      </section>
    </main>
  );
};

export default Header;
