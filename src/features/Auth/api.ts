import { apiRoot } from "@/app/api";
import { LoginReq, LoginRes } from "./type";

export const api = {
  signIn: (data: LoginReq) => {
    return apiRoot.post<LoginRes>("api/v1/auth/sign-in", data);
  },
};
