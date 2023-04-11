import { useNavigate, useLocation, useParams } from "react-router-dom";
// import { useTheme } from "@emotion/react";
import {
  ItemCard,
  ItemTitle,
  ItemTitleBack,
  ItemTitleCategories,
  ItemTitleShareContainer,
  ItemData,
  ItemInfoContainer,
  ItemInfoTitle,
  ItemInfoPrice,
  ItemInfoStock,
  ItemInfoAddToCart,
} from "./ProductDetails.styles";
import { Icon as ItemTitleShare } from "../../../components/ui/Icon";
import NumericInput from "../../../components/layout/NumericInput/NumericInput";
import ImageSlider from "../../../components/layout/ImageSlider/ImageSlider";
import { products } from "../../../components/products/productList";

const ProductDetails = () => {
  //ver si esta logueado para agregar al carrito
  let auth = true;

  // const theme = useTheme();
  const navigate = useNavigate();

  let { id } = useParams();
  let searchProduct = products.find((product) => product.id === Number(id));

  const handleClic = () => {
    if (!auth) {
      navigate("/login");
    }
    //aca poner la funcion true para agregar al carrito
  };

  return (
    <ItemCard component={"main"}>
      <ItemTitle component={"article"}>
        <ItemTitleBack>Volver al listado</ItemTitleBack>
        <ItemTitleCategories>Hojas - Cuadriculadas</ItemTitleCategories>
        <ItemTitleShareContainer>
          <ItemTitleShare name="Share" size={22} />
        </ItemTitleShareContainer>
      </ItemTitle>
      <ItemData component={"article"}>
        <ImageSlider />
        <ItemInfoContainer>
          <ItemInfoTitle variant="h4">{searchProduct.name}</ItemInfoTitle>
          <ItemInfoPrice variant="h4">$ {searchProduct.price}</ItemInfoPrice>
          <ItemInfoStock>
            <b>Stock disponible:</b> 1200 unidades
          </ItemInfoStock>
          <NumericInput total={searchProduct.stock} />
          <ItemInfoAddToCart onClick={handleClic}>
            Agregar al Carrito
          </ItemInfoAddToCart>
        </ItemInfoContainer>
      </ItemData>
    </ItemCard>
  );
};

export default ProductDetails;
