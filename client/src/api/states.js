import axios from "./axios";

export const getStatesResponse = async () => axios.get("/states");

export const getStateByIdResponse = async (id) => axios.get(`/states/${id}`);

export const stateByNameResponse = async (state) =>
  axios.post("/states/name", state);

export const createStateResponse = async (state) =>
  axios.post("/states", state);

export const updateStateResponse = async (id, state) =>
  axios.put(`/states/${id}`, state);

export const deleteStateResponse = async (id) => axios.delete(`/states/${id}`);
