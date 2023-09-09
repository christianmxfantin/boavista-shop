import axios from "./axios";

export const getDiscountsResponse = async () => axios.get("/discounts");

export const getDiscountByIdResponse = async (id) =>
  axios.get(`/discounts/${id}`);

export const createDiscountResponse = async (discount) =>
  axios.post("/discounts", discount);

export const updateDiscountResponse = async (id, discount) =>
  axios.put(`/discounts/${id}`, discount);

export const deleteDiscountResponse = async (id) =>
  axios.delete(`/discounts/${id}`);
