import { MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProductCategorySelect = styled(Select)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(4), //32px,
  padding: theme.spacing(1), //8px,
}));

const ProductCategory = () => {
  return (
    <ProductCategorySelect variant="outlined" defaultValue={1}>
      <MenuItem value={1}>Categoría 1</MenuItem>
      <MenuItem value={2}>Categoría 2</MenuItem>
      <MenuItem value={3}>Categoría 3</MenuItem>
    </ProductCategorySelect>
  );
};

export default ProductCategory;
