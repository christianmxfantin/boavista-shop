import { MenuItem } from "@mui/material";
import { ProductCategorySelect } from "./ProductCategory.styles";

const ProductCategory = ({ categories }) => {
  return (
    <ProductCategorySelect
      name="productCategory"
      variant="outlined"
      defaultValue={1}
    >
      <MenuItem value={1}>Selecciona una Categoría</MenuItem>
      {categories.map((category, index) => (
        <MenuItem value={category.name} key={index}>
          {category.name}
        </MenuItem>
      ))}
    </ProductCategorySelect>
  );
};

export default ProductCategory;
