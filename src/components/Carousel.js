import React, { useState } from 'react';
import './Carousel.sass'
import AllElements from './AllElements'
import ChevronRight from './ChevronRight';
import ChevronLeft from './ChevronLeft';
import settings from './../settings/settings.js'
import imageSources from './../settings/ImagesForCarousel'

let numberOfElements = imageSources.length;
let startX = 0;
let deltaX = 0;
const isTouchScreen = 'ontouchstart' in document.documentElement;
let moveDuration = 0;
let elementIndex = 0;
// let translateValue = 0;

if (isTouchScreen) {
    moveDuration = 0;
} else moveDuration = settings.moveDuration;

let elementWidth;
isTouchScreen ? elementWidth = window.screen.width : elementWidth = settings.elementWidthDesktop;

function Carousel() {
    const [moveValue, setMoveValue] = useState(0);

    let [mobileConsole, setMobileConsole] = useState('');

    // Desktop, mouse button pressed:
    const moveElementLeft = () => {
        setMoveValue(moveValue - elementWidth);
        setMobileConsole(mobileConsole +=
            ', move: ' + moveValue);
    };
    const moveElementRight = () => {
        setMoveValue(moveValue + elementWidth);
        setMobileConsole(mobileConsole +=
            ', move: ' + moveValue);
    };

    // Touch screens, swiped:
    const onSwipeStart = (e) => {
        e.preventDefault();
        moveDuration = 0;
        startX = e.touches[0].clientX;
        setMobileConsole(mobileConsole += 
            ', start: ' + startX +
            ', i(s): ' + elementIndex +
            ', m(s): ' + moveValue);
    };
    const onSwipeMove = (e) => {
        e.preventDefault();
        deltaX = startX - e.touches[0].clientX;
        setMoveValue( (deltaX + (elementIndex * elementWidth)) * -1 );
        // setMobileConsole(mobileConsole +=
        //     ', indx(m): ' + elementIndex );
        //     // ', start: ' + startX +
        //     ', P: ' + prevMoveValue +
        //     ', m: ' + moveValue +
        //     ', d: ' + deltaX);
    };
    const onSwipeEnd = () => {
        setMobileConsole(mobileConsole +=
            ', d(end): ' + deltaX);
            moveDuration = settings.moveDuration;
            if ( Math.abs(deltaX) > (elementWidth/2) ) {
                if ( deltaX > 0          // swipe left
                    && elementIndex !== numberOfElements-1 ) { 
                    elementIndex++;
                } else if ( deltaX < 0   // swipe right
                    && elementIndex !== 0 ) { 
                    elementIndex--;
                };
            };
            setMoveValue( elementIndex * elementWidth *-1 );
            setMobileConsole(mobileConsole += 
                ', m(e): ' + moveValue +
                ', i(e): ' + elementIndex);
    };

    return (
        <div className='outer-container'>
            <div className='carousel'
                // works, touch only inside element:
                onTouchStart={onSwipeStart} 
                onTouchMove={onSwipeMove}
                onTouchEnd={onSwipeEnd}
                onTouchCancel={onSwipeEnd}
            >
                <AllElements
                    // don't work here:
                    // onTouchStart={onSwipeStart} 
                    // onTouchMove={onSwipeMove}
                    // onTouchEnd={onSwipeEnd}
                    move={moveValue}
                    moveDuration={moveDuration}
                    imageSources={imageSources}
                />
                <div className='chevrons'>
                    {moveValue >= 0 ?
                        <div></div> : <ChevronLeft moveFunction={moveElementRight} />}
                    {moveValue <= ((numberOfElements - 1) * elementWidth * -1) ? <div></div> : <ChevronRight moveFunction={moveElementLeft} />}
                </div>
            </div>
            <p>isTouchScreen: {isTouchScreen.toString()}, elementWidth: {elementWidth}</p>
            <p>{mobileConsole}, m(r): {moveValue}</p>
        </div>
    )
};

export default Carousel;


