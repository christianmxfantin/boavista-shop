import { useEffect } from "react";
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

const ProductDetails = () => {
  const { products, getProductById } = useProducts();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productsData } = useSelector((state) => state.products);
  // const productsData = [{ url: null }];

  let { id } = useParams();
  useEffect(() => {
    getProductById(id);
  }, []);

  const handleBack = () => {
    navigate("/products");
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart(products));
  };

  return (
    <ItemCard component={"main"}>
      <ItemTitle component={"article"}>
        <ItemTitleBack onClick={handleBack}>Volver al listado</ItemTitleBack>
      </ItemTitle>
      <ItemData component={"article"}>
        {productsData[0] === undefined ? (
          <ItemImagesContainer>
            <EmptyData iconName="images" title="imágenes" size={50} />
          </ItemImagesContainer>
        ) : (
          <ImageSlider productsImages={productsData} />
        )}
        <ItemInfoContainer>
          <ItemInfoTitle variant="h4">{products.name}</ItemInfoTitle>
          <ItemInfoPrice variant="h4">$ {products.price}</ItemInfoPrice>
          <ItemInfoStock>
            {!products.stock
              ? "Stock no disponible"
              : `Stock disponible: ${products.stock} ${
                  products.stock === 1 ? "unidad" : "unidades"
                }`}
          </ItemInfoStock>
          <NumericInput total={products.stock ? products.stock : 1200} />
          <ItemInfoAddToCart onClick={handleAddToCart}>
            Agregar al Carrito
          </ItemInfoAddToCart>
        </ItemInfoContainer>
      </ItemData>
    </ItemCard>
  );
};

export default ProductDetails;
