import React from "react";
import "./Element.sass";

function Element(props) {
  return (
    <div className="img-size">
      <img alt={props.alt} src={props.src} />
    </div>
  );
}

export default Element;

// JSX:
//  style={{marginRight: spacing + 'em'}}
