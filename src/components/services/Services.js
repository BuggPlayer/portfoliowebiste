import React from "react";
import Grid from "@mui/material/Grid";
import "./service.css";
// import { ReactComponent as YourSvg } from "../../assets/image/service.svg";
import imgservice from "../../assets/image/istockphoto.jpg";
import Card from "../card/Card";
const Services = () => {
  return (
    <div className="services">
      <Grid container>
        <Grid item md={6} xs={12}>
          <div className="services-intro-image">
            <img className="services-image" src={imgservice} alt="" />
          </div>
          <div className="services-content">
            <h1>Our Main Services</h1>
            <p className="services-content-desc">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic. A small river named Duden
              flows by their place and supplies it with the necessary
              regelialia. It is a paradisematic country.
            </p>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className="services-card">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
