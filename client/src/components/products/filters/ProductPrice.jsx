import React from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProductPriceCard = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px
}));

const ProductPriceTitle = styled(Typography)(() => ({
  fontWeight: 600,
}));

const ProductPriceContainer = styled(Box)(() => ({
  display: "flex",
}));

const ProductPriceInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    padding: theme.spacing(1), //8px
  },
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
          sx={{
            mr: 2,
            "& .MuiOutlinedInput-input": {
              p: 1, //8px
            },
          }} //16px
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
