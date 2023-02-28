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
import { borderColor } from "@mui/system";

const CartItem = ({ data, color }) => {
  let { id, name, price } = data;
  const theme = useTheme();

  return (
    <CartItemContainer
      component={"article"}
      sx={{
        backgroundColor: color,
        // borderColor: color.borderColor && color.borderColor,
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
        <NumericInput type="center" />
        <Icon
          name="Delete-Product"
          size={50}
          color={theme.palette.error[500]}
        />
      </CartItemButtons>
    </CartItemContainer>
  );
};

export default CartItem;
