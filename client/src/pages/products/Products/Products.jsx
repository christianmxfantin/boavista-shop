import { useLocation } from "react-router-dom";
import {
  ProductContainer,
  ProductFilters,
  ProductData,
  ProductListContainer,
  ProductListItem,
} from "./Products.styles";

import { products } from "../../../components/products/productList";

import ProductFilter from "../../../components/products/ProductFilter";
import ProductItem from "../../../components/products/ProductItem/ProductItem";
import ProductTitle from "../../../components/products/ProductTitle/ProductTitle";
import EmptyData from "../../../components/layout/EmptyData/EmptyData";

const Products = () => {
  // let totResults = 2;
  let { search } = useLocation();
  let searchData = decodeURIComponent(search.slice(3).replace(/\+/g, " "));

  let searchProducts = Object.values(products).filter(
    (product) =>
      product.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, (char) => "") ===
      searchData
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, (char) => "")
  );

  return (
    <>
      {products.length === 0 ? (
        <EmptyData iconName="products" size={180} title="productos" />
      ) : (
        <ProductContainer component={"main"}>
          <ProductFilters component={"aside"}>
            <ProductFilter />
          </ProductFilters>
          <ProductData component={"section"}>
            <ProductTitle
              search={search && searchData}
              totResults={search ? searchProducts.length : products.length}
            />
            <ProductListContainer container spacing={3}>
              {!searchData
                ? Object.values(products).map((product) => (
                    <ProductListItem item key={product.id}>
                      <ProductItem data={product} />
                    </ProductListItem>
                  ))
                : Object.values(products).map((product) => (
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
