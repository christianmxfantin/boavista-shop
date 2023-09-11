// import { useState } from "react";
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

import { cleanCart } from "../../../reducers/cart";
import { useState } from "react";

const Cart = ({ formType, handleRight, setStepperData }) => {
  let totalPrice = 0;

  const theme = useTheme();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.cart);

  const [itemPrice, setItemPrice] = useState();
  console.log(itemPrice);
  const handleCleanCart = () => {
    dispatch(cleanCart());
  };

  return (
    <CartContainer>
      <ProductsContainer>
        {Object.values(productList).map((item, index) => {
          totalPrice += parseFloat(item.price);
          return (
            <CartItem
              key={index}
              data={item}
              color={index % 2 === 0 && theme.palette.secondary.A100}
              itemPrice={itemPrice}
              setItemPrice={setItemPrice}
            />
          );
        })}
      </ProductsContainer>
      <Underline heigth={1} color={theme.palette.primary[500]} />
      <TotalContainer>
        <TotalTitle variant="h5">Total:</TotalTitle>
        <TotalPrice variant="h5">$ {itemPrice}</TotalPrice>
      </TotalContainer>
      <ButtonsContainer
        formType={formType}
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
