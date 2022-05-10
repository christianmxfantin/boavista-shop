import React from "react";
import { useTheme } from "@emotion/react";
import {
  Button as ItemInfoAdd,
  Container as ItemCard,
  Container as ItemData,
  Container as ItemImages,
  Container as ItemInfo,
  Container as ItemTitle,
  Typography as ItemTitleBack,
  Typography as ItemTitleCategories,
  Typography as ItemInfoPrice,
  Typography as ItemInfoQuantity,
  Typography as ItemInfoStock,
  Typography as ItemInfoTitle,
} from "@mui/material";
import { Icon as ItemTitleShare } from "../components/ui/Icon";
// import { Image as ItemImage } from "../components/ui/Image";
import ProductImage from "../images/product.jpg";

const ProductItem = () => {
  const theme = useTheme();

  return (
    <ItemCard
      sx={{
        height: "89vh",
        marginTop: "70px",
        paddingTop: "32px",
        backgroundColor: `${theme.palette.primary[50]}`,
        color: `${theme.palette.primary[500]}`,
      }}
    >
      <ItemTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: `${theme.palette.primary[300]}`,
          color: `${theme.palette.secondary.A100}`,
        }}
      >
        <ItemTitleBack>Volver al listado</ItemTitleBack>
        <ItemTitleCategories>Hojas - Cuadriculadas</ItemTitleCategories>
        <ItemTitleShare>Icono Compartir</ItemTitleShare>
      </ItemTitle>
      <ItemData sx={{ display: "flex", padding: "0px !important" }}>
        {/* <ItemImages><ItemImage /></ItemImages> */}
        <ItemImages
          sx={{ paddingTop: "32px !important", paddingLeft: "0px !important" }}
        >
          <img
            src={ProductImage}
            alt=""
            style={{
              // padding: "0px !important",
              // margin: "50px",
              width: "100%",
              height: "100%",
              borderRadius: `${theme.spacing(1.5)}`, //12px
              objectFit: "cover",
            }}
          />
        </ItemImages>
        <ItemInfo
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "32px !important",
            paddingTop: "16px",
            border: `1px solid ${theme.palette.primary[300]}`,
            borderRadius: "8px",
            backgroundColor: `${theme.palette.secondary.A100}`,
          }}
        >
          <ItemInfoTitle variant="h4" sx={{ fontWeight: 500 }}>
            Resma de Hojas A4 x 500 unidades
          </ItemInfoTitle>
          <ItemInfoPrice variant="h4" sx={{ fontWeight: 300 }}>
            $ 600
          </ItemInfoPrice>
          <ItemInfoStock>Stock disponible: 1200 unidades</ItemInfoStock>
          <ItemInfoQuantity>1 (elegir)</ItemInfoQuantity>
          <ItemInfoAdd
            sx={{
              marginTop: "auto",
              marginBottom: "16px",
              backgroundColor: `${theme.palette.primary[300]}`,
              color: `${theme.palette.secondary.A100}`,
            }}
          >
            Agregar al Carrito
          </ItemInfoAdd>
        </ItemInfo>
      </ItemData>
    </ItemCard>
  );
};

export default ProductItem;
