import React from "react";

const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;
  return (
    <div className="product-item__container">
      <div>{name}</div>
      <div>$ {price}</div>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;
