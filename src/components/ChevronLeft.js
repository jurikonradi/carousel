import React from "react";
import "./Chevron.sass";

function ChevronLeft(props) {
  return (
    <button
      onMouseDown={props.moveFunction}
      type="button"
      className="chevron-button-left"
    >
      <div className="chevron chvr-left"></div>
    </button>
  );
}

export default ChevronLeft;
