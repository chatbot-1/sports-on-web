import React, { useState } from "react";
import "./basic.css"
import front1 from"../../assets/foot.jpg"
import front2 from"../../assets/back.png"
import front3 from"../../assets/back1.jpg"
import front4 from"../../assets/back2.jpg"
import front5 from"../../assets/back3.jpg"

const Basic = () => {
  const [currentSlide, setCurrentSlider] = useState(0);

  return (
    <div className="home-slider">
      <div className="slider-container">
        <i class="fa-solid fa-arrow-left"></i>
        <i class="fa-solid fa-arrow-right"></i>

        <div className="slider-content curr-slide">

        </div>

      </div>
    </div>
  );
};

export default Basic;
