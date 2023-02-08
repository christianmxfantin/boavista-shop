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

const ProductTitle = () => {
  return (
    <ProductTitleContainer component={"article"}>
      <ProductCategory>
        <ProductCategoryTitle variant="h5">Categoría</ProductCategoryTitle>
        <ProductCategoryQuantity variant="subtitle1">
          50 artículos
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
