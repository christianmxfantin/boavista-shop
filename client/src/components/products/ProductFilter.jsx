import ProductCategory from "./filters/ProductCategory/ProductCategory";
import ProductPrice from "./filters/ProductPrice/ProductPrice";
import ProductDiscount from "./filters/ProductDiscount/ProductDiscount";
import { Typography } from "@mui/material";

const ProductFilter = () => {
  return (
    <>
      <Typography sx={{ fontWeight: "bold" }}>Filtros</Typography>
      <ProductCategory />
      <ProductPrice />
      <ProductDiscount />
    </>
  );
};

export default ProductFilter;
