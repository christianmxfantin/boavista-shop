import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cart";
import ProductFilter from "../components/products/ProductFilter";
import ProductItem from "../components/products/ProductItem";
import { useTheme } from "@emotion/react";
import {
  Container as ProductCategoryContainer,
  Container as ProductContainer,
  Container as ProductFilters,
  Container as ProductFilterContainer,
  Container as ProductData,
  Typography as ProductCategoryData,
  Typography as ProductCategoryTitle,
  Typography as ProductOrderBy,
  Grid,
} from "@mui/material";

const Products = () => {
  const theme = useTheme();

  //traer data de la BD
  let products = [
    { id: 1, name: "Lapicera Bic x 24 unidades", price: 500 },
    { id: 2, name: "Marcador Schneider Trazo fino x 6 unidades", price: 400 },
    { id: 3, name: "Lápices Staedtler x 24 unidades", price: 500 },
    {
      id: 4,
      name: "Goma de borrar Staedtler Tinta/Lápiz x 12 unidades",
      price: 600,
    },
    { id: 5, name: "Transportador Pizzini x 12 unidades", price: 700 },
    { id: 6, name: "Compáses Pizzini x 12 unidades", price: 900 },
  ];

  //const state = useSelector((state) => state);
  const dispatch = useDispatch();
  //aca debe ser un state.products
  //const { products } = state.cart;

  return (
    <ProductContainer
      sx={{
        padding: "0px !important",
        display: "flex",
        marginTop: "100px",
        color: `${theme.palette.primary.main}`,
      }}
    >
      <ProductFilters
        sx={{
          marginRight: `${theme.spacing(2.5)} !important`, //20px
          padding: `${theme.spacing(1.5)}`, //12px
          width: "30%",
          display: "flex",
          flexDirection: "column",
          borderRadius: `${theme.spacing(1.5)}`, //12px
          backgroundColor: `${theme.palette.primary.third}`,
        }}
      >
        <ProductFilter />
      </ProductFilters>
      <ProductData
        sx={{
          padding: "0px !important",
        }}
      >
        <ProductFilterContainer
          sx={{
            padding: "0px !important",
            display: "flex",
          }}
        >
          <ProductCategoryContainer
            sx={{
              padding: "0px !important",
              // width: "50%",
            }}
          >
            <ProductCategoryTitle
              variant="h5"
              sx={{
                paddingLeft: `${theme.spacing(1)} !important`, //12px
                color: `${theme.palette.primary.main}`,
                fontWeight: 500,
              }}
            >
              Categoría
            </ProductCategoryTitle>
            <ProductCategoryData
              variant="subtitle1"
              sx={{
                paddingLeft: `${theme.spacing(1)} !important`, //12px
                color: `${theme.palette.primary.main}`,
              }}
            >
              50 artículos
            </ProductCategoryData>
          </ProductCategoryContainer>
          <ProductOrderBy
            sx={
              {
                // paddingLeft: "100px",
              }
            }
          >
            Ordenar por: Menor Precio
          </ProductOrderBy>
        </ProductFilterContainer>
        <Grid
          container
          spacing={3}
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr !important",
            margin: "0px !important",
          }}
        >
          {products.map((product) => (
            <Grid
              item
              sx={{
                padding: `${theme.spacing(1)} !important`, //12px
              }}
            >
              <ProductItem
                key={product.id}
                data={product}
                addToCart={() => dispatch(addToCart(product.id))}
              />
            </Grid>
          ))}
        </Grid>
      </ProductData>
    </ProductContainer>
  );
};

export default Products;
