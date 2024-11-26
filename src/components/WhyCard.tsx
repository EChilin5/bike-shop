import React from "react";
import bike from "../image/rectangle-318.png";
import "./WhyCard.scss"

export const WhyCard = () => {
  return (
    <div className="why-card">
      <div className="why-card-image">
        <img src={bike} alt="bike image" width='360px' height='300px'/>
      </div>
      <div className="why-card-title">Expert Technicians</div>
      <div className="why-card-desc">
        Our skilled technicians have years of experience in the biking industry
        and are equipped with the latest tools and techniques to get your bike
        running smoothly and efficiently. From simple repairs to complex
        tune-ups, we've got you covered.
      </div>
    </div>
  );
};
