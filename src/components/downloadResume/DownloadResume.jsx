import React from "react";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { TransparentButton } from "libs";
import { RESUME_URL } from "config";
import appStyles from "./DownloadResume.module.scss";

const DownloadResume = (props) => {
  const { className = "" } = props;

  return (
    <TransparentButton
      btnText="View Resume"
      className={`${appStyles.btn} ${className}`}
      btnCallback={() => {
        window.open(RESUME_URL, "_blank");
      }}
    />
  );
};

export default DownloadResume;
