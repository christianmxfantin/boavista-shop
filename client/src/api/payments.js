import axios from "./axios";

export const getPaymentsResponse = async () => axios.get("/payments");

export const getPaymentByIdResponse = async (id) =>
  axios.get(`/payments/${id}`);

export const createPaymentResponse = async (payment) =>
  axios.post("/payments", payment);

export const updatePaymentResponse = async (id, payment) =>
  axios.put(`/payments/${id}`, payment);

export const deletePaymentResponse = async (id) =>
  axios.delete(`/payments/${id}`);
