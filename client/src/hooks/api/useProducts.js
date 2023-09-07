import { useState } from "react";
import {
  getProductsResponse,
  getProductByIdResponse,
  createProductResponse,
  updateProductResponse,
  deleteProductResponse,
} from "../../api/products";
import { responseError, statusErrors } from "../../utils/toastErrors";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await getProductsResponse();
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const getProductById = async (id) => {
    try {
      const res = await getProductByIdResponse(id);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const createProduct = async (product) => {
    try {
      const res = await createProductResponse(product);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const updateProduct = async (id, product) => {
    try {
      console.log(product);
      const res = await updateProductResponse(id, product);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductResponse(id);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  return {
    products,
    setProducts,
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};

export default useProducts;
