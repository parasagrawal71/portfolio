import React from "react";

// IMPORT OTHERS HERE //
import { lines } from "assets/Images";
import appStyles from "./SectionHeader.module.scss";

const SectionHeader = (props) => {
  // PROPS HERE
  const { headerTitle } = props;

  return (
    <header className={appStyles["main-header"]}>
      <div className={appStyles["main-header__name"]}>{headerTitle}</div>
      <img src={lines} alt="Lines" />
    </header>
  );
};

export default SectionHeader;
