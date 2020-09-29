import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Slider.scss";
// import i1 from "./Pics/1.svg";
// import i2 from "./Pics/2.svg";
// import i3 from "./Pics/3.svg";
// import i4 from "./Pics/4.svg";
// import i5 from "./Pics/5.svg";
import ImgComp from "./ImgComp";
function Slider() {
  //Creating an array for components
  let sliderArr = [
    <img src="images/pic2.jpg" alt="first" />,
    <img src="images/pic3.jpg" alt="second" />,

    <img src="images/svg-3.svg" />,

    <img src="images/svg-4.svg" />,

    <img src="images/svg-1.svg" />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    // setX(x + 100);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    //sliderArr.length was used so the input can be dynamic
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}

      <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
export default Slider;
