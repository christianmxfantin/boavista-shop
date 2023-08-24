import axios from "./axios";

export const getCardCompaniesResponse = async () =>
  axios.get("/card-companies");

export const getCardCompanyByIdResponse = async (id) =>
  axios.get(`/card-companies/${id}`);

export const createCardCompanyResponse = async (cardCompany) =>
  axios.post("/card-companies", cardCompany);

export const updateCardCompanyResponse = async (id, cardCompany) =>
  axios.put(`/card-companies/${id}`, cardCompany);

export const deleteCardCompanyResponse = async (id) =>
  axios.delete(`/card-companies/${id}`);
