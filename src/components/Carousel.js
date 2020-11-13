import React, { useState } from 'react';
import './Carousel.sass'
import AllElements from './AllElements'
import ChevronRight from './ChevronRight';
import ChevronLeft from './ChevronLeft';
import elementWidth from './../settings/settings.js'
import imageSources from './../settings/ImagesForCarousel'

let numberOfElements = imageSources.length;

function Carousel() {
    const [moveValue, setMoveValue] = useState(0);
    const moveElementLeft = () => {
        setMoveValue(moveValue - elementWidth);  
    };
    const moveElementRight = () => {
        setMoveValue(moveValue + elementWidth);
    };

    return (
        <div className='outer-container'>
            <div className='carousel' >
                <AllElements 
                    move={moveValue} 
                    imageSources={imageSources}
                />
                <div className='chevrons'>
                    { moveValue >= 0 ?
                     <div></div> : <ChevronLeft moveFunction={moveElementRight}/> }
                    { moveValue < ((numberOfElements - 2) * elementWidth * -1) ? <div></div> : <ChevronRight moveFunction={moveElementLeft}/>  }                    
                </div>
            </div>

        </div>
    )
};

export default Carousel;


