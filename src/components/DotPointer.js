import React from "react";
import "./DotPointer.sass";

function DotPointer(props) {
  let className = "dot-pointer";
  if (!props.activeDot) {
    className += " dot-transparent";
  }
  return (
    <button
      onClick={() => props.goToElement(props.number)}
      type="button"
      className="button-dot"
    >
      <div className={className}></div>
    </button>
  );
}

export default DotPointer;
