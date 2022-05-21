import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions/cart";

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import ProductFilter from "../../components/products/ProductFilter";
import ProductItem from "../../components/products/ProductItem";

const Products = () => {
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

  const ProductContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: "100px",
    color: `${theme.palette.primary[500]}`,
  }));

  const ProductFilters = styled(Box)(({ theme }) => ({
    marginRight: `${theme.spacing(2.5)} !important`, //20px
    padding: `${theme.spacing(1.5)}`, //12px
    width: "30%",
    display: "flex",
    flexDirection: "column",
    borderRadius: `${theme.spacing(1.5)}`, //12px
    backgroundColor: `${theme.palette.primary[50]}`,
  }));

  const ProductData = styled(Box)(({ theme }) => ({
    //styles
  }));

  const ProductTitleContainer = styled(Box)(({ theme }) => ({
    display: "flex",
  }));

  const ProductTitle = styled(Box)(({ theme }) => ({
    // width: "50%",
  }));

  const ProductCategoryTitle = styled(Typography)(({ theme }) => ({
    paddingLeft: `${theme.spacing(1)} !important`, //12px
    color: `${theme.palette.primary[500]}`,
    fontWeight: 500,
  }));

  const ProductCategoryQuantity = styled(Typography)(({ theme }) => ({
    paddingLeft: `${theme.spacing(1)} !important`, //12px
    color: `${theme.palette.primary[500]}`,
  }));

  const ProductOrderBy = styled(Typography)(({ theme }) => ({
    // paddingLeft: "100px",
  }));

  const ProductListContainer = styled(Grid)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr !important",
    margin: "0px !important",
  }));

  const ProductListItem = styled(Grid)(({ theme }) => ({
    padding: `${theme.spacing(1)} !important`, //12px
  }));

  return (
    <ProductContainer>
      <ProductFilters>
        <ProductFilter />
      </ProductFilters>
      <ProductData>
        <ProductTitleContainer>
          <ProductTitle>
            <ProductCategoryTitle variant="h5">Categoría</ProductCategoryTitle>
            <ProductCategoryQuantity variant="subtitle1">
              50 artículos
            </ProductCategoryQuantity>
          </ProductTitle>
          <ProductOrderBy>Ordenar por: Menor Precio</ProductOrderBy>
        </ProductTitleContainer>
        <ProductListContainer container spacing={3}>
          {products.map((product) => (
            <ProductListItem item>
              <ProductItem
                key={product.id}
                data={product}
                addToCart={() => dispatch(addToCart(product.id))}
              />
            </ProductListItem>
          ))}
        </ProductListContainer>
      </ProductData>
    </ProductContainer>
  );
};

export default Products;
