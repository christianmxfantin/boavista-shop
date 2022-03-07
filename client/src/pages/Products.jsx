import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cart";
import ProductItem from "../components/ProductItem";
import "../styles/pages/Products.css";

const Products = () => {
  //traer data de la BD
  let products = [
    { id: 1, name: "Producto 1", price: 300 },
    { id: 2, name: "Producto 2", price: 500 },
    { id: 3, name: "Producto 3", price: 900 },
  ];

  //const state = useSelector((state) => state);
  const dispatch = useDispatch();
  //aca debe ser un state.products
  //const { products } = state.cart;

  return (
    <>
      <div className="products-title">Products</div>
      <div className="products-container">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(addToCart(product.id))}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
