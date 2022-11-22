import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

// IMPORT OTHERS HERE //
import appStyles from "./Carousel.module.scss";

const Carousel = (props) => {
  // PROPs
  const { children, autoplay = false, autoplayTime = 3000 } = props;

  // STATE VARIABLEs
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // To handle autoplay
  useEffect(() => {
    let interval = null;
    if (autoplay) {
      interval = setInterval(() => {
        if (!paused) {
          updateIndex(activeIndex + 1);
        }
      }, autoplayTime);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // Function to update index of carousel item
  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  // Function to handle click on the previous button
  function handleClickOnPreviousButton() {
    updateIndex(activeIndex - 1);
  }

  // Function to handle click on the next button
  function handleClickOnNextButton() {
    updateIndex(activeIndex + 1);
  }

  // Function to handle click on the item number
  function handleClickOnItemNum(index) {
    updateIndex(index);
  }

  // Function to handle swipe left and swipe right
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <section
      {...swipeHandlers}
      className={appStyles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 
        Hidden carousel items
       */}
      <div className={appStyles.inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      {/* 
        Indicators
       */}
      <div className={appStyles.indicators}>
        {/* Previous button */}
        <button type="button" onClick={handleClickOnPreviousButton.bind(this)}>
          Prev
        </button>
        {/* All item numbers  */}
        {React.Children.map(children, (child, index) => {
          return (
            <button
              type="button"
              className={`${index === activeIndex ? appStyles.active : ""}`}
              onClick={handleClickOnItemNum.bind(this, index)}
            >
              {index + 1}
            </button>
          );
        })}
        {/* Next button */}
        <button type="button" onClick={handleClickOnNextButton.bind(this)}>
          Next
        </button>
      </div>
    </section>
  );
};

// Carousel item component
export const CarouselItem = ({ children, width, key }) => {
  return (
    <div key={key} className={appStyles["carousel-item"]} style={{ width }}>
      {children}
    </div>
  );
};

export default Carousel;

/**
 * Reference:
 * https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0
 */
