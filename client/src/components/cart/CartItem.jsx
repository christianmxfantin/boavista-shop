import React from "react";
import { Container } from "@mui/material";

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <Container>
      <div>{name}</div>
      <div>$ {price}</div>
      <div>Cantidad: {quantity}</div>
      <button onClick={() => delOneFromCart(id)}>Eliminar Uno</button>
      <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button>
    </Container>
  );
};

export default CartItem;
