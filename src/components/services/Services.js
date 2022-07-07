import React from "react";

// import { ReactComponent as YourSvg } from "../../assets/image/service.svg";
import imgservice from "../../assets/image/istockphoto.jpg";
import Card from "../card/Card";
const Services = () => {
  return (
    <div
      style={{
        height: "100vh",
        // backgroundColor: "lightpink",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
        //   backgroundColor: "lightcyan",
          flex: 1,
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <img style={{ width: 400 }} src={imgservice} />
        </div>
        <div style={{ width: 500, marginTop: 40, marginLeft: 50 }}>
          <h1>Our Main Services</h1>
          <p style={{ lineHeight: 1.5, marginTop: 40 }}>
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic. A small river named Duden flows by
            their place and supplies it with the necessary regelialia. It is a
            paradisematic country.
          </p>
        </div>
      </div>
      <div
        style={{
        //   backgroundColor: "lightgrey",
          flex: 1,
          marginTop: 20,
          display: "flex",
          flexWrap: "wrap",
          marginRight:20
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Services;
