import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CartItemContainer = styled(Box)(({ theme }) => ({
  margin: "16px",
  padding: "16px",
  width: "300px",
  border: `1px solid ${theme.palette.primary[500]}`,
  borderRadius: "8px",
}));

const CartItemTitle = styled(Typography)(({ theme }) => ({
  //styles
}));

const CartItemPrice = styled(Typography)(({ theme }) => ({
  //styles
}));

const CartItemQuantity = styled(Typography)(({ theme }) => ({
  //styles
}));

const CartItemDeleteOne = styled(Button)(({ theme }) => ({
  marginTop: "8px",
  marginRight: "8px",
  color: `${theme.palette.secondary.A100}`,
  backgroundColor: `${theme.palette.primary[500]}`,
}));

const CartItemDeleteAll = styled(Button)(({ theme }) => ({
  marginTop: "8px",
  color: `${theme.palette.secondary.A100}`,
  backgroundColor: `${theme.palette.primary[500]}`,
}));

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <CartItemContainer>
      <CartItemTitle>{name}</CartItemTitle>
      <CartItemPrice>$ {price}</CartItemPrice>
      <CartItemQuantity>Cantidad: {quantity}</CartItemQuantity>
      <CartItemDeleteOne onClick={() => delOneFromCart(id)}>
        Eliminar Uno
      </CartItemDeleteOne>
      <CartItemDeleteAll onClick={() => delAllFromCart(id, true)}>
        Eliminar Todos
      </CartItemDeleteAll>
    </CartItemContainer>
  );
};

export default CartItem;
