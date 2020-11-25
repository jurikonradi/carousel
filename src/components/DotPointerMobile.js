import React from "react";
import "./DotPointerMobile.sass";

function DotPointerMobile(props) {
  let className = "dot-pointer-m";
  if (!props.activeDot) {
    className += " dot-transparent-m";
  }
  return (
    // <div className="button-dot">
    <div className={className}></div>
    // </div>
  );
}

export default DotPointerMobile;

// return (
//   <button type="button" className="button-dot">
//     <div className={className}></div>
//   </button>
// );
