import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import _ from "lodash";
import cx from "classnames";

// IMPORT OTHERS HERE //
import animate from "utils/animate/Animate";
import { NextBtnIcon, PreviousBtnIcon, ScrollMouse, ArrowKeys } from "assets/Images";
import { keyToCodeMap } from "utils/constants";
import { useEventListener } from "hooks";
import appStyles from "./Carousel.module.scss";

const Carousel = React.forwardRef((props, ref) => {
  // PROPs
  const {
    children,
    autoplay = false,
    autoplayTime = 3000,
    numOfActiveItems = 1,
    direction = "vertical",
    carouselClassName,
  } = props;

  // STATE VARIABLEs
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorCntHeight, setIndicatorCntHeight] = useState(0);
  const [paused, setPaused] = useState(false);
  useEventListener("keydown", handleKeyPress);
  const throttledHandleOnScroll = useCallback(
    _.throttle(handleOnScroll, 1200, { trailing: false }),
    []
  );
  const activeIndexRef = useRef(activeIndex);
  const indicatorsCntRef = useRef(null);
  useEventListener("wheel", throttledHandleOnScroll, document.getElementById("app"));

  // To handle autoplay
  useEffect(() => {
    let interval = null;
    if (autoplay) {
      interval = setInterval(() => {
        if (!paused) {
          updateIndex(activeIndexRef.current + 1);
        }
      }, autoplayTime);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  useEffect(() => {
    // To compute the height of the indicator container
    const indicatorsCntBoundingBox = indicatorsCntRef?.current?.getBoundingClientRect();
    setIndicatorCntHeight(indicatorsCntBoundingBox?.height || 0);
  }, []);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Function to update index of carousel item
  function updateIndex(newIndex) {
    const totalPages = Math.ceil(React.Children.count(children) / numOfActiveItems);
    if (newIndex < 0) {
      newIndex = totalPages - 1;
    } else if (newIndex >= totalPages) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  // Function to handle click on the previous button
  function handleClickOnPreviousButton() {
    updateIndex(activeIndexRef.current - 1);
  }

  // Function to handle click on the next button
  function handleClickOnNextButton() {
    updateIndex(activeIndexRef.current + 1);
  }

  // Function to handle click on the item number
  function handleClickOnItemNum(index) {
    updateIndex(index);
  }

  // Function to handle swipe left and swipe right
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndexRef.current + 1),
    onSwipedRight: () => updateIndex(activeIndexRef.current - 1),
  });

  // Function to handle key press
  function handleKeyPress(e) {
    if (e?.keyCode === keyToCodeMap.LEFT_ARROW) {
      handleClickOnPreviousButton();
    } else if (e?.keyCode === keyToCodeMap.RIGHT_ARROW) {
      handleClickOnNextButton();
    } else if (e?.keyCode === keyToCodeMap.UP_ARROW) {
      handleClickOnNextButton();
    } else if (e?.keyCode === keyToCodeMap.DOWN_ARROW) {
      handleClickOnPreviousButton();
    }
  }

  // Function to handle scroll up and scroll down events
  function handleOnScroll(e) {
    if (e?.wheelDelta > 0) {
      // SCROLL UP
      // console.log(`file: Carousel.jsx ~ handleOnScroll ~ scroll up`);
      handleClickOnPreviousButton();
    } else {
      // SCROLL DOWN
      // console.log(`file: Carousel.jsx ~ handleOnScroll ~ scroll down`);
      handleClickOnNextButton();
    }
  }

  return (
    <>
      <section
        {...swipeHandlers}
        className={cx([
          direction === "horizontal"
            ? appStyles["carousel-horizontal"]
            : appStyles["carousel-vertical"],
          carouselClassName,
        ])}
        style={{ height: `calc(100% - ${indicatorCntHeight}px)` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* 
        Carousel items
       */}
        {direction === "horizontal" ? (
          <div
            className={`${appStyles["inner-horizontal"]} ${
              numOfActiveItems > 1 ? appStyles["multiple-active-items"] : ""
            }`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { width: `calc(100% / ${numOfActiveItems})` });
            })}
          </div>
        ) : (
          <div
            className={`${appStyles["inner-vertical"]} ${
              numOfActiveItems > 1 ? appStyles["multiple-active-items"] : ""
            }`}
            style={{
              transform: `translateY(-${activeIndex * 100}%)`,
            }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, {
                height: `calc(100% / ${numOfActiveItems})`,
                id: `carousel-item-${index}`,
                activeIndex,
              });
            })}
          </div>
        )}
      </section>

      {/* 
        Indicators
       */}
      <section className={appStyles.indicators} ref={indicatorsCntRef}>
        {/* Previous button */}
        {/* <button type="button" onClick={handleClickOnPreviousButton.bind(this)}>
         Prev
       </button> */}
        <PreviousBtnIcon
          className={appStyles.prevIcon}
          onClick={handleClickOnPreviousButton.bind(this)}
        />

        {/* All item numbers  */}
        {/* {React.Children.map(children, (child, index) => {
         return (
           <button
             type="button"
             className={`${index === activeIndex ? appStyles.active : ""}`}
             onClick={handleClickOnItemNum.bind(this, index)}
           >
             {index + 1}
           </button>
         );
       })} */}
        <span className={appStyles.activePage}>{activeIndex + 1}</span>
        <span>/</span>
        <span className={appStyles.totalPages}>
          {Math.ceil(React.Children.count(children) / numOfActiveItems)}
        </span>

        {/* Next button */}
        {/* <button type="button" onClick={handleClickOnNextButton.bind(this)}>
         Next
       </button> */}
        <NextBtnIcon className={appStyles.nextIcon} onClick={handleClickOnNextButton.bind(this)} />
      </section>

      <section className={appStyles.controls}>
        <div className={appStyles.arrowKeys}>
          <ArrowKeys />
          <div className={appStyles.text}>Press arrow keys</div>
        </div>
        <div className={appStyles.scroll}>
          <ScrollMouse />
          <div className={appStyles.text}>Scroll</div>
        </div>
      </section>
    </>
  );
});

// Carousel item component
export const CarouselItem = React.forwardRef(
  ({ children, width, height, id, activeIndex, carouselItemClassName }, ref) => {
    useEffect(() => {
      animate.scaleUp({ targets: document.getElementById(id) });
    }, [activeIndex]);

    return (
      <div
        className={cx([appStyles["carousel-item"], carouselItemClassName])}
        style={{ width, height }}
        ref={ref}
        id={id}
      >
        {children}
      </div>
    );
  }
);

export default Carousel;

/**
 * Reference:
 * https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0
 */
