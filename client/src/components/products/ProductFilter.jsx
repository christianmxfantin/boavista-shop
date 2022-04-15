import React from "react";
import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";

const ProductFilter = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        padding: `${theme.spacing(1)} !important`, //12px
        width: "30vw",
      }}
    >
      Filtros
    </Container>
  );
};

export default ProductFilter;
