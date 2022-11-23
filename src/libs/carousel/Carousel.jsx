import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import _ from "lodash";

// IMPORT OTHERS HERE //
import { NextBtnIcon, PreviousBtnIcon } from "assets/Images";
import { keyToCodeMap } from "utils/constants";
import { useEventListener } from "hooks";
import appStyles from "./Carousel.module.scss";

const Carousel = (props) => {
  // PROPs
  const {
    children,
    autoplay = false,
    autoplayTime = 3000,
    numOfActiveItems = 1,
    direction = "vertical",
    parentCntRef,
  } = props;

  // STATE VARIABLEs
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mainCntHeight, setMainCntHeight] = useState();
  useEventListener("keydown", handleKeyPress);
  const debouncedHandleOnScroll = useCallback(_.debounce(handleOnScroll, 50), [activeIndex]);
  const indicatorsCntRef = useRef(null);

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

  useEffect(() => {
    // To compute the height of the parent container when the direction is vertical
    if (direction === "vertical" && parentCntRef) {
      const parentCntEle = parentCntRef?.current;
      if (parentCntEle) {
        // Parent container
        const parentCntBoundingBox = parentCntEle?.getBoundingClientRect();
        const nodeStyle = window.getComputedStyle(parentCntEle);
        let topPadding = nodeStyle?.getPropertyValue("padding-top")?.replace("px", "");
        topPadding = topPadding && typeof topPadding === "string" ? Number(topPadding) : 0;
        let bottomPadding = nodeStyle?.getPropertyValue("padding-bottom")?.replace("px", "");
        bottomPadding =
          bottomPadding && typeof bottomPadding === "string" ? Number(bottomPadding) : 0;

        // Indicators container
        const indicatorsCntBoundingBox = indicatorsCntRef?.current?.getBoundingClientRect();
        setMainCntHeight(
          (parentCntBoundingBox?.height || 0) -
            topPadding -
            bottomPadding -
            (indicatorsCntBoundingBox?.height || 0)
        );
      }
    }
  }, [parentCntRef]);

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
    if (e.nativeEvent.wheelDelta > 0) {
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
        className={
          direction === "horizontal"
            ? appStyles["carousel-horizontal"]
            : appStyles["carousel-vertical"]
        }
        style={{ maxHeight: `${mainCntHeight}px` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onWheel={debouncedHandleOnScroll.bind(this)}
      >
        {/* 
        Carousel items
       */}
        {direction === "horizontal" ? (
          <div
            className={`${appStyles["inner-horizontal"]} ${
              numOfActiveItems > 1 ? appStyles["multiple-active-items"] : ""
            }`}
            style={{ transform: `translateX(-${activeIndex * (100 / numOfActiveItems)}%)` }}
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
              transform: `translateY(-${activeIndex * (mainCntHeight / numOfActiveItems)}px)`,
            }}
          >
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, {
                height: `calc(${mainCntHeight}px / ${numOfActiveItems})`,
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
        {`${activeIndex + 1} / ${React.Children.count(children)}`}

        {/* Next button */}
        {/* <button type="button" onClick={handleClickOnNextButton.bind(this)}>
         Next
       </button> */}
        <NextBtnIcon className={appStyles.nextIcon} onClick={handleClickOnNextButton.bind(this)} />
      </section>
    </>
  );
};

// Carousel item component
export const CarouselItem = ({ children, width, height }) => {
  return (
    <div className={appStyles["carousel-item"]} style={{ width, height }}>
      {children}
    </div>
  );
};

export default Carousel;

/**
 * Reference:
 * https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0
 */
