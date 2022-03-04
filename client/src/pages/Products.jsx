import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/pages/Products.css";

const Products = () => {
  let products = ["Producto 1", "Producto 2"];
  const addToCart = (id) => {};

  return (
    <>
      <div className="products">Products</div>
      <div className="products-container">
        {products.map((product) => {
          <ProductItem key={product.id} data={product} addToCart={addToCart} />;
        })}
      </div>
    </>
  );
};

export default Products;
