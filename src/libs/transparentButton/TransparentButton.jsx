import React from "react";

import appStyles from "./TransparentButton.module.scss";

const TransparentButton = (props) => {
  const { btnText = "", btnCallback, className = "", isLink = false, href } = props;

  return !isLink ? (
    <button className={`${appStyles.btn} ${className}`} type="button" onClick={btnCallback}>
      {btnText}
    </button>
  ) : (
    <a className={`${appStyles.btn} ${className}`} href={href}>
      {btnText}
    </a>
  );
};

export default TransparentButton;
