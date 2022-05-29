import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon as ItemTitleShare } from "../../components/ui/Icon";
import ProductImage from "../../images/product.jpg";

const ItemCard = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4), //32px
  backgroundColor: theme.palette.primary[50],
  color: theme.palette.primary[500],
}));

const ItemTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2.5), //20px
  borderRadius: theme.spacing(1), //8px,
  backgroundColor: theme.palette.primary[300],
  color: theme.palette.secondary.A100,
}));

const ItemTitleBack = styled(Typography)(({ theme }) => ({
  //styles
}));

const ItemTitleCategories = styled(Typography)(({ theme }) => ({
  //styles
}));

const ItemData = styled(Box)(({ theme }) => ({
  display: "flex",
}));

const ItemImages = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4), //32px
}));

const ItemInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(4), //32px
  paddingTop: theme.spacing(2), //16px
  border: `1px solid ${theme.palette.primary[300]}`,
  borderRadius: theme.spacing(1), //8px
  backgroundColor: theme.palette.secondary.A100,
}));

const ItemInfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
}));

const ItemInfoPrice = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
}));

const ItemInfoStock = styled(Typography)(({ theme }) => ({
  //styles
}));

const ItemInfoQuantity = styled(Typography)(({ theme }) => ({
  //styles
}));

const ItemInfoAddToCart = styled(Button)(({ theme }) => ({
  marginTop: "auto",
  marginBottom: theme.spacing(2), //16px
  backgroundColor: theme.palette.primary[300],
  color: theme.palette.secondary.A100,
}));

const ProductItem = () => {
  const theme = useTheme();

  return (
    <ItemCard>
      <ItemTitle>
        <ItemTitleBack>Volver al listado</ItemTitleBack>
        <ItemTitleCategories>Hojas - Cuadriculadas</ItemTitleCategories>
        <ItemTitleShare name="Share" size={22} />
      </ItemTitle>
      <ItemData>
        {/* <ItemImages><ItemImage /></ItemImages> */}
        <ItemImages>
          <img
            src={ProductImage}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              borderRadius: theme.spacing(1.5), //12px
              objectFit: "cover",
            }}
          />
        </ItemImages>
        <ItemInfoContainer>
          <ItemInfoTitle variant="h4">
            Resma de Hojas A4 x 500 unidades
          </ItemInfoTitle>
          <ItemInfoPrice variant="h4">$ 600</ItemInfoPrice>
          <ItemInfoStock>Stock disponible: 1200 unidades</ItemInfoStock>
          <ItemInfoQuantity>
            1 (componente para elegir cantidad)
          </ItemInfoQuantity>
          <ItemInfoAddToCart sx={{}}>Agregar al Carrito</ItemInfoAddToCart>
        </ItemInfoContainer>
      </ItemData>
    </ItemCard>
  );
};

export default ProductItem;
