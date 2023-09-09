import ProductCategory from "./filters/ProductCategory/ProductCategory";
import ProductPrice from "./filters/ProductPrice/ProductPrice";
import ProductDiscount from "./filters/ProductDiscount/ProductDiscount";
import { Typography } from "@mui/material";

const ProductFilter = ({
  categories,
  discounts,
  discountFilter,
  setDiscountFilter,
}) => {
  return (
    <>
      <Typography sx={{ fontWeight: "bold" }}>Filtros</Typography>
      <ProductCategory categories={categories} />
      <ProductPrice />
      <ProductDiscount
        discounts={discounts}
        discountFilter={discountFilter}
        setDiscountFilter={setDiscountFilter}
      />
    </>
  );
};

export default ProductFilter;
