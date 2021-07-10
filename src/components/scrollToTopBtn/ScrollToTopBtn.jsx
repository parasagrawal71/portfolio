import React, { useState, useEffect } from "react";

// IMPORT OTHERS HERE //
import "./ScrollToTopBtn.scss";
import { scrollToTop } from "assets/Images";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const scrollTopListener = window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener(scrollTopListener);
    };
  }, []);

  const checkScrollTop = () => {
    if (window.pageYOffset > 800) {
      setShowScroll(true);
      return;
    }
    setShowScroll(false);
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
