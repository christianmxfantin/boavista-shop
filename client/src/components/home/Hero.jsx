import React from "react";
import HeroImage from "../../images/hero-image.jpg";

const Hero = () => {
  return (
    <img
      src={HeroImage}
      alt=""
      style={{
        padding: "0px !important",
        margin: "0px",
        width: "100%",
        objectFit: "cover",
      }}
    />
  );
};

export default Hero;
