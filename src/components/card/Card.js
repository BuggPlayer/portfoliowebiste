import React from "react";

const Card = () => {
  return (
    <div
      style={{
        backgroundColor: "GrayText",
        height: 250,
        width: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        border: 2,
        boxShadow: 10,
        elevation: 5,
        margin: 10,
      }}
    >
      <div style={{ width: 140 }}>
        <h1>icon</h1>
        <h3>VPS</h3>
        <h3>
          Even the all-powerful Pointing has no control about the blind texts
        </h3>
      </div>
    </div>
  );
};

export default Card;
