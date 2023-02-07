import {
  ProductContainer,
  ProductFilters,
  ProductData,
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
import { MenuItem } from "@mui/material";

import { products } from "../../../components/products/productList";
import ProductFilter from "../../../components/products/ProductFilter";
import ProductItem from "../../../components/products/ProductItem/ProductItem";

const Products = () => {
  return (
    <ProductContainer component={"main"}>
      <ProductFilters component={"aside"}>
        <ProductFilter />
      </ProductFilters>
      <ProductData component={"section"}>
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
      </ProductData>
    </ProductContainer>
  );
};

export default Products;
