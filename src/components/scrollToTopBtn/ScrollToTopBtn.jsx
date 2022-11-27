import React, { useState, useEffect } from "react";

// IMPORT OTHERS HERE //
import { ScrollToTopIcon } from "assets/Images";
import appStyles from "./ScrollToTopBtn.module.scss";

const ScrollToTopBtn = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const scrollToTopListener = window.addEventListener("scroll", checkScrollToTop);

    return () => {
      window.removeEventListener("scroll", scrollToTopListener);
    };
  }, []);

  const checkScrollToTop = () => {
    if (window.pageYOffset > 800) {
      setShowScrollBtn(true);
      return;
    }
    setShowScrollBtn(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      role="button"
      className={appStyles["scrollToTop-btn-cnt"]}
      onClick={handleScrollToTop}
      onKeyDown={() => {}}
      tabIndex="0"
      style={{ display: showScrollBtn ? "flex" : "none" }}
    >
      <ScrollToTopIcon />
    </div>
  );
};

export default ScrollToTopBtn;
