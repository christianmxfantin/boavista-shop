import React from "react";
import ProductPath from "./filters/ProductPath";
import ProductCategory from "./filters/ProductCategory";
import ProductPrice from "./filters/ProductPrice";
import ProductDiscount from "./filters/ProductDiscount";

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
