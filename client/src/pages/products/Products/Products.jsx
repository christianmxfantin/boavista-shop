import {
  ProductContainer,
  ProductFilters,
  ProductTitleContainer,
  ProductTitle,
  ProductCategoryTitle,
  ProductCategoryQuantity,
  ProductOrderByContainer,
  ProductOrderByTitle,
  ProductOrderBySelect,
  ProductListContainer,
  ProductListItem,
} from "./Products.styles";
import { Box, MenuItem } from "@mui/material";

import { products } from "../../../components/products/productList";
import ProductFilter from "../../../components/products/ProductFilter";
import ProductItem from "../../../components/products/ProductItem/ProductItem";

const Products = () => {
  return (
    <ProductContainer>
      <ProductFilters>
        <ProductFilter />
      </ProductFilters>
      <Box>
        <ProductTitleContainer>
          <ProductTitle>
            <ProductCategoryTitle variant="h5">Categoría</ProductCategoryTitle>
            <ProductCategoryQuantity variant="subtitle1">
              50 artículos
            </ProductCategoryQuantity>
          </ProductTitle>
          <ProductOrderByContainer>
            <ProductOrderByTitle>Ordenar por:</ProductOrderByTitle>
            <ProductOrderBySelect variant="standard" defaultValue={1}>
              <MenuItem value={1}>Menor precio</MenuItem>
              <MenuItem value={2}>Mayor precio</MenuItem>
              <MenuItem value={3}>Más vendido</MenuItem>
            </ProductOrderBySelect>
          </ProductOrderByContainer>
        </ProductTitleContainer>
        <ProductListContainer container spacing={3}>
          {products.map((product) => (
            <ProductListItem item key={product.id}>
              <ProductItem key={product.id} data={product} />
            </ProductListItem>
          ))}
        </ProductListContainer>
      </Box>
    </ProductContainer>
  );
};

export default Products;
