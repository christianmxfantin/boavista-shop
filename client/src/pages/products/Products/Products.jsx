import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ProductContainer,
  ProductFilters,
  ProductData,
  ProductListContainer,
  ProductListItem,
} from "./Products.styles";
import useProducts from "../../../hooks/api/useProducts";
import useCategories from "../../../hooks/api/useCategories";
import useDiscounts from "../../../hooks/api/useDiscounts";

import ProductFilter from "../../../components/products/ProductFilter";
import ProductItem from "../../../components/products/ProductItem/ProductItem";
import ProductTitle from "../../../components/products/ProductTitle/ProductTitle";
import EmptyData from "../../../components/layout/EmptyData/EmptyData";

const Products = () => {
  const { products, getProducts } = useProducts();
  const { categories, getCategories } = useCategories();
  const { discounts, getDiscounts } = useDiscounts();

  const [discountFilter, setDiscountFilter] = useState();

  useEffect(() => {
    getProducts();
    getCategories();
    getDiscounts();
  }, []);

  //crear array de productos con filtro de descuentos

  //crear array de categorias y descuentos
  const categoriesID = [
    ...new Set(products.map((product) => product.categoryId)),
  ];
  const categoriesData = categories.filter((category) =>
    categoriesID.includes(category.id)
  );
  const discountsID = [
    ...new Set(products.map((product) => product.discountId)),
  ];
  const discountsData = discounts.filter(
    (discount) => discountsID.includes(discount.id) && discount.percentage !== 0
  );

  let { search } = useLocation();
  let searchData = decodeURIComponent(search.slice(3).replace(/\+/g, " "));

  let searchProducts = Object.values(products).filter(
    (product) =>
      product.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, () => "") ===
      searchData
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, () => "")
  );

  console.log(discountFilter);
  return (
    <>
      {products.length === 0 ? (
        <EmptyData iconName="products" size={180} title="productos" />
      ) : (
        <ProductContainer component={"main"}>
          <ProductFilters component={"aside"}>
            <ProductFilter
              categories={categoriesData}
              discounts={discountsData}
              discountsFilter={discountFilter}
              setDiscountFilter={setDiscountFilter}
            />
          </ProductFilters>
          <ProductData component={"section"}>
            <ProductTitle
              search={search && searchData}
              // category={category}
              totResults={search ? searchProducts.length : products.length}
            />
            <ProductListContainer container spacing={3}>
              {!searchData
                ? products.map((product) => (
                    <ProductListItem item key={product.id}>
                      <ProductItem data={product} />
                    </ProductListItem>
                  ))
                : products.map((product) => (
                    <ProductListItem item key={product.id}>
                      <ProductItem data={product} />
                    </ProductListItem>
                  ))}
            </ProductListContainer>
          </ProductData>
        </ProductContainer>
      )}
    </>
  );
};

export default Products;
