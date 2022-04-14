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
  Grid,
} from "@mui/material";

const Products = () => {
  const theme = useTheme();

  //traer data de la BD
  let products = [
    { id: 1, name: "Producto 1", price: 300 },
    { id: 2, name: "Producto 2", price: 500 },
    { id: 3, name: "Producto 3", price: 900 },
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
          marginTop: "20px",
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
          <Grid
            container
            spacing={3}
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr !important",
            }}
          >
            {products.map((product) => (
              <Grid
                item
                sx={{
                  padding: "10px !important",
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
