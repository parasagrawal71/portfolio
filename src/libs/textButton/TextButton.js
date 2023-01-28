import React, { useState, useEffect, useRef } from "react";

// IMPORT OTHERS HERE //
import "./TextButton.scss";

const TextButton = (props) => {
  // Props
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

  // Refs
  const btnRef = useRef();

  useEffect(() => {
    let closeDropdownListener;
    let clickOutsideListener;
    const app = document.getElementById("app");
    if (onClickRequired) {
      closeDropdownListener = app.addEventListener("scroll", () => setIsDropdownVisble(false));
      clickOutsideListener = window.addEventListener("click", checkClickOutside);
    }

    return () => {
      app.removeEventListener("scroll", closeDropdownListener);
      window.removeEventListener("click", clickOutsideListener);
    };
  }, [onClickRequired]);

  const checkClickOutside = (e) => {
    if (!btnRef?.current?.contains(e.target)) {
      setIsDropdownVisble(false);
    }
  };

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
      ref={btnRef}
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
