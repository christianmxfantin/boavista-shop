import { useTheme } from "@emotion/react";
import {
  AboutContainer,
  AboutData,
  AboutTitle,
  AboutInfoContainer,
} from "./About.styles";
import Underline from "../../ui/Underline";
import { Image } from "../../ui/Image";
import {
  Typography as AboutInfo1,
  Typography as AboutInfo2,
  Typography as AboutInfo3,
} from "@mui/material";

const About = () => {
  const theme = useTheme();

  return (
    <AboutContainer component={"section"}>
      <AboutData component={"article"}>
        <AboutTitle variant="h3">Sobre Nosotros</AboutTitle>
        <Underline width={300} height={5} color={theme.palette.primary[500]} />
        <AboutInfoContainer>
          <AboutInfo1 sx={{ textIndent: theme.spacing(2.5) }}>
            Somos una empresa familiar iniciada por inmigrantes de Cabo Verde.
            Nuestra historia comenzó hace varias décadas, cuando nuestros
            abuelos se establecieron en el actual barrio de Retiro de la Ciudad
            de Buenos Aires. Allí, comenzamos este hermoso emprendimiento, con
            el objetivo de proporcionarle a la comunidad, el acceso a una amplia
            variedad de productos.
          </AboutInfo1>
          <AboutInfo2 sx={{ textIndent: theme.spacing(2.5) }}>
            Desde entonces, nuestra tienda ha crecido y se ha convertido en un
            recurso invaluable para escuelas, negocios y organizaciones sin
            fines de lucro en todo el país.
          </AboutInfo2>
          <AboutInfo3 sx={{ textIndent: theme.spacing(2.5) }}>
            Esperamos poder seguir siendo parte de tu vida, y apoyando tu
            educación y creatividad como siempre lo hicimos.
          </AboutInfo3>
        </AboutInfoContainer>
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
