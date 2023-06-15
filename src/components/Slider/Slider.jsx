import React, { useState, useEffect } from "react";
import "./Slider.scss";
import slidersImg from "../../constants/slidersImg";

const Slider = () => {
  const length = slidersImg.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);


  return (
    <div className="slider">
      <div className="content" id = "2">
        {slidersImg.map((item, index) => (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
          >
            <img
              src={item}
              alt="slider"
              className="slide__img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Slider;
