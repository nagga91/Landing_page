import React from "react";
import Slider from "nouislider";

function Sliders() {
  React.useEffect(() => {
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [0, 100],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
  });
  return (
    <div>
      
      <div className="slider slider-primary" id="sliderDouble" />
    </div>
  );
}

export default Sliders;