import React from "react";
import Element from "./Element";
import ElementHtml from "./ElementHtml";
import "./AllElements.sass";

function AllElements(props) {
  const style = {
    transform: `translateX(${props.move}px)`,
    transition: `transform ${props.moveDuration}s`,
  };

  return (
    <div className="all-elements" style={style}>
      {props.imageSources.map(function (element, i) {
        if (element.type === "image") {
          return <Element src={element.src} alt={element.alt} key={i} />;
        } else if (element.type === "html") {
          return <ElementHtml src={element.src} key={i} />;
        }
      })}
    </div>
  );
}

export default AllElements;

// Insta:
// li tabindex="-1"
// style="transform: translateX(600px);
