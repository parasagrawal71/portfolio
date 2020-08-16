import React, { useState, useEffect } from "react";

// IMPORT OTHERS HERE //
import "./TextButton.scss";

const TextButton = (props) => {
  const {
    btnText,
    btnCallback,
    iconOnRight,
    customBtnClass,
    customDropdownClass,
    customBtnStyle,
    children,
    onHoverRequired,
    onClickRequired,
  } = props;

  // STATE Variables
  const [isDropdownVisble, setIsDropdownVisble] = useState(false);

  useEffect(() => {
    const closeDropdownListener = window.addEventListener("scroll", () =>
      setIsDropdownVisble(false)
    );

    return () => {
      window.removeEventListener(closeDropdownListener);
    };
  }, []);

  return (
    <div
      role="button"
      onClick={() => {
        if (btnCallback) {
          btnCallback();
        }
        if (onClickRequired) {
          setIsDropdownVisble(!isDropdownVisble);
        }
      }}
      className={`text-button ${customBtnClass || ""}`}
      style={customBtnStyle}
      onKeyDown={() => {}}
      tabIndex="0"
    >
      {btnText}
      {iconOnRight}
      {onHoverRequired && (
        <div className={`dropdown-content dropdown-hover-content ${customDropdownClass || ""}`}>
          {children}
        </div>
      )}

      {onClickRequired && (
        <div
          className={`dropdown-content dropdown-click-content ${
            isDropdownVisble ? "visible" : "nonvisible"
          } ${customDropdownClass || ""}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default TextButton;
