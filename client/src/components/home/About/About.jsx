import { useTheme } from "@emotion/react";
import {
  AboutContainer,
  AboutData,
  AboutTitle,
  AboutInfo,
} from "./About.styles";
import Underline from "../../ui/Underline";
import { Image } from "../../ui/Image";

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
        name="About"
        style={{
          margin: theme.spacing(6), //48px,
          width: "50%",
          height: "50%",
          borderRadius: theme.spacing(4), //32px
          objectFit: "cover",
        }}
      />
    </AboutContainer>
  );
};

export default About;
