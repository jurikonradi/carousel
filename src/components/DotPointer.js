import React from "react";
import "./DotPointer.sass";

function DotPointer(props) {
  let className = "dot-pointer";
  if (!props.activeDot) {
    className += " dot-transparent";
  }
  return (
    <button type='button' className="button-dot">
      <div className={className}></div>
    </button> 
    // <div className={className}></div>
  );
}

export default DotPointer;
