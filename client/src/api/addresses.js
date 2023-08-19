import axios from "./axios";

export const getAddressesResponse = async () => axios.get("/addresses");

export const getAddressByIdResponse = async (id) =>
  axios.get(`/addresses/${id}`);

export const createAddressResponse = async (address) =>
  axios.post("/addresses", address);

export const updateAddressResponse = async (id, address) =>
  axios.put(`/addresses/${id}`, address);

export const deleteAddressResponse = async (id) =>
  axios.delete(`/addresses/${id}`);
