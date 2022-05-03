import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  Button as ProductAddToCart,
  Card as ProductCard,
  CardContent as ProductCardContent,
  CardMedia as ProductCardImage,
  Container as ProductCardData,
  Typography as ProductName,
  Typography as ProductPrice,
} from "@mui/material";
import { Icon as CartIcon } from "../ui/Icon";
import ProductImage from "../../images/product.jpg";

const ProductItem = ({ data, addToCart }) => {
  const theme = useTheme();
  let { id, name, price } = data;

  return (
    <ProductCard
      sx={{
        borderRadius: `${theme.spacing(0.5)}`,
      }}
    >
      <Link to={`/products/${id}`}>
        <ProductCardImage
          component="img"
          alt="prueba"
          height="140"
          image={ProductImage}
          sx={{ height: "180px" }}
        />
      </Link>
      <ProductCardContent sx={{ padding: `${theme.spacing(1)} !important` }}>
        <ProductName
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            color: `${theme.palette.primary[500]}`,
            fontWeight: 500,
            "&:hover": {
              color: `${theme.palette.secondary[500]}`,
              fontWeight: 600,
            },
          }}
        >
          {name}
        </ProductName>
        <ProductCardData
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px !important",
          }}
        >
          <ProductPrice
            variant="body1"
            sx={{ color: `${theme.palette.primary[500]}` }}
          >
            $ {price}
          </ProductPrice>

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
