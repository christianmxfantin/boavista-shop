import axios from "./axios";

export const getRoles = async () => axios.get("/roles");
