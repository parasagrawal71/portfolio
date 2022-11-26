import React from "react";

import { socialProfiles } from "config";
import appStyles from "./SocialProfiles.module.scss";

const SocialProfiles = () => {
  return (
    <div className={appStyles["social-icons-cnt"]}>
      {socialProfiles?.map((social) => {
        const { Icon } = social;
        return (
          <a
            key={social?.name}
            href={social?.href}
            className={appStyles["social-link"]}
            target={social?.newTab && "_blank"}
            rel={social?.newTab && "noopener noreferrer"}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialProfiles;
