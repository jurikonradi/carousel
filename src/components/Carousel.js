// Written by Jurijs Konradi 2020

import React, { useState } from "react";
import "./Carousel.sass";
import AllElements from "./AllElements";
import ChevronRight from "./ChevronRight";
import ChevronLeft from "./ChevronLeft";
import settings from "./../settings/settings.js";
import imageSources from "./../settings/ImagesForCarousel";
import DotsNavigation from "./DotsNavigation";
import DotsNavigationMobile from "./DotsNavigationMobile";

let numberOfElements = imageSources.length;
let startX = 0;
let deltaX = 0;
const isTouchScreen = "ontouchstart" in document.documentElement;
let moveDuration = 0;
let elementIndex = 0;
let swipeTime;
let timerIsOn = false;
let timerID;
let deltaXAbsolute = 0;

if (isTouchScreen) {
  moveDuration = 0;
} else moveDuration = settings.moveDuration;

let elementWidth;
isTouchScreen
  ? (elementWidth = window.screen.width)
  : (elementWidth = settings.elementWidthDesktop);

function Carousel() {
  const [moveValue, setMoveValue] = useState(0);

  // let [mobileConsole, setMobileConsole] = useState(""); // for debugging

  const swipeTimer = () => {
    swipeTime += 200;
    timerID = setTimeout(swipeTimer, 200); //counts 0.2 seconds (200 ms)
  };
  const startSwipeTimer = () => {
    if (!timerIsOn) {
      timerIsOn = true;
      swipeTimer();
    }
  };
  const stopSwipeTimer = () => {
    clearTimeout(timerID);
    timerIsOn = false;
  };

  // Desktop, button pressed w/ mouse:
  const moveElementLeft = () => {
    setMoveValue(moveValue - elementWidth);
    elementIndex++;
  };
  const moveElementRight = () => {
    setMoveValue(moveValue + elementWidth);
    elementIndex--;
  };
  const goToElement = (number) => {
    setMoveValue(number * elementWidth * -1);
    elementIndex = number;
  };

  // Touch-screens, swiped:
  const onSwipeStart = (e) => {
    e.preventDefault();
    deltaX = 0; // if only touch, no swipe
    swipeTime = 0;
    startSwipeTimer();
    moveDuration = 0;
    startX = e.touches[0].clientX;
  };
  const onSwipeMove = (e) => {
    e.preventDefault();
    deltaX = startX - e.touches[0].clientX;
    setMoveValue((deltaX + elementIndex * elementWidth) * -1);
  };
  const onSwipeEnd = () => {
    stopSwipeTimer();
    moveDuration = settings.moveDuration;
    deltaXAbsolute = Math.abs(deltaX);
    if (
      deltaXAbsolute > elementWidth / 2 ||
      (swipeTime > 0 && swipeTime < settings.longSwipe && deltaXAbsolute > 30)
    ) {
      if (
        deltaX > 0 && // swipe left
        elementIndex !== numberOfElements - 1
      ) {
        elementIndex++;
      } else if (
        deltaX < 0 && // swipe right
        elementIndex !== 0
      ) {
        elementIndex--;
      }
    }
    setMoveValue(elementIndex * elementWidth * -1);
  };

  return (
    <div className="outer-container">
      <div
        className="carousel"
        // works, touch only inside element:
        onTouchStart={onSwipeStart}
        onTouchMove={onSwipeMove}
        onTouchEnd={onSwipeEnd}
        onTouchCancel={onSwipeEnd}
      >
        <AllElements
          // doesn't work if placed here:
          // onTouchStart={onSwipeStart}
          // onTouchMove={onSwipeMove}
          // onTouchEnd={onSwipeEnd}
          move={moveValue}
          moveDuration={moveDuration}
          imageSources={imageSources}
        />
        {isTouchScreen ? (
          <DotsNavigationMobile
            activeDot={elementIndex}
            numberOfDots={numberOfElements}
          />
        ) : (
          <DotsNavigation
            activeDot={elementIndex}
            numberOfDots={numberOfElements}
            goToElement={goToElement}
          />
        )}

        {/* show right chewron only on desktop: */}
        {!isTouchScreen &&
        moveValue >= (numberOfElements - 2) * elementWidth * -1 ? (
          <ChevronRight moveFunction={moveElementLeft} />
        ) : (
          <div></div>
        )}

        {/* show left chewron only on desktop: */}
        {!isTouchScreen && moveValue < 0 ? (
          <ChevronLeft moveFunction={moveElementRight} />
        ) : (
          <div></div>
        )}
      </div>
      <p>
        isTouchScreen: {isTouchScreen.toString()}, elementWidth: {elementWidth}
      </p>
    </div>
  );
}

export default Carousel;
