import React from "react";
// import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";
import HeroImage from "../../images/hero-image.jpg";

const Hero = () => {
  // const theme = useTheme();

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: "0px !important",
          margin: "0px",
        }}
      >
        <img
          src={HeroImage}
          alt=""
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Container>
    </>
  );
};

export default Hero;
