import React from "react";
import { useTheme } from "@emotion/react";
import { Container, Typography } from "@mui/material";
import Shop from "../../images/about-shop.jpg";

const About = () => {
  const theme = useTheme();

  return (
    <>
      <Container
        sx={{
          padding: "0px !important",
          margin: "0px",
          height: "100vh",
          width: "100vw",
          display: "flex",
        }}
      >
        <Container>
          <Container>
            <Typography variant="h3">¿Quiénes somos?</Typography>
          </Container>
          <Container>
            <Typography>
              Más de diez años en el mercado, avalan nuestro compromiso de
              brindar un mejor servicio cada día
            </Typography>
          </Container>
        </Container>
        <Container
          sx={{
            padding: "0px !important",
            margin: "10px",
            height: "300px",
            width: "700px",
          }}
        >
          <img
            src={Shop}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              border: `5px solid ${theme.palette.primary.main}`,
              borderRadius: "30px",
              objectFit: "cover",
            }}
          />
        </Container>
      </Container>
    </>
  );
};

export default About;
