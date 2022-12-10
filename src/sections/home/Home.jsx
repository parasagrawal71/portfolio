import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import Blob from "components/blob/Blob";
import SocialProfiles from "components/socialProfiles/SocialProfiles";
import DownloadResume from "components/downloadResume/DownloadResume";

// IMPORT OTHERS HERE //
import { fullName, designation, shortDescription } from "config";
import appStyles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={appStyles["main-cnt"]} id="#">
      <div className={appStyles.blob}>
        <Blob />
      </div>

      <section className={appStyles.content}>
        <div className={appStyles["content--left"]}>
          <div className={appStyles.line} />
          <SocialProfiles />
        </div>
        <div className={appStyles["content--mid"]}>
          <div className={appStyles.name}>{fullName}</div>
          <div className={appStyles.role}>{designation}</div>
          <div className={appStyles.descrp}>{shortDescription}</div>
          <DownloadResume className={appStyles.btnStyle} />
        </div>
        {/* <div className={appStyles["content--right"]}></div> */}
      </section>
    </main>
  );
};

export default Home;
