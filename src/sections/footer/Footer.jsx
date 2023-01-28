import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { useCheckMobileScreen } from "hooks";

// IMPORT OTHERS HERE //
import { fullName } from "config";
import appStyles from "./Footer.module.scss";

const Footer = () => {
  // HOOKs
  const isMobile = useCheckMobileScreen();

  return !isMobile ? (
    <main className={appStyles["main-cnt"]}>
      <div className={appStyles["footer-content"]}>Developed by {fullName}</div>
    </main>
  ) : null;
};

export default Footer;
