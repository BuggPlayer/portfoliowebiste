import React from "react";
import Navbar from "../navbar/Navbar";
import HeroImage from "../../assets/image/heroimage.png";
import "./Home.css";
import { Grid } from "@mui/material";
const Home = () => {
  return (
    <section className="home-hero">
      {/* <Navbar /> */}
      <Grid container className="home-hero">
        <Grid item md={6} xs={12} className="home-content-container">
          <div>
            <p className="content-title">Thoughts , On Internet</p>
            <p className="content-desc">
              we understand you , and put your
              <br /> thoughts on internet
            </p>
            <button className="our-vision-btn">Our Vision</button>
          </div>
        </Grid>
        <Grid item md={6} xs={12} className="home-image-container">
          <img className="hero-img" src={HeroImage} alt="" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
