import React from "react";
import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";
import Photo from "../../images/hero.jpg";

const Hero = () => {
  const theme = useTheme();

  return (
    <>
      <Container sx={{ padding: "0px !important", height: "", width: "" }}>
        <img
          src={Photo}
          alt=""
          style={{
            objectFit: "cover",
            objectPosition: "left top",
          }}
        />
      </Container>
    </>
  );
};

export default Hero;
