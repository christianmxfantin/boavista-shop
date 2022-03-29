import React from "react";
import { useTheme } from "@emotion/react";
import { Container, Typography } from "@mui/material";
import AboutImage from "../../images/about-image.jpg";

const About = () => {
  const theme = useTheme();

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          padding: "0px !important",
          margin: "0px",
          display: "flex",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            padding: "0px !important",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
              }}
            >
              ¿Quiénes somos?
            </Typography>
          </Container>
          <Container
            sx={{
              width: "600px",
            }}
          >
            <Typography
              sx={{
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Container>
        </Container>

        <Container
          sx={{
            padding: "0px !important",
            margin: "50px",
          }}
        >
          <img
            src={AboutImage}
            alt=""
            style={{
              width: "100%",
              height: "100%",
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
