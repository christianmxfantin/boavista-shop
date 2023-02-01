import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Image } from "../ui/Image";

const HeroContainer = styled(Box)(() => ({
  textAlign: "center",
}));

const Hero = () => {
  return (
    <HeroContainer>
      <Image
        name="Hero"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </HeroContainer>
  );
};

export default Hero;
