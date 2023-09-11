import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
} from "./ProductDetails.styles";
import NumericInput from "../../../components/layout/NumericInput/NumericInput";
import ImageSlider from "../../../components/layout/ImageSlider/ImageSlider";
import useProducts from "../../../hooks/api/useProducts";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../reducers/cart";

const ProductDetails = () => {
  const { products, getProductById } = useProducts();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();
  useEffect(() => {
    getProductById(id);
  }, []);

  const handleBack = () => {
    navigate(-1);
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
        <ImageSlider />
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
          <NumericInput total={products.stock} />
          <ItemInfoAddToCart onClick={handleAddToCart}>
            Agregar al Carrito
          </ItemInfoAddToCart>
        </ItemInfoContainer>
      </ItemData>
    </ItemCard>
  );
};

export default ProductDetails;
