import { useLocation } from "react-router-dom";
import {
  ProductContainer,
  ProductFilters,
  ProductData,
  ProductSearchTitle,
  ProductListContainer,
  ProductListItem,
} from "./Products.styles";

import { products } from "../../../components/products/productList";

import ProductFilter from "../../../components/products/ProductFilter";
import ProductItem from "../../../components/products/ProductItem/ProductItem";
import ProductTitle from "../../../components/products/ProductTitle/ProductTitle";

const Products = () => {
  let totResults = 2;
  let { search } = useLocation();
  let searchData = decodeURIComponent(search.slice(3).replace(/\+/g, " "));

  if (search) {
    let searchProducts = products.find((product) => product.name === search);
  }

  return (
    <ProductContainer component={"main"}>
      <ProductFilters component={"aside"}>
        <ProductFilter />
      </ProductFilters>
      <ProductData component={"section"}>
        <ProductTitle search={search && searchData} />
        <ProductListContainer container spacing={3}>
          {search ? (
            <div>Tiene que mostrar el map de products según la busqueda</div>
          ) : (
            // searchProducts.map((product) => (
            //     <ProductListItem item key={product.id}>
            //       <ProductItem data={product} />
            //     </ProductListItem>
            //   ))
            products.map((product) => (
              <ProductListItem item key={product.id}>
                <ProductItem data={product} />
              </ProductListItem>
            ))
          )}
        </ProductListContainer>
      </ProductData>
    </ProductContainer>
  );
};

export default Products;
