import axios from "./axios";

export const getProducts = async () => axios.get("/products");

export const getProductById = async (id) => axios.get(`/products/${id}`);

export const createProduct = async (product) =>
  axios.post("/products", product);

export const updateProduct = async (product) =>
  axios.put(`/products/${product.id}`, product);

export const deleteProduct = async (id) => axios.delete(`/products/${id}`);
