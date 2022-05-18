import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Image } from "../ui/Image";

const HeroContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: `${theme.spacing(9)}`, //72px
}));

const Hero = () => {
  return (
    <HeroContainer>
      <Image
        name="hero"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </HeroContainer>
  );
};

export default Hero;
