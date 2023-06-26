import { MenuItem } from "@mui/material";
import { ProductCategorySelect } from "./ProductCategory.styles";

const ProductCategory = () => {
  return (
    <ProductCategorySelect
      name="productCategory"
      variant="outlined"
      defaultValue={1}
    >
      <MenuItem value={1}>Categoría 1</MenuItem>
      <MenuItem value={2}>Categoría 2</MenuItem>
      <MenuItem value={3}>Categoría 3</MenuItem>
    </ProductCategorySelect>
  );
};

export default ProductCategory;
