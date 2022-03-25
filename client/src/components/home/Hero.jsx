import React from "react";
import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";
import Photo from "../../images/hero.jpg";

const Hero = () => {
  const theme = useTheme();

  return (
    <>
      <Container
        sx={{
          padding: "0px !important",
          margin: "0px",
          height: "100vh",
          maxWidth: "100%",
        }}
      >
        <img
          src={Photo}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Container>
    </>
  );
};

export default Hero;
