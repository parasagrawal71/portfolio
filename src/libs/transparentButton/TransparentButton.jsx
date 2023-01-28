import React from "react";

import appStyles from "./TransparentButton.module.scss";

const TransparentButton = (props) => {
  const { btnText = "", btnCallback, className = "" } = props;

  return (
    <button className={`${appStyles.btn} ${className}`} type="button" onClick={btnCallback}>
      {btnText}
    </button>
  );
};

export default TransparentButton;
