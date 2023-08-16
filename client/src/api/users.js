import axios from "./axios";

export const getUsersResponse = async () => axios.get("/users");

export const getUserByIdResponse = async (id) => axios.get(`/users/${id}`);

export const createUserResponse = async (user) => axios.post("/users", user);

export const updateUserResponse = async (id, user) =>
  axios.put(`/users/${id}`, user);

export const deleteUserResponse = async (id) => axios.delete(`/users/${id}`);
