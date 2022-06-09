import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProductDiscountCard = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4), //32px
}));

const ProductDiscountTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

const ProductDiscountData = styled(Box)(({ theme }) => ({
  //styles
}));

const ProductDiscount = () => {
  return (
    <ProductDiscountCard>
      <ProductDiscountTitle>Descuentos</ProductDiscountTitle>
      <ProductDiscountData>
        {/* COMPONENTE QUE GENERA LA DATA AUTOMATICAMENTE DESDE LA BD */}
        <Typography>5% OFF, 10% OFF, 20% OFF</Typography>
      </ProductDiscountData>
    </ProductDiscountCard>
  );
};

export default ProductDiscount;
