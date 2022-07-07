import React from "react";

const TestinonialCard = () => {
  return (
    <div style={{ width: 270, marginTop: 40, margin: 20 }}>
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 15,
        }}
      >
        <div style={{}}>
          <img
            style={{ width: 80, borderRadius: 100, marginLeft: 70, padding: 5 }}
            src="https://preview.colorlib.com/theme/cohost/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
          />
          <p style={{ textAlign: "center" }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.{" "}
          </p>
          <h2 style={{ textAlign: "center", padding: 10 }}>Mark web</h2>
          <p style={{ textAlign: "center" }}>software developer</p>
        </div>
      </div>
    </div>
  );
};

export default TestinonialCard;
