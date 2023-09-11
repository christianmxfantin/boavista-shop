import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Button as ProductAddToCart } from "@mui/material";
import {
  ProductCard,
  ProductCardImage,
  ProductCardContent,
  ProductName,
  ProductCardData,
  ProductPrice,
} from "./ProductItem.styles";
import { Icon as CartIcon } from "../../ui/Icon";
import ProductImage from "../../../images/product.jpg";
import { addProductToCart } from "../../../reducers/cart";

const ProductItem = ({ data }) => {
  let { id, name, price } = data;

  const theme = useTheme();
  const dispatch = useDispatch();

  const handleClic = () => {
    dispatch(addProductToCart(data));
  };

  return (
    <ProductCard>
      <Link to={`/products/${id}`}>
        <ProductCardImage
          component="img"
          alt="prueba"
          height="180"
          image={ProductImage}
        />
      </Link>
      <ProductCardContent>
        <ProductName gutterBottom variant="subtitle1">
          {name}
        </ProductName>
        <ProductCardData>
          <ProductPrice variant="body1">$ {price}</ProductPrice>
          <ProductAddToCart
            size="small"
            data={data}
            onClick={handleClic}
            sx={{ marginRight: 0 }}
          >
            <CartIcon
              name="Cart"
              color={theme.palette.primary[500]}
              size={25}
            />
          </ProductAddToCart>
        </ProductCardData>
      </ProductCardContent>
    </ProductCard>
  );
};

export default ProductItem;
