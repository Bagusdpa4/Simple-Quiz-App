import axios from "axios";
import { CookieStorage, CookiesKeys } from "./cookie";
import { showErrorToast } from "../helper/ToastHelper";

const http = axios.create({
  baseURL: import.meta.env.VITE_QUIZ_SERVER,
  timeout: 30000,
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = CookieStorage.get(CookiesKeys.AuthToken) || null;
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } 
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const errorMessage = error.response.data.message || "Unauthenticated";
      
      showErrorToast(errorMessage);
      CookieStorage.remove(CookiesKeys.AuthToken);

      window.location.href = "/";
    }
    
    return Promise.reject(error);
  }
);

export default http;
