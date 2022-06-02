import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
// import { Image } from "../components/ui/Image";
import { ReactComponent as Image } from "../../images/page-not-found.svg";

const PageNotFoundContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5), //40px,
  display: "flex",
  flexDirection: "column",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

const ImageTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px,
  textAlign: "center",
  color: theme.palette.primary[500],
}));

const PageNotFound = () => {
  const theme = useTheme();

  return (
    <>
      <PageNotFoundContainer>
        <ImageContainer>
          {/* <Image
            name="CartEmpty"
            style={{
              width: "30%",
              heigth: "30%",
              objectFit: "cover",
            }}
          /> */}
          <Image
            style={{
              width: "30%",
              heigth: "30%",
              objectFit: "cover",
              stroke: `${theme.palette.primary[500]}`,
            }}
          />
        </ImageContainer>
        <ImageTitle component="div" variant="h5">
          Página no encontrada
        </ImageTitle>
      </PageNotFoundContainer>
    </>
  );
};

export default PageNotFound;
