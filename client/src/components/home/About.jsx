import React from "react";
import { Container } from "@mui/material";
import PhotoBack from "../../images/about-back.jpg";
import Shop from "../../images/about-shop.jpg";

const About = () => {
  return (
    <>
      <Container>
        <Container>
          <img
            src={PhotoBack}
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "left top",
            }}
          />
        </Container>
        <Container>
          <img
            src={Shop}
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "left top",
            }}
          />
        </Container>
      </Container>
    </>
  );
};

export default About;
