import {
  ProductTitleContainer,
  ProductCategory,
  ProductCategoryTitle,
  ProductCategoryQuantity,
  ProductOrderByContainer,
  ProductOrderByTitle,
  ProductOrderBySelect,
} from "./ProductTitle.styles";
import { MenuItem } from "@mui/material";

const ProductTitle = ({ search, totResults }) => {
  return (
    <ProductTitleContainer component={"article"}>
      <ProductCategory>
        <ProductCategoryTitle variant="h5">
          {search ? search : "Categoría"}
        </ProductCategoryTitle>
        <ProductCategoryQuantity variant="subtitle1">
          {totResults} artículos
        </ProductCategoryQuantity>
      </ProductCategory>
      <ProductOrderByContainer>
        <ProductOrderByTitle>Ordenar por:</ProductOrderByTitle>
        <ProductOrderBySelect variant="standard" defaultValue={1}>
          <MenuItem value={1}>Menor precio</MenuItem>
          <MenuItem value={2}>Mayor precio</MenuItem>
          <MenuItem value={3}>Más vendido</MenuItem>
        </ProductOrderBySelect>
      </ProductOrderByContainer>
    </ProductTitleContainer>
  );
};

export default ProductTitle;
