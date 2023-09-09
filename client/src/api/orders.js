import axios from "./axios";

export const getOrdersResponse = async () => axios.get("/orders");

export const getOrderByIdResponse = async (id) => axios.get(`/orders/${id}`);

export const createOrderResponse = async (order) =>
  axios.post("/orders", order);

export const updateOrderResponse = async (id, order) =>
  axios.put(`/orders/${id}`, order);

export const deleteOrderResponse = async (id) => axios.delete(`/orders/${id}`);
