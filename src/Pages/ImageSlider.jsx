import React, { useEffect, useState } from "react";
import { images } from "./images";
import "./Slide.css";

export const ImageSlider = () => {
  const [slide, setSlide] = useState(0);

  const manualNav = (manual) => {
    setSlide(manual);
  };

  useEffect(() => {
    const nextSlide = () => {
      setSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    };
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  // timer transition

  const returnSlider = () => {
    return (
      <div className="img-slider">
        {images.map((slider, index) => (
          <div
            key={index}
            className={`slide ${index === slide ? "active" : ""}`}
          >
            <img src={slider.image} alt="slide-show" />
            <div className="manual-nav">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => manualNav(index)}
                  className={`nav-circle ${index === slide ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        ))}
        {/* Manual navigation buttons */}
      </div>
    );
  };

  return <>{returnSlider()}</>;
};
