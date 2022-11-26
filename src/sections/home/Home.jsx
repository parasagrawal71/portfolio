import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Blob from "components/blob/Blob";
import { TransparentButton } from "libs";
import SocialProfiles from "components/socialProfiles/SocialProfiles";

// IMPORT OTHERS HERE //
import { fullName, designation } from "config";
import appStyles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={appStyles["main-cnt"]} id="#">
      <section className={appStyles.content}>
        <div className={appStyles["content--left"]}>
          <div className={appStyles.line} />
          <SocialProfiles />
        </div>
        <div className={appStyles["content--right"]}>
          <div className={appStyles.name}>{fullName}</div>
          <div className={appStyles.role}>{designation}</div>
          <TransparentButton btnText="Download" className={appStyles.btnStyle} />
        </div>
      </section>

      <div className={appStyles.blob}>
        <Blob />
      </div>
    </main>
  );
};

export default Home;
