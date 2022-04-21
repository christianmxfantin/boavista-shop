import React from "react";
import { useTheme } from "@emotion/react";
import {
  Container as ProductCategory,
  Container as ProductCategoryData,
  Container as ProductDiscount,
  Container as ProductDiscountData,
  Container as ProductPrice,
  Container as ProductPriceMinMax,
  Typography as ProductCategoryTitle,
  Typography as ProductDiscountTitle,
  Typography as ProductPriceTitle,
} from "@mui/material";

const ProductFilter = () => {
  const theme = useTheme();

  return (
    <>
      <ProductCategory
        sx={{
          padding: `${theme.spacing(0.5)} !important`, //4px
          width: "30vw",
        }}
      >
        {`Hojas > Cuadriculadas`}
        <ProductCategoryTitle
          sx={{
            padding: "0px !important",
            marginTop: `${theme.spacing(2)} !important`, //16px
            fontWeight: 600,
          }}
        >
          Seleccionar Categoría
        </ProductCategoryTitle>
        <ProductCategoryData
          sx={{
            paddingLeft: `${theme.spacing(0.5)} !important`, //4px
          }}
        >
          {/* Selector de elementos */}
          Categoría 1
        </ProductCategoryData>
      </ProductCategory>
      <ProductPrice
        sx={{
          padding: "0px !important",
          marginTop: `${theme.spacing(2)} !important`, //16px
        }}
      >
        <ProductPriceTitle
          sx={{
            paddingLeft: `${theme.spacing(0.5)} !important`, //4px
            fontWeight: 600,
          }}
        >
          Precio
        </ProductPriceTitle>
        <ProductPriceMinMax
          sx={{
            paddingLeft: `${theme.spacing(0.5)} !important`, //4px
          }}
        >
          Minimo - Maximo
        </ProductPriceMinMax>
      </ProductPrice>
      <ProductDiscount
        sx={{
          padding: "0px !important",
          marginTop: `${theme.spacing(2)} !important`, //16px
        }}
      >
        <ProductDiscountTitle
          sx={{
            paddingLeft: `${theme.spacing(0.5)} !important`, //4px
            fontWeight: 600,
          }}
        >
          Descuentos
        </ProductDiscountTitle>
        <ProductDiscountData
          sx={{
            paddingLeft: `${theme.spacing(0.5)} !important`, //4px
          }}
        >
          {/* COMPONENTE QUE GENERA LA DATA AUTOMATICAMENTE DESDE LA BD */}
          5% OFF, 10% OFF, 20% OFF
        </ProductDiscountData>
      </ProductDiscount>
    </>
  );
};

export default ProductFilter;
