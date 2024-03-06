import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { TransparentButton } from "libs";
import { emailId } from "config";
import { emailBody, emailSubject } from "config/getInTouch";
import appStyles from "./GetInTouch.module.scss";

const GetInTouch = (props) => {
  const { className = "" } = props;

  return (
    <TransparentButton
      btnText="Get In Touch"
      className={`${appStyles.btn} ${className}`}
      isLink
      href={`mailto:${emailId}?subject=${emailSubject}&body=${emailBody}`}
    />
  );
};

export default GetInTouch;
