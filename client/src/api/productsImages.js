import axios from "./axios";

export const getProductsImagesResponse = async () =>
  axios.get("/products-images");

export const getProductImageByIdResponse = async (id) =>
  axios.get(`/products-images/${id}`);

export const createProductImageResponse = async (productImage) =>
  axios.post("/products-images", productImage);

export const updateProductImageResponse = async (id, productImage) =>
  axios.put(`/products-images/${id}`, productImage);

export const deleteProductImageResponse = async (id) =>
  axios.delete(`/products-images/${id}`);
