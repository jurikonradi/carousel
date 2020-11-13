import React from 'react'
import Element from './Element'
import './AllElements.sass'

// import Image01 from './../assets/images/img01.jpg'
// import Image02 from './../assets/images/img02.jpg'
// import Image03 from './../assets/images/img03.jpg'
// import Image04 from './../assets/images/img04.jpg'
// import Image05 from './../assets/images/img05.jpg'
// import Image06 from './../assets/images/img06.jpg'
// import Image07 from './../assets/images/img07.jpg'
// import Image08 from './../assets/images/img08.jpg'
// import Image09 from './../assets/images/img09.jpg'
// let imageSources = [
//     {
//         src: Image01,
//         alt: 'Photo by Andy Wallace on October 23, 2020.',
//     },
//     {
//         src: Image02,
//         alt: 'Photo by Andy Wallace on October 24, 2020.'
//     },
//     {
//         src: Image03,
//         alt: 'Photo by Andy Wallace on October 25, 2020.'
//     },
//     {
//         src: Image04,
//         alt: 'Photo by Andy Wallace on November 1, 2020.'
//     },
//     {
//         src: Image05,
//         alt: 'Photo by Andy Wallace on November 1, 2020.'
//     },
//     {
//         src: Image06,
//         alt: 'Photo by Andy Wallace on October 23, 2020.',
//     },
//     {
//         src: Image07,
//         alt: 'Photo by Andy Wallace on October 24, 2020.'
//     },
//     {
//         src: Image08,
//         alt: 'Photo by Andy Wallace on October 25, 2020.'
//     },
//     {
//         src: Image09,
//         alt: 'Photo by Andy Wallace on November 1, 2020.'
//     },
// ];


function AllElements(props) {
    // props.elementsNumber(imageSources.length);
    return (
        <div className='all-elements'
            style={{ transform: `translateX(${props.move}px)` }}            
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