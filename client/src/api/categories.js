import axios from "./axios";

export const getCategoriesResponse = async () => axios.get("/categories");

export const getCategoryByIdResponse = async (id) =>
  axios.get(`/categories/${id}`);

export const createCategoryResponse = async (category) =>
  axios.post("/categories", category);

export const updateCategoryResponse = async (id, category) =>
  axios.put(`/categories/${id}`, category);

export const deleteCategoryResponse = async (id) =>
  axios.delete(`/categories/${id}`);
