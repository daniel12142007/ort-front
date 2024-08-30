import { apiRoot } from "@/app/api";
import { AdminSignInState } from "./type";
import { NavigateFunction } from "react-router-dom";
import TokenService from "@/utils";

export const signIn = async ({ data, navigate }: { data: AdminSignInState; navigate: NavigateFunction }) => {
  try {
    const res = await apiRoot.post("api/v1/auth/sign-in", data);
    if (res.status === 200) {
      TokenService.setToken(res.data.token);
      navigate("/");
      return { status: "success" };
    }
    return { status: "error", message: "Произошла ошибка, попробуйте снова." };
  } catch (err: any) {
    if (err.response && err.response.status === 401) {
      return { status: "error", message: "Неверный логин или пароль" };
    }
    return { status: "error", message: "Произошла ошибка, попробуйте снова." };
  }
};
