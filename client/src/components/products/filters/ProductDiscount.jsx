import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProductDiscountCard = styled(Box)(({ theme }) => ({
  marginTop: `${theme.spacing(2)} !important`, //16px
}));

const ProductDiscountTitle = styled(Typography)(({ theme }) => ({
  paddingLeft: `${theme.spacing(0.5)} !important`, //4px
  fontWeight: 600,
}));

const ProductDiscountData = styled(Box)(({ theme }) => ({
  paddingLeft: `${theme.spacing(0.5)} !important`, //4px
}));

const ProductDiscount = () => {
  return (
    <ProductDiscountCard>
      <ProductDiscountTitle>Descuentos</ProductDiscountTitle>
      <ProductDiscountData>
        {/* COMPONENTE QUE GENERA LA DATA AUTOMATICAMENTE DESDE LA BD */}
        5% OFF, 10% OFF, 20% OFF
      </ProductDiscountData>
    </ProductDiscountCard>
  );
};

export default ProductDiscount;
