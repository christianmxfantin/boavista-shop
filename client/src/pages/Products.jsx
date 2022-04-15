import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cart";
import ProductFilter from "../components/products/ProductFilter";
import ProductItem from "../components/products/ProductItem";
import { useTheme } from "@emotion/react";
import {
  Container as ProductContainer,
  Container as ProductFilters,
  Container as ProductData,
  Typography as ProductTitle,
  Typography as ProductFilterArticles,
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
    <>
      <ProductTitle
        variant="h4"
        sx={{
          color: `${theme.palette.primary.main}`,
          marginTop: "100px",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        Productos
      </ProductTitle>
      <ProductContainer
        sx={{
          padding: "0px !important",
          display: "flex",
          marginTop: `${theme.spacing(4.5)}`, //36px
          color: `${theme.palette.primary.main}`,
        }}
      >
        <ProductFilters
          sx={{
            padding: "0px !important",
            width: "30%",
            display: "flex",
          }}
        >
          <ProductFilter />
        </ProductFilters>
        <ProductData
          sx={{
            padding: "0px !important",
          }}
        >
          <ProductFilterArticles
            variant="h6"
            sx={{
              // marginBottom: `${theme.spacing(2)}`, //36px
              padding: `${theme.spacing(1)} !important`, //12px
              color: `${theme.palette.primary.main}`,
              fontWeight: 500,
            }}
          >
            50 artículos
          </ProductFilterArticles>
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
    </>
  );
};

export default Products;
