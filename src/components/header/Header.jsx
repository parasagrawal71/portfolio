import React, { useState } from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { TextButton } from "libs";
// import { useEventListener } from "hooks";

// IMPORT OTHERS HERE //
import { useGlobalState } from "contexts/GlobalContextProvider";
import { HamBurgerIcon, BrandLogoIcon } from "assets/Images";
import { menuItems } from "config/header";
import GetInTouch from "components/getInTouch/GetInTouch";
import appStyles from "./Header.module.scss";

const Header = React.forwardRef((props, ref) => {
  // PROPs
  // const {} = props;

  // STATE VARIABLEs
  const [enableShadow, setEnableShadow] = useState(false);
  const { globalState, dispatchGlobalState } = useGlobalState();
  // useEventListener("scroll", enableHeaderShadow, document.getElementById("app"));

  // To enable/disable header shadow on scroll
  function enableHeaderShadow() {
    const positionFromTop = window.innerWidth > 600 ? 400 : 400;
    // pageYOffset not working
    if (document.getElementById("app").pageYOffset > positionFromTop) {
      setEnableShadow(true);
      return;
    }
    setEnableShadow(false);
  }

  const renderMenuItems = () => {
    return menuItems?.map((menuItem) => {
      return (
        <a
          key={menuItem?.name}
          href={menuItem?.href}
          className={cx(
            globalState?.activeSectionName === menuItem?.name ? appStyles.active : "",
            "lineUp"
          )}
          onClick={() => {
            dispatchGlobalState({ key: "activeSectionName", value: menuItem?.name });
          }}
        >
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
      ref={ref}
    >
      <section className={appStyles["header--left"]}>
        <BrandLogoIcon />
      </section>

      <section className={appStyles["header--mid-web"]}>{renderMenuItems()}</section>

      <section className={appStyles["header--right-web"]}>
        <GetInTouch className={appStyles.getInTouchBtn} />
      </section>

      <section className={appStyles["header--right-mobile"]}>
        <TextButton
          btnText={null}
          iconOnRight={<HamBurgerIcon className={appStyles.hamburgerIcon} />}
          customBtnClass={appStyles["header--right-mobile-btn"]}
          customDropdownClass={appStyles["header--right-mobile-menu-items"]}
          onClickRequired
        >
          {renderMenuItems()}
        </TextButton>
      </section>
    </main>
  );
});

export default Header;
