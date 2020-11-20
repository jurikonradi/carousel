import React from 'react'
import Element from './Element'
import './AllElements.sass'

function AllElements(props) {
    const style = {
        transform: `translateX(${props.move}px)`,
        transition: `transform ${props.moveDuration}s`,
        // transform: `translateY(0px)`,
    };


    // props.elementsNumber(imageSources.length);
    return (
        <div className='all-elements'
            style={style}
            // style={{ transform: `translateX(${props.move}px)` }}                      
        >
            {props.imageSources.map((element, i) => <Element src={element.src} alt={element.alt} key={i} />)}
        </div>
    )
};

export default AllElements;

// used in Insta:
// li tabindex="-1"         
    // style="transform: translateX(600px);
// <div role="button" 
    // -ms-touch-action: manipulation;
    // touch-action: manipulation;