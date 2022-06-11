import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon as ItemTitleShare } from "../../components/ui/Icon";
import ProductImage from "../../images/product.jpg";
import NumericInput from "../../components/layout/NumericInput";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ItemImages = styled(Box)(({ theme }) => ({
  width: "70%",
  marginRight: theme.spacing(2), //16px
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

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  swipeToSlide: true,
  edgeFriction: 0.15,
};

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
          {/* <Slider {...settings}>
            <img
              src={ProductImage}
              alt=""
            />
          </Slider> */}
        </ItemImages>
        <ItemInfoContainer>
          <ItemInfoTitle variant="h4">
            Resma de Hojas A4 x 500 unidades
          </ItemInfoTitle>
          <ItemInfoPrice variant="h4">$ 600</ItemInfoPrice>
          <ItemInfoStock>
            <b>Stock disponible:</b> 1200 unidades
          </ItemInfoStock>
          <NumericInput />
          <ItemInfoAddToCart>Agregar al Carrito</ItemInfoAddToCart>
        </ItemInfoContainer>
      </ItemData>
    </ItemCard>
  );
};

export default ProductItem;
