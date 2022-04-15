import { Container } from "@mui/material";
import React from "react";

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <Container sx={{ marginTop: "30px" }}>
      <div className="cart-item__container">
        <div>{name}</div>
        <div>$ {price}</div>
        <div>Cantidad: {quantity}</div>
        <button onClick={() => delOneFromCart(id)}>Eliminar Uno</button>
        <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button>
      </div>
    </Container>
  );
};

export default CartItem;
