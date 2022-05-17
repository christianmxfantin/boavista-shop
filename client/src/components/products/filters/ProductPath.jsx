import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProductPathTitle = styled(Typography)(({ theme }) => ({
  //styles
}));

const ProductPath = () => {
  return <ProductPathTitle>{`Hojas > Cuadriculadas`}</ProductPathTitle>;
};

export default ProductPath;
