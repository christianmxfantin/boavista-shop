import { useEffect, useState } from "react";
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
import { addProductToCart } from "../../../reducers/cart";
import { getProductsImagesResponse } from "../../../api/productsImages";
import { addOneProduct } from "../../../reducers/products";

const ProductItem = ({ data }) => {
  let { id, name, price } = data;

  const theme = useTheme();
  const dispatch = useDispatch();
  const [productsImages, setProductsImages] = useState([{ url: "imagen.jpg" }]);

  useEffect(() => {
    const getData = async () => {
      try {
        const images = await getProductsImagesResponse();
        const productImage = images.data.filter(
          (image) => image.productId === data.id
        );

        setProductsImages(productImage);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [data.id]);

  const handleLinkClick = () => {
    dispatch(addOneProduct(productsImages));
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart(data));
  };

  return (
    <ProductCard>
      <Link to={`/products/${id}`} onClick={handleLinkClick}>
        <ProductCardImage
          component="img"
          alt="prueba"
          height="180"
          image={productsImages[0].url}
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
            onClick={handleAddToCart}
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
