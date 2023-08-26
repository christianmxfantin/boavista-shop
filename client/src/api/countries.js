import axios from "./axios";

export const getCountriesResponse = async () => axios.get("/countries");

export const getCountryByIdResponse = async (id) =>
  axios.get(`/countries/${id}`);

export const countryByNameResponse = async (country) =>
  axios.post("/countries/name", country);

export const createCountryResponse = async (country) =>
  axios.post("/countries", country);

export const updateCountryResponse = async (id, country) =>
  axios.put(`/countries/${id}`, country);

export const deleteCountryResponse = async (id) =>
  axios.delete(`/countries/${id}`);
