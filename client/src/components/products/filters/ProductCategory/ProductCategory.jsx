import { MenuItem } from "@mui/material";
import {
  ProductCategorySelect,
  ProductCategoryTitle,
} from "./ProductCategory.styles";

const ProductCategory = ({ categories, setSelectedCategory }) => {
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <ProductCategoryTitle>Categorías</ProductCategoryTitle>
      <ProductCategorySelect
        name="productCategory"
        variant="outlined"
        defaultValue={1}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <MenuItem value={1}>Mostrar Todos</MenuItem>
        {categories.map((category, index) => (
          <MenuItem value={category.name} key={index}>
            {category.name}
          </MenuItem>
        ))}
      </ProductCategorySelect>
    </>
  );
};

export default ProductCategory;
