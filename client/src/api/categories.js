import axios from "./axios";

export const getCategoriesResponse = async () => axios.get("/categories");

export const getCategoryByIdResponse = async (id) =>
  axios.get(`/categories/${id}`);

// export const createPaymentResponse = async (payment) =>
//   axios.post("/payments", payment);

// export const updatePaymentResponse = async (id, payment) =>
//   axios.put(`/payments/${id}`, payment);

// export const deletePaymentResponse = async (id) =>
//   axios.delete(`/payments/${id}`);
