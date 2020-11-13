import React from 'react'
import './Element.sass'

function Element(props) {
    // console.log(props);
    return (
        <div className='img-size'>
            <img alt={props.alt} src={props.src} />
        </div>
    );
};

export default Element;

// JSX:
//  style={{marginRight: spacing + 'em'}}


// used in Insta:
// li tabindex="-1"         
    // style="transform: translateX(600px);