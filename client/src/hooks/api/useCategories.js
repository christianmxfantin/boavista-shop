import { useState } from "react";
import { responseError, statusErrors } from "../../utils/toastErrors";
import {
  createCategoryResponse,
  deleteCategoryResponse,
  getCategoriesResponse,
  getCategoryByIdResponse,
  updateCategoryResponse,
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

  const createCategory = async (category) => {
    try {
      const res = await createCategoryResponse(category);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const updateCategory = async (id, category) => {
    try {
      const res = await updateCategoryResponse(id, category);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await deleteCategoryResponse(id);
      setCategories(res.data);
    } catch (error) {
      console.log(error);
      statusErrors(error);
      responseError(error);
    }
  };

  return {
    categories,
    setCategories,
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};

export default useCategories;
