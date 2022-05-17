import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProductPriceCard = styled(Box)(({ theme }) => ({
  marginTop: `${theme.spacing(2)} !important`, //16px
}));

const ProductPriceTitle = styled(Typography)(({ theme }) => ({
  paddingLeft: `${theme.spacing(0.5)} !important`, //4px
  fontWeight: 600,
}));

const ProductPriceMinMax = styled(Box)(({ theme }) => ({
  paddingLeft: `${theme.spacing(0.5)} !important`, //4px
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
