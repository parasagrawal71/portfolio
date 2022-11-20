import React, { useState, useEffect } from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT OTHERS HERE //
import { fullName, designations } from "config";
import appStyles from "./Home.module.scss";

const Home = () => {
  // STATE Variables

  // Variables
  const fullNameArray = Array.from(fullName);

  useEffect(() => {}, []);

  return (
    <main className={appStyles["main-cnt"]} id="#">
      <div className={appStyles.name}>{fullName}</div>
      <br />
      <div className={appStyles.role}>Engineer</div>
    </main>
  );
};

export default Home;
