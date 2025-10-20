import React, { useEffect, useState } from "react";
import cx from "classnames";
import _ from "lodash";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { OfficeIcon } from "assets/Images";

// IMPORT OTHERS HERE //
import appStyles from "./ExperienceCard.module.scss";

const ExperienceCard = (props) => {
  // PROPS
  const { cntClassName, companyName, designation, duration, id, works } = props;

  // STATE VARIABLES
  const [groupedWorks, setGroupedWorks] = useState([]);

  useEffect(() => {
    groupWorks();
  }, [works]);

  function groupWorks() {
    const filteredWorks = works?.filter((work) => work.category?.show);
    const sortedWorks = filteredWorks.sort(
      (a, b) => (a.category?.sortOrder || 0) - (b.category?.sortOrder || 0)
    );
    const groupedWorksTemp = _.groupBy(sortedWorks, "category.displayName");
    setGroupedWorks(groupedWorksTemp);
  }

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
        {Object.keys(groupedWorks)?.map((group, ind) => {
          return (
            <dl className={appStyles.groupCnt} key={ind}>
              <dt className={appStyles.group}>{group}</dt>
              <ul className={appStyles.bulletPoints}>
                {groupedWorks[group]?.map((work, index) => {
                  return (
                    <li key={`${work?.companyName}-${index}`} className={appStyles.bulletPoint}>
                      {work?.bulletPoint}
                    </li>
                  );
                })}
              </ul>
            </dl>
          );
        })}
      </section>
    </section>
  );
};

export default ExperienceCard;
