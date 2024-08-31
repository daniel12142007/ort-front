import { create } from "zustand";
import TokenService from "@/utils";

import { NavigateFunction } from "react-router-dom";
import { LoginReq } from "../../type";
import { api } from "../../api";
import axios from "axios";

interface AuthStoreState {
  token: string;
  signIn: (data: LoginReq, navigate: NavigateFunction) => Promise<any>;
}

export const useAuthStore = create<AuthStoreState>(() => ({
  token: TokenService.getToken() || "",

  signIn: async (data, navigate) => {
    try {
      const res = await api.signIn(data);
      if (res.status === 200) {
        TokenService.setToken(res.data.token);
        navigate("/");
        return { status: "success", message: "Аутентификация прошла успешно" };
      }
      return { status: "error", message: "Произошла ошибка, попробуйте снова." };
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        return { status: "error", message: "Неверный логин или пароль" };
      }
      return { status: "error", message: "Произошла ошибка, попробуйте снова." };
    }
  },
}));

// Интерцептор для добавления токена авторизации к каждому исходящему запросу,
// если токен существует, и обработки ошибок запроса.
axios.interceptors.request.use(
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
