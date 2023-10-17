import { useState } from "react";
import {
  getProductsResponse,
  getProductByIdResponse,
  createProductResponse,
  updateProductResponse,
  deleteProductResponse,
  updatePricesResponse,
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

  const updatePrices = async (product) => {
    try {
      console.log(product);
      const res = await updatePricesResponse(product);
      console.log(res);
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
      if (res.status === 204) {
        const productsFilter = products.filter((product) => product.id !== id);
        setProducts(productsFilter);
      }
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
    updatePrices,
    deleteProduct,
  };
};

export default useProducts;
