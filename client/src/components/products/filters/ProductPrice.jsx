import React from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProductPriceCard = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px
}));

const ProductPriceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

const ProductPriceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const ProductPriceInput = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(0.5), //4px,
}));

const ProductPrice = () => {
  return (
    <ProductPriceCard>
      <ProductPriceTitle>Precio</ProductPriceTitle>
      <ProductPriceContainer>
        <ProductPriceInput
          variant="outlined"
          placeholder="Mínimo"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <ProductPriceInput
          variant="outlined"
          placeholder="Máximo"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </ProductPriceContainer>
    </ProductPriceCard>
  );
};

export default ProductPrice;
