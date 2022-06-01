import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button as ProductAddToCart,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon as CartIcon } from "../ui/Icon";
import ProductImage from "../../images/product.jpg";

const ProductCard = styled(Card)(({ theme }) => ({
  borderRadius: `${theme.spacing(0.5)}`,
}));

const ProductCardImage = styled(CardMedia)(({ theme }) => ({
  //styles
}));

const ProductCardContent = styled(CardContent)(({ theme }) => ({
  padding: `${theme.spacing(1)} !important`,
}));

const ProductName = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary[500]}`,
  fontWeight: 500,
  "&:hover": {
    color: `${theme.palette.secondary[500]}`,
    fontWeight: 600,
  },
}));

const ProductCardData = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const ProductPrice = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary[500]}`,
}));

const ProductItem = ({ data, addToCart }) => {
  const theme = useTheme();
  let { id, name, price } = data;

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
        <ProductName gutterBottom variant="h6" component="div">
          {name}
        </ProductName>
        <ProductCardData>
          <ProductPrice variant="body1">$ {price}</ProductPrice>
          <ProductAddToCart
            size="small"
            data={data}
            onClick={() => addToCart(id)}
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
