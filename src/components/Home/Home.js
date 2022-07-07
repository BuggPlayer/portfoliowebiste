import React from "react";
import Navbar from "../navbar/Navbar";
import HeroImage from "../../assets/image/heroimage.png";
import "./Home.css";
const Home = () => {
  return (
    <section className="home-hero">
      <Navbar />

      <div
        style={{
          // backgroundColor: "green",
          height: "86vh",
          display: "flex",
          justifyContent: "space-between",
          padding: 30,
        }}
      >
        <div
          style={{
            // backgroundColor: "gray",
            flex: 1,
          }}
        >
          <div
            style={{
              // backgroundColor: "lightseagreen",
              display: "inline-block",
              marginTop: 90,
              marginLeft: 20,
            }}
          >
            <p style={{ fontSize: 40 }}>Thoughts , On Internet</p>
            <p style={{ marginTop: 50, fontSize: 30 }}>
              we understand you , and put your
              <br /> thoughts on internet
            </p>
            <button
              style={{
                width: 200,
                height: 40,
                borderRadius: 10,
                marginTop: 50,
                fontSize: 20,
                borderWidth: 0,
              }}
            >
              Our Vision
            </button>
          </div>
        </div>
        <div
          style={{
            // backgroundColor: "lightgreen",
            flex: 1,
            // alignItems: "center",
            // alignContent: "center",
            // display: "flex",
          }}
        >
          <img style={{ width: 420 }} src={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default Home;
