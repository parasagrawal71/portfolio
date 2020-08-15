import React, { useState } from "react";

// IMPORT OTHERS HERE //
import "./ScrollToTopBtn.scss";
import { scrollToTop } from "assets/Images";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    const positionFromTop = 800;
    if (!showScroll && window.pageYOffset > positionFromTop) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= positionFromTop) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      role="button"
      className="scrollTop"
      onClick={scrollTop}
      onKeyDown={() => {}}
      tabIndex="0"
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    >
      <img src={scrollToTop} alt="scroll-to-top" />
    </div>
  );
};

export default ScrollArrow;
