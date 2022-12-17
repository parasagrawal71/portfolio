import React from "react";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { OfficeIcon } from "assets/Images";

// IMPORT OTHERS HERE //
import appStyles from "./ExperienceCard.module.scss";

const ExperienceCard = (props) => {
  // PROPS
  const { cntClassName, companyName, designation, duration, id, works } = props;

  return (
    <section className={cx([appStyles["main-cnt"], cntClassName])} id={id}>
      <section className={appStyles.front}>
        <div className={cx([appStyles.wave])} />
        <OfficeIcon className={appStyles.icon} />
        <div className={appStyles.content}>
          <div className={appStyles.companyName}>{companyName}</div>
          <div className={appStyles.designation}>{designation}</div>
          <div className={appStyles.duration}>{duration}</div>
        </div>
      </section>

      <section className={appStyles.overlay}>
        <ul className={appStyles.bulletPoints}>
          {works?.map((work, index) => {
            return (
              <li key={`${work?.companyName}-${index}`} className={appStyles.bulletPoint}>
                {work?.bulletPoint}
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default ExperienceCard;
