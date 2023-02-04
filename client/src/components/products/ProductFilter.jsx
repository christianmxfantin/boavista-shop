import ProductPath from "./filters/ProductPath/ProductPath";
import ProductCategory from "./filters/ProductCategory/ProductCategory";
import ProductPrice from "./filters/ProductPrice/ProductPrice";
import ProductDiscount from "./filters/ProductDiscount/ProductDiscount";

const ProductFilter = () => {
  return (
    <>
      <ProductPath />
      <ProductCategory />
      <ProductPrice />
      <ProductDiscount />
    </>
  );
};

export default ProductFilter;
