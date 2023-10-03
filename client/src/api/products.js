import axios from "./axios";

export const getProductsResponse = async () => axios.get("/products");

export const getProductByIdResponse = async (id) =>
  axios.get(`/products/${id}`);

export const createProductResponse = async (product) =>
  axios.post("/products", product);

export const updateProductResponse = async (id, product) =>
  axios.put(`/products/${id}`, product);

export const updatePricesResponse = async (product) =>
  axios.put("/products/update-prices", product);

export const deleteProductResponse = async (id) =>
  axios.delete(`/products/${id}`);
