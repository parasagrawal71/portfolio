import React from "react";

// IMPORT OTHERS HERE //
import { fullName } from "config";
import appStyles from "./Footer.module.scss";

const Footer = () => {
  return (
    <main className={appStyles["main-cnt"]}>
      <div className={appStyles["footer-content"]}>Designed and Developed by {fullName}</div>
    </main>
  );
};

export default Footer;
