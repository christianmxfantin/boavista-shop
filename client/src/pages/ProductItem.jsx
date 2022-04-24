import React from "react";
import {
  Button as ItemInfoAdd,
  Container as ItemData,
  Container as ItemCard,
  Container as ItemTitle,
  Container as ItemImages,
  Container as ItemInfo,
  Typography as ItemTitleBack,
  Typography as ItemTitleCategories,
  Typography as ItemInfoTitle,
  Typography as ItemInfoPrice,
  Typography as ItemInfoStock,
  Typography as ItemInfoQuantity,
} from "@mui/material";
import { Icon as ItemTitleShare } from "../components/ui/Icon";
// import { Image as ItemImage } from "../components/ui/Image";

const ProductItem = () => {
  return (
    <ItemCard sx={{ marginTop: "80px" }}>
      <ItemTitle>
        <ItemTitleBack>Volver al listado</ItemTitleBack>
        <ItemTitleCategories>Hojas - Cuadriculadas</ItemTitleCategories>
        <ItemTitleShare>Icono Compartir</ItemTitleShare>
      </ItemTitle>
      <ItemData>
        <ItemImages>{/* <ItemImage /> */}</ItemImages>
        <ItemInfo>
          <ItemInfoTitle>Resma Hojas A4</ItemInfoTitle>
          <ItemInfoPrice>$ 600</ItemInfoPrice>
          <ItemInfoStock>Stock disponible: 1200 unidades</ItemInfoStock>
          <ItemInfoQuantity>1 (elegir)</ItemInfoQuantity>
          <ItemInfoAdd>Agregar al Carrito</ItemInfoAdd>
        </ItemInfo>
      </ItemData>
    </ItemCard>
  );
};

export default ProductItem;
