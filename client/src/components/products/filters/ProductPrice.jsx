import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProductPriceCard = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2), //16px
}));

const ProductPriceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

const ProductPriceMinMax = styled(Box)(({ theme }) => ({
  //styles
}));

const ProductPrice = () => {
  return (
    <ProductPriceCard>
      <ProductPriceTitle>Precio</ProductPriceTitle>
      <ProductPriceMinMax>Minimo - Maximo</ProductPriceMinMax>
    </ProductPriceCard>
  );
};

export default ProductPrice;
