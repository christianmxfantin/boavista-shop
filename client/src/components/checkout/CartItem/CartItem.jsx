import { useDispatch } from "react-redux";
import { useTheme } from "@emotion/react";
import {
  CartItemContainer,
  CartItemImage,
  CartItemData,
  CartItemTitle,
  CartItemPriceContainer,
  CartItemPrice,
  CartItemButtons,
} from "./CartItem.styles";
import { Image } from "../../ui/Image";
import { Icon } from "../../ui/Icon";
import ImagenPrueba from "../../../images/product.jpg";
import NumericInput from "../../layout/NumericInput/NumericInput";

import { removeAllFromCart } from "../../../reducers/cart";

const CartItem = ({ data, color, setCartData }) => {
  const { id, name, price } = data;
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(removeAllFromCart(id));
  };

  return (
    <CartItemContainer
      component={"article"}
      sx={{
        backgroundColor: color,
      }}
    >
      <CartItemImage>
        <Image
          name="Products"
          src={ImagenPrueba}
          alt="Imágen de Prueba"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: `${theme.spacing(1)}`, //8px
          }}
        />
      </CartItemImage>
      <CartItemData>
        <CartItemTitle variant="h6">{name}</CartItemTitle>
        <CartItemPriceContainer>
          <CartItemPrice variant="h6">$ {price}</CartItemPrice>
        </CartItemPriceContainer>
      </CartItemData>
      <CartItemButtons>
        <NumericInput
          type="center"
          total={999}
          data={{ formType: "cart", ...data }}
        />
        <Icon
          name="Delete-Data"
          size={50}
          color={theme.palette.error[500]}
          onClick={() => handleDeleteProduct(id)}
        />
      </CartItemButtons>
    </CartItemContainer>
  );
};

export default CartItem;
