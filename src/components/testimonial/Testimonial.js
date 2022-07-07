import React from "react";
import TestinonialCard from "./TestinonialCard";

const Testimonial = () => {
  return (
    <div style={{ backgroundColor: "lightblue", height: "100vh" }}>
      <div
        style={{
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          paddingTop: 100,
        }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>CUSTOMER SAYS</h1>
          <h1 style={{ textAlign: "center" }}>Our satisfied customer says</h1>

          <p style={{ textAlign: "center", marginTop: 10 }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and
          </p>
          <p style={{ textAlign: "center" }}>
            Consonantia, there live the blind texts. Separated they live in
          </p>
          <div style={{ display: "flex" , marginTop:40 }}>
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
