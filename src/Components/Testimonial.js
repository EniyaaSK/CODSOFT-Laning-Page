import React from "react";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Welcome to a world where every dish tells a story and every recipe inspires culinary creativity."
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img  alt="" />
        <p>
        
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>EXPERIENCE THE TASTE IN EACH SPOON</h2>
      </div>
    </div>
  );
};

export default Testimonial;
