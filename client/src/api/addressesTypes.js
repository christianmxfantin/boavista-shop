import axios from "./axios";

export const getAddressesTypesResponse = async () =>
  axios.get("/addresses-types");

export const getAddressTypeByIdResponse = async (id) =>
  axios.get(`/addresses-types/${id}`);

export const addressTypeByNameResponse = async (addressType) =>
  axios.post("/addresses-types/name", addressType);

export const createAddressTypeResponse = async (addressType) =>
  axios.post("/addresses-types", addressType);

export const updateAddressTypeResponse = async (id, addressType) =>
  axios.put(`/addresses-types/${id}`, addressType);

export const deleteAddressTypeResponse = async (id) =>
  axios.delete(`/addresses-types/${id}`);
