import axios from "./axios";

export const getRoles = async () => axios.get("/roles");

export const getRoleById = async (id) => axios.get(`/roles/${id}`);
