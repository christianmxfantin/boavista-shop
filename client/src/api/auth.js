import axios from "./axios";

export const registerResponse = async (user) =>
  axios.post("/auth/register", user);

export const loginResponse = async (user) => axios.post("/auth/login", user);

export const googleAuthResponse = async (user) =>
  axios.post("/auth/google/", user);

export const authResponse = async () => axios.get("/auth/token");

export const changePasswordResponse = async (id, data) =>
  axios.put(`/auth/change-password/${id}`, data);
