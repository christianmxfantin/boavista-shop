import { useEffect, useState } from "react";
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
import { cleanProducts } from "../../../reducers/products";

const Cart = ({ formType, handleRight, setStepperData }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(cleanProducts());
    let calculatedTotalPrice = 0;
    Object.values(productList).forEach((item) => {
      calculatedTotalPrice =
        calculatedTotalPrice + parseFloat(item.price) * item.totalProduct;
    });
    setTotalPrice(calculatedTotalPrice);
  }, [productList]);

  const roundNumber = (number) => {
    const roundedNumber = number.toFixed(2);
    return parseFloat(roundedNumber);
  };

  const handleCleanCart = () => {
    dispatch(cleanCart());
  };

  return (
    <CartContainer>
      <ProductsContainer>
        {Object.values(productList).map((item, index) => {
          return (
            <CartItem
              key={index}
              data={item}
              color={index % 2 === 0 && theme.palette.secondary.A100}
            />
          );
        })}
      </ProductsContainer>
      <Underline heigth={1} color={theme.palette.primary[500]} />
      <TotalContainer>
        <TotalTitle variant="h5">Total:</TotalTitle>
        <TotalPrice variant="h5">$ {roundNumber(totalPrice)}</TotalPrice>
      </TotalContainer>
      <ButtonsContainer
        formType={formType}
        leftName="Vaciar Carrito"
        rightName="Continuar"
        onClickLeft={handleCleanCart}
        onClickRight={() => {
          setStepperData((prevData) => ({
            ...prevData,
            cart: { ...productList, totalPrice },
          }));
          handleRight();
        }}
      />
    </CartContainer>
  );
};

export default Cart;
