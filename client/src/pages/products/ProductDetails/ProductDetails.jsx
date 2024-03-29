import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ItemCard,
  ItemTitle,
  ItemTitleBack,
  ItemData,
  ItemInfoContainer,
  ItemInfoTitle,
  ItemInfoPrice,
  ItemInfoStock,
  ItemInfoAddToCart,
  ItemImagesContainer,
} from "./ProductDetails.styles";
import NumericInput from "../../../components/layout/NumericInput/NumericInput";
import ImageSlider from "../../../components/layout/ImageSlider/ImageSlider";
import useProducts from "../../../hooks/api/useProducts";
import { addProductToCart } from "../../../reducers/cart";
import EmptyData from "../../../components/layout/EmptyData/EmptyData";
import { Grid } from "@mui/material";

const ProductDetails = () => {
  const { products, getProductById } = useProducts();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productsData } = useSelector((state) => state.products);

  const [quantity, setQuantity] = useState(0);

  let { id } = useParams();
  useEffect(() => {
    getProductById(id);
  }, []);

  const handleBack = () => {
    navigate("/products");
  };

  const handleAddToCart = () => {
    dispatch(
      addProductToCart({
        ...products,
        total: quantity,
        url: productsData[0].url,
      })
    );
  };

  return (
    <ItemCard component={"main"}>
      <ItemTitle component={"article"}>
        <ItemTitleBack onClick={handleBack}>Volver al listado</ItemTitleBack>
      </ItemTitle>
      <ItemData
        component={"article"}
        sx={{
          height: { md: "450px" },
          marginTop: { xs: "24px", md: "16px" },
        }}
      >
        <Grid container>
          {productsData[0] === undefined ? (
            <Grid item xs={12} md={6}>
              <ItemImagesContainer>
                <EmptyData iconName="images" title="imágenes" size={50} />
              </ItemImagesContainer>
            </Grid>
          ) : (
            <Grid item xs={12} md={6}>
              <ImageSlider productsImages={productsData} />
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <ItemInfoContainer
              sx={{
                height: { xs: "360px", md: "450px" },
                marginTop: { xs: "24px", md: "0px" },
              }}
            >
              <ItemInfoTitle variant="h4">{products.name}</ItemInfoTitle>
              <ItemInfoPrice variant="h4">$ {products.price}</ItemInfoPrice>
              <ItemInfoStock>
                {!products.stock
                  ? "Stock no disponible"
                  : `Stock disponible: ${products.stock} ${
                      products.stock === 1 ? "unidad" : "unidades"
                    }`}
              </ItemInfoStock>
              <NumericInput
                productQuantity={true}
                total={products.stock ? products.stock : 1200}
                setQuantity={setQuantity}
              />
              <ItemInfoAddToCart onClick={handleAddToCart}>
                Agregar al Carrito
              </ItemInfoAddToCart>
            </ItemInfoContainer>
          </Grid>
        </Grid>
      </ItemData>
    </ItemCard>
  );
};

export default ProductDetails;
