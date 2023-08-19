import axios from "./axios";

export const getPaymentsTypesResponse = async () =>
  axios.get("/payments-types");

export const getPaymentTypeByIdResponse = async (id) =>
  axios.get(`/payments-types/${id}`);

export const createPaymentTypeResponse = async (paymentType) =>
  axios.post("/payments-types", paymentType);

export const updatePaymentTypeResponse = async (id, paymentType) =>
  axios.put(`/payments-types/${id}`, paymentType);

export const deletePaymentTypeResponse = async (id) =>
  axios.delete(`/payments-types/${id}`);
