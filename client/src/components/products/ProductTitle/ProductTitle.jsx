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

const ProductTitle = ({ search, totResults, category, setSelectedOrder }) => {
  const handleOrderByChange = (value) => {
    setSelectedOrder(value);
    console.log(value);
  };

  return (
    <ProductTitleContainer component={"article"}>
      <ProductCategory>
        <ProductCategoryTitle variant="h5">
          {search ? search : category ? category : "Todas las Categorías"}
        </ProductCategoryTitle>
        <ProductCategoryQuantity variant="subtitle1">
          {totResults} {totResults === 1 ? "artículo" : "artículos"}
        </ProductCategoryQuantity>
      </ProductCategory>
      <ProductOrderByContainer>
        {/* <ProductOrderByTitle>Ordenar por:</ProductOrderByTitle> */}
        <ProductOrderBySelect
          name="productOrder"
          variant="standard"
          defaultValue={1}
          onChange={(e) => handleOrderByChange(e.target.value)}
        >
          <MenuItem value={1}>Ordenar por:</MenuItem>
          <MenuItem value={2}>Menor precio</MenuItem>
          <MenuItem value={3}>Mayor precio</MenuItem>
        </ProductOrderBySelect>
      </ProductOrderByContainer>
    </ProductTitleContainer>
  );
};

export default ProductTitle;
