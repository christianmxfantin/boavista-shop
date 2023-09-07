import { useState } from "react";
import { responseError, statusErrors } from "../../utils/toastErrors";
import {
  getCategoriesResponse,
  getCategoryByIdResponse,
} from "../../api/categories";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await getCategoriesResponse();
      setCategories(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const getCategoryById = async (id) => {
    try {
      const res = await getCategoryByIdResponse(id);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  // const createProduct = async (product) => {
  //   try {
  //     const res = await createProductResponse(product);
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.log(error);
  //     statusErrors(error);
  //     responseError(error);
  //   }
  // };

  // const updateProduct = async (id, product) => {
  //   try {
  //     console.log(product);
  //     const res = await updateProductResponse(id, product);
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.log(error);
  //     statusErrors(error);
  //     responseError(error);
  //   }
  // };

  // const deleteProduct = async (id) => {
  //   try {
  //     const res = await deleteProductResponse(id);
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.log(error);
  //     statusErrors(error);
  //     responseError(error);
  //   }
  // };

  return {
    categories,
    setCategories,
    getCategories,
    getCategoryById,
    // createProduct,
    // updateProduct,
    // deleteProduct,
  };
};

export default useCategories;
