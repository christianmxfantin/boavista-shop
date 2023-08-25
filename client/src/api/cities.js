import axios from "./axios";

export const getCitiesResponse = async () => axios.get("/cities");

export const getCityByIdResponse = async (id) => axios.get(`/cities/${id}`);

export const cityByNameResponse = async (city) =>
  axios.post("/cities/name", city);

export const createCityResponse = async (city) => axios.post("/cities", city);

export const updateCityResponse = async (id, city) =>
  axios.put(`/cities/${id}`, city);

export const deleteCityResponse = async (id) => axios.delete(`/cities/${id}`);
