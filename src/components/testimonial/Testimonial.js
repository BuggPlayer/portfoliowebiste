import React from "react";
import TestinonialCard from "./TestinonialCard";
import "./testimonial.css";
const Testimonial = () => {
  return (
    <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
      <div className="testimonial-container">
        <div className="testimonial-content-container">
          <h1 className="testimonial-content">CUSTOMER SAYS</h1>
          <h1 className="testimonial-content">Our satisfied customer says</h1>

          <p className="testimonial-content">
            Far far away, behind the word mountains, far from the countries
            Vokalia and
          </p>
          <p className="testimonial-content">
            Consonantia, there live the blind texts. Separated they live in
          </p>
          <div className="testimonial-card">
            {[1, 2, 3, 4].map((item) => (
              <TestinonialCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
