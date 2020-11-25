import React from "react";
import DotPointerMobile from "./DotPointerMobile";
import "./DotsNavigationMobile.sass";

function DotsNavigationMobile(props) {
  let dotsItems = [];
  let i;
  let activeDot = false;
  for (i = 0; i < props.numberOfDots; i++) {
    if (i === props.activeDot) {
      activeDot = true;
    }
    dotsItems.push(<DotPointerMobile activeDot={activeDot} key={i} />);
    activeDot = false;
  }

  return (
    <div className="dots-nav-container-m">
      <div className="dots-nav-m">{dotsItems}</div>
    </div>
  );
}

export default DotsNavigationMobile;
