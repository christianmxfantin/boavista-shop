import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon as ItemTitleShare } from "../../components/ui/Icon";
import NumericInput from "../../components/layout/NumericInput";
import ImageSlider from "../../components/layout/ImageSlider";

const ItemCard = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(4, 2, 0, 3), //32px 16px 0px 24px
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
  "&:hover": {
    color: theme.palette.secondary[500],
  },
}));

const ItemTitleCategories = styled(Typography)(({ theme }) => ({
  //styles
}));

const ItemData = styled(Box)(({ theme }) => ({
  height: "450px",
  display: "flex",
  justifyContent: "space-between",
  marginTop: theme.spacing(2), //16px
}));

const ItemInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2), //16px
  border: `1px solid ${theme.palette.primary[300]}`,
  borderRadius: theme.spacing(1), //8px
  backgroundColor: theme.palette.secondary.A100,
}));

const ItemInfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
}));

const ItemInfoPrice = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2), //16px
  fontWeight: 300,
}));

const ItemInfoStock = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(5), //40px
}));

const ItemInfoAddToCart = styled(Button)(({ theme }) => ({
  marginTop: "auto",
  backgroundColor: theme.palette.primary[300],
  color: theme.palette.secondary.A100,
  "&:hover": {
    backgroundColor: theme.palette.secondary[500],
    color: theme.palette.primary[500],
  },
}));

const ProductItem = () => {
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

export default ProductItem;
