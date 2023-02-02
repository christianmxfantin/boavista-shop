import {
  CartItemContainer,
  CartItemTitle,
  CartItemPrice,
  CartItemQuantity,
  CartItemDeleteOne,
  CartItemDeleteAll,
} from "./CartItem.styles";

const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;

  return (
    <CartItemContainer>
      <CartItemTitle>{name}</CartItemTitle>
      <CartItemPrice>$ {price}</CartItemPrice>
      <CartItemQuantity>Cantidad: {quantity}</CartItemQuantity>
      <CartItemDeleteOne onClick={() => delOneFromCart(id, false)}>
        Eliminar Uno
      </CartItemDeleteOne>
      <CartItemDeleteAll onClick={() => delAllFromCart(id, true)}>
        Eliminar Todos
      </CartItemDeleteAll>
    </CartItemContainer>
  );
};

export default CartItem;
