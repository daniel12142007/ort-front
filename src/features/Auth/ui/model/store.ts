import { create } from "zustand";
import TokenService from "@/utils";

import { NavigateFunction } from "react-router-dom";
import { LoginReq } from "../../type";
import { api } from "../../api";

interface AuthStoreState {
  token: string;
  signIn: (data: LoginReq, navigate: NavigateFunction) => Promise<any>;
}

export const useAuthStore = create<AuthStoreState>(() => ({
  token: TokenService.getToken() || "",

  signIn: async (data, navigate) => {
    try {
      TokenService.removeToken();
      const res = await api.signIn(data);
      console.log(res);
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
