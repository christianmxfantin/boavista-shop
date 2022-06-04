import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { PageNotFoundSvg as ImageSvg } from "../components/ui/Svg";

const PageNotFoundContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8), //64px,
  textAlign: "center",
}));

const ImageTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px,
  color: theme.palette.primary[500],
}));

const PageNotFound = () => {
  const theme = useTheme();

  return (
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
  );
};

export default PageNotFound;
