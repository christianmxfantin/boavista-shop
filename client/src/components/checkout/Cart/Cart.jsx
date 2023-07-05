import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import {
  CartContainer,
  TotalContainer,
  TotalTitle,
  TotalPrice,
  ProductsContainer,
} from "./Cart.styles";
import CartItem from "../CartItem/CartItem";
import Underline from "../../ui/Underline";
import ButtonsContainer from "../../layout/ButtonsContainer/ButtonsContainer";

const Cart = ({ handleRight, setStepperData }) => {
  // const dispatch = useDispatch();
  let totalPrice = 0;
  const theme = useTheme();
  // para pedir data de CartItem
  // const [cartData, setCartData] = useState({});
  const { cart } = useSelector((state) => state);
  const productList = cart.productsList;

  const handleCleanCart = () => {
    //Vaciar Carrito
    console.log("Vaciar Carrito");
  };

  return (
    <CartContainer>
      <ProductsContainer>
        {cart.productsList.map((item, index) => {
          totalPrice += item.price;
          return (
            <CartItem
              key={index}
              data={item}
              color={index % 2 === 0 && theme.palette.secondary.A100}
              // setCartData={setCartData}
            />
          );
        })}
      </ProductsContainer>
      <Underline heigth={1} color={theme.palette.primary[500]} />
      <TotalContainer>
        <TotalTitle variant="h5">Total:</TotalTitle>
        <TotalPrice variant="h5">$ {totalPrice}</TotalPrice>
      </TotalContainer>
      <ButtonsContainer
        formType="cart"
        leftName="Vaciar Carrito"
        rightName="Continuar"
        onClickLeft={handleCleanCart}
        onClickRight={() => {
          setStepperData((prevData) => ({ ...prevData, cart: productList }));
          handleRight();
        }}
      />
    </CartContainer>
  );
};

export default Cart;
