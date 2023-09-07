import ProductCategory from "./filters/ProductCategory/ProductCategory";
import ProductPrice from "./filters/ProductPrice/ProductPrice";
import ProductDiscount from "./filters/ProductDiscount/ProductDiscount";
import { Typography } from "@mui/material";

const ProductFilter = ({ categories }) => {
  return (
    <>
      <Typography sx={{ fontWeight: "bold" }}>Filtros</Typography>
      <ProductCategory categories={categories} />
      <ProductPrice />
      <ProductDiscount />
    </>
  );
};

export default ProductFilter;
