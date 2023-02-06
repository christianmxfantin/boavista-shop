import { useNavigate } from "react-router-dom";
import {
  ItemCard,
  ItemTitle,
  ItemTitleBack,
  ItemTitleCategories,
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

const ProductDetails = () => {
  //ver si esta logueado para agregar al carrito
  let auth = true;

  const navigate = useNavigate();

  const handleClic = () => {
    if (!auth) {
      navigate("/login");
    }
    //aca poner la funcion true para agregar al carrito
  };

  return (
    <ItemCard>
      <ItemTitle>
        <ItemTitleBack>Volver al listado</ItemTitleBack>
        <ItemTitleCategories>Hojas - Cuadriculadas</ItemTitleCategories>
        <ItemTitleShare name="Share" size={22} />
      </ItemTitle>
      <ItemData>
        <ImageSlider />
        <ItemInfoContainer>
          <ItemInfoTitle variant="h4">
            Resma de Hojas A4 x 500 unidades
          </ItemInfoTitle>
          <ItemInfoPrice variant="h4">$ 600</ItemInfoPrice>
          <ItemInfoStock>
            <b>Stock disponible:</b> 1200 unidades
          </ItemInfoStock>
          <NumericInput />
          <ItemInfoAddToCart onClick={handleClic}>
            Agregar al Carrito
          </ItemInfoAddToCart>
        </ItemInfoContainer>
      </ItemData>
    </ItemCard>
  );
};

export default ProductDetails;
