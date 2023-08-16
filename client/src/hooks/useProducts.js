import { useState } from "react";
import {
  getProductsResponse,
  getProductByIdResponse,
  createProductResponse,
  updateProductResponse,
  deleteProductResponse,
} from "../api/products";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState();

  const getProducts = async () => {
    try {
      const res = await getProductsResponse();
      setProducts(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  const getProductById = async (id) => {
    try {
      const res = await getProductByIdResponse(id);
      setProducts(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  const createProduct = async (product) => {
    try {
      const res = await createProductResponse(product);
      setProducts(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  const updateProduct = async (id, product) => {
    try {
      console.log(product);
      const res = await updateProductResponse(id, product);
      setProducts(res.data);
    } catch (error) {
      setErrors(error);
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductResponse(id);
      setProducts(res.data);
    } catch (error) {
      setErrors(error);
    }
  };

  return {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    products,
    errors,
  };
};

export default useProducts;
