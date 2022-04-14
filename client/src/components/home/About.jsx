import React from "react";
import { useTheme } from "@emotion/react";
import {
  Container as AboutContainer,
  Container as AboutData,
  Typography as AboutTitle,
  Typography as AboutInfo,
} from "@mui/material";
import Underline from "../ui/Underline";
import AboutImage from "../../images/about-image.jpg";

const About = () => {
  const theme = useTheme();

  return (
    <AboutContainer
      maxWidth="xl"
      sx={{
        padding: "0px !important",
        margin: "0px",
        display: "flex",
      }}
    >
      <AboutData
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "30px",
        }}
      >
        <AboutTitle
          variant="h3"
          sx={{
            color: `${theme.palette.primary.main}`,
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Sobre Nosotros
        </AboutTitle>
        <Underline width={300} height={5} color={theme.palette.primary.main} />
        <AboutInfo
          sx={{
            marginTop: "20px",
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AboutInfo>
      </AboutData>

      <img
        src={AboutImage}
        alt=""
        style={{
          padding: "0px !important",
          margin: "50px",
          width: "50%",
          height: "50%",
          borderRadius: "30px",
          objectFit: "cover",
        }}
      />
    </AboutContainer>
  );
};

export default About;