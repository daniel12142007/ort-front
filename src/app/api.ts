import TokenService from "@/utils";
import axios from "axios";

const base_url = "http://192.168.68.105:8080/";

export const apiRoot = axios.create({
  baseURL: base_url,
});

// Интерцептор для добавления токена авторизации к каждому исходящему запросу,
// если токен существует, и обработки ошибок запроса.
apiRoot.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
