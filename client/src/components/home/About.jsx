import React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Underline from "../ui/Underline";
import { Image } from "../ui/Image";

const AboutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: `${theme.spacing(1)} 0 ${theme.spacing(2)} 0`, //8px y 16px;
}));

const AboutData = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: `${theme.spacing(4)}`, //32px
}));

const AboutTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 500,
  color: `${theme.palette.primary[500]}`,
}));

const AboutInfo = styled(Typography)(({ theme }) => ({
  marginTop: `${theme.spacing(2.5)}`, //20px
  textAlign: "justify",
  color: `${theme.palette.primary[500]}`,
}));

const About = () => {
  const theme = useTheme();

  return (
    <AboutContainer>
      <AboutData>
        <AboutTitle variant="h3">Sobre Nosotros</AboutTitle>
        <Underline width={300} height={5} color={theme.palette.primary[500]} />
        <AboutInfo>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AboutInfo>
      </AboutData>

      <Image
        name="about"
        style={{
          padding: "0px !important",
          margin: "50px",
          width: "50%",
          height: "50%",
          borderRadius: `${theme.spacing(4)}`, //32px
          objectFit: "cover",
        }}
      />
    </AboutContainer>
  );
};

export default About;
