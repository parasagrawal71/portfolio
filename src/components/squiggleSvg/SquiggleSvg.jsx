import React, { useEffect, useState } from "react";

// IMPORT OTHERS HERE //
import appStyles from "./SquiggleSvg.module.scss";

const SquiggleSvg = (props) => {
  // PROPS HERE
  const { customStyle } = props;

  // STATE VARIABLEs
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);

  // GLOBAL VARIABLEs
  const app = document.getElementById("app");
  const maskLength = 1050;
  const svgPathData =
    "M 702 266 C 682 424 795.0646 474.3075 716 600 C 599 786 769 821 688 988 c -139.4396 287.4866 134.8158 235 152.8432 385 C 858.8706 1523 605.4855 1528 685 1728 C 928 1943 719 1978.6667 743 2102 C 932 2340 751.6667 2421.3333 948 2445";

  useEffect(() => {
    handleSvgPathInitially();

    const onScrollListener = app.addEventListener("scroll", makeSvgAppear);

    return () => {
      app.removeEventListener("scroll", onScrollListener);
    };
  }, []);

  function handleSvgPathInitially() {
    // const path = document.getElementById("thePath");
    // const mask = document.getElementById("maskPath");
    // const pathLength = path.getTotalLength(); // todo: Use pathLength?
    setStrokeDashoffset(maskLength);
  }

  function makeSvgAppear() {
    const path = document.getElementById("thePath");
    // const mask = document.getElementById("maskPath");
    const pathLength = path?.getTotalLength();

    /**
     * App is the scrollable element
     */
    const scrollpercent =
      (document.body.scrollTop + app.scrollTop) / (app.scrollHeight - app.clientHeight);
    const draw = pathLength * scrollpercent;
    setStrokeDashoffset(maskLength - draw);
  }

  return (
    <svg
      width="198px"
      height="1458px"
      viewBox="0 0 198 1458"
      className={appStyles.svg}
      style={customStyle}
    >
      <defs>
        <linearGradient x1="50%" y1="7.06935325%" x2="50%" y2="100%" id="linearGradient-1">
          <stop stopColor="#DE1652" offset="0%" />
          <stop stopColor="#F37121" offset="50.2239948%" />
          <stop stopColor="#FBAB26" offset="100%" />
        </linearGradient>
        <mask id="theMask" maskUnits="userSpaceOnUse">
          <path
            id="maskPath"
            d={svgPathData}
            fill="none"
            fillRule="evenodd"
            strokeDasharray="1637"
            strokeDashoffset={strokeDashoffset}
            transform="translate(-646.000000, -825.000000)"
            strokeWidth="4"
            stroke="#fff"
          />
        </mask>
      </defs>
      <g id="content" mask="url(#theMask)">
        <path
          id="thePath"
          d={svgPathData}
          fill="none"
          fillRule="evenodd"
          strokeDasharray="12,16"
          transform="translate(-646.000000, -825.000000)"
          strokeWidth="4"
          stroke="url(#linearGradient-1)"
        />
      </g>
    </svg>
  );
};

export default SquiggleSvg;

/**
 * Reference: https://stackoverflow.com/q/64567563
 */
