import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const reduxLogin = async (input) => {
  return await http.post(API_ENDPOINT.LOGIN, input);
};

export const reduxRegister = async (input) => {
  return await http.post(API_ENDPOINT.REGISTER, input);
};
