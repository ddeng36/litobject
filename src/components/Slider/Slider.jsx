import React, { useState, useEffect } from "react";
import "./Slider.scss";
import slidersImg from "../../constants/slidersImg";
const Slider = () => {
  const data = [68.2, 62.8, 57.6, 53.2, 51.7, 48.2, 44.2];
  const data2 = [67.2, 60.9, 56.8, 53, 49.2, 46.1, 43.2];
  const data3 = [66.2, 59.8, 55.8, 52.2, 48.2, 45.2, 42.2];
  const data4 = [];

  const length = slidersImg.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  const style={
    transform: `translateY(-${currentSlide * 100}%)`,
  }
  return (
    <div className="slider">
      <div className="content">
        {slidersImg.map((item, index) => (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
            style={style}
          >
            <img src={item} alt="slider" className="slide__img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
