import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Image } from "../ui/Image";

const CartEmptyContainer = styled(Box)(({ theme }) => ({
  marginTop: `${theme.spacing(5)}`, //40px,
  display: "flex",
  flexDirection: "column",
}));

const CartEmptyImage = styled(Box)(({ theme }) => ({
  textAlign: "center",
}));

const CartEmptyTitle = styled(Typography)(({ theme }) => ({
  marginTop: `${theme.spacing(4)}`, //32px,
  textAlign: "center",
  color: `${theme.palette.grey[500]}`,
}));

const CartEmpty = () => {
  return (
    <CartEmptyContainer>
      <CartEmptyImage>
        <Image
          name="CartEmpty"
          style={{
            padding: "0px !important",
            margin: "0px",
            width: "30%",
            heigth: "30%",
            objectFit: "cover",
          }}
        />
      </CartEmptyImage>
      <CartEmptyTitle component="div" variant="h5">
        Todavía no hay productos por aquí
      </CartEmptyTitle>
    </CartEmptyContainer>
  );
};

export default CartEmpty;
