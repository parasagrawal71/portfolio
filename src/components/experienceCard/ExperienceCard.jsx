import React from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { OfficeIcon } from "assets/Images";

// IMPORT OTHERS HERE //
import appStyles from "./ExperienceCard.module.scss";

const ExperienceCard = (props) => {
  // PROPS
  const { cntClassName, companyName, designation, duration } = props;

  return (
    <div className={cx([appStyles["main-cnt"], cntClassName])}>
      <div className={cx([appStyles.wave])} />
      <OfficeIcon className={appStyles.icon} />
      <section className={appStyles.content}>
        <div className={appStyles.companyName}>{companyName}</div>
        <div className={appStyles.designation}>{designation}</div>
        <div className={appStyles.duration}>{duration}</div>
      </section>
    </div>
  );
};

export default ExperienceCard;
