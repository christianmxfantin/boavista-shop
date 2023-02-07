import { useTheme } from "@emotion/react";
import { PageNotFoundContainer, ImageTitle } from "./PageNotFound.styles";
import { PageNotFoundSvg as ImageSvg } from "../../components/ui/Svg";

const PageNotFound = () => {
  const theme = useTheme();

  return (
    <main>
      <PageNotFoundContainer>
        <ImageSvg
          style={{
            width: "180px",
            heigth: "180px",
            stroke: `${theme.palette.secondary[500]}`,
          }}
        />
        <ImageTitle component="div" variant="h5">
          Página no encontrada
        </ImageTitle>
      </PageNotFoundContainer>
    </main>
  );
};

export default PageNotFound;
