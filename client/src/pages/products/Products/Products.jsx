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

const Products = () => {
  return (
    <ProductContainer component={"main"}>
      <ProductFilters component={"aside"}>
        <ProductFilter />
      </ProductFilters>
      <ProductData component={"section"}>
        <ProductTitle />
        <ProductListContainer container spacing={3}>
          {products.map((product) => (
            <ProductListItem item key={product.id}>
              <ProductItem key={product.id} data={product} />
            </ProductListItem>
          ))}
        </ProductListContainer>
      </ProductData>
    </ProductContainer>
  );
};

export default Products;
