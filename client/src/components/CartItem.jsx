import React from "react";

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;
  console.log(data);

  return (
    <>
      <div className="cart-item__container">
        <div>{name}</div>
        <div>{price}</div>
        <div>{quantity}</div>
        <button onClick={() => delOneFromCart(id)}>Eliminar Uno</button>
        <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button>
      </div>
    </>
  );
};

export default CartItem;
