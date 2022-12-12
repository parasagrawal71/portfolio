import React, { useState, useEffect } from "react";
import { Popover, Box } from "@material-ui/core";
import cx from "classnames";

// IMPORT USER-DEFINED COMPONENTS HERE //

// IMPORT OTHERS HERE
import appStyles from "./MouseOverPopover.module.scss";

export default function MouseOverPopover(props) {
  // PROPS HERE
  const { PopoverComponent, children, arrowPosition = "leftCenter" } = props;

  // STATE VARIABLEs
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const app = document.getElementById("app");
    const eventListener = app.addEventListener("scroll", handlePopoverClose);

    return () => {
      app.removeEventListener("scroll", eventListener);
    };
  }, []);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const arrowPositionClassMap = {
    leftCenter: appStyles.leftCenter,
    topCenter: appStyles.topCenter,
    bottomCenter: appStyles.bottomCenter,
  };

  return (
    <>
      {React.cloneElement(children, {
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose,
        "aria-owns": open ? "mouse-over-popover" : undefined,
        "aria-haspopup": "true",
      })}
      <Popover
        className={cx([appStyles.popover, arrowPositionClassMap[arrowPosition]])}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={
          ["topCenter", "leftCenter"].includes(arrowPosition)
            ? {
                vertical: "top",
                horizontal: "center",
              }
            : {
                vertical: "top",
                horizontal: "center",
              }
        }
        transformOrigin={
          ["topCenter", "leftCenter"].includes(arrowPosition)
            ? {
                vertical: "center",
                horizontal: "left",
              }
            : {
                vertical: "center",
                horizontal: "center",
              }
        }
        onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{ className: appStyles.paper }}
      >
        {["topCenter", "leftCenter"].includes(arrowPosition) ? (
          <Box className={appStyles.arrowPointer} />
        ) : null}
        {React.cloneElement(PopoverComponent, {
          className: cx([appStyles.popoverChildren, PopoverComponent.props.className]),
        })}
        {["bottomCenter"].includes(arrowPosition) ? (
          <Box className={appStyles.arrowPointer} />
        ) : null}
      </Popover>
    </>
  );
}
