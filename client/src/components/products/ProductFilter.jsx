import ProductCategory from "./filters/ProductCategory/ProductCategory";
import ProductPrice from "./filters/ProductPrice/ProductPrice";
import ProductDiscount from "./filters/ProductDiscount/ProductDiscount";
import { Typography } from "@mui/material";

const ProductFilter = ({
  categories,
  discounts,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  setSelectedDiscount,
}) => {
  return (
    <>
      <Typography sx={{ fontWeight: "bold" }}>Filtros</Typography>
      <ProductCategory
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductPrice
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <ProductDiscount
        discounts={discounts}
        setSelectedDiscount={setSelectedDiscount}
      />
    </>
  );
};

export default ProductFilter;
