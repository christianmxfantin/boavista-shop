import axios from "./axios";

export const registerResponse = async (user) =>
  axios.post("/auth/register", user);

export const loginResponse = async (user) => axios.post("/auth/login", user);

export const googleAuthResponse = async (id) => axios.get(`/auth/google/${id}`);

export const authResponse = async () => axios.get("/auth/token");

export const changePasswordResponse = async (id, data) =>
  axios.put(`/auth/change-password/${id}`, data);
