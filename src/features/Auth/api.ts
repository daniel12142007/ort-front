import { apiRoot } from "@/app/api"
import { LoginReq, LoginRes, NewPasswordState, RegisterReq } from "./type"

export const api = {
  signIn: (data: LoginReq) => {
    return apiRoot.post<LoginRes>("api/v1/auth/sign-in", data)
  },
  signUp: (data: RegisterReq) => {
    return apiRoot.post("api/v1/auth/register", data)
  },

  setEmail: (email: string) => {
    return apiRoot.post(`api/v1/auth/reset-password/code/${email}`)
  },
  setCode: ({ email, code }: { email: string; code: number }) => {
    return apiRoot.put(`api/v1/auth/confirm/reset/${email}?code=${code}`)
  },
  resetPassword: (data: NewPasswordState) => {
    return apiRoot.put(
      `api/v1/auth/reset/password/${data.email}?newPassword=${data.newPassword}&confirmPassword=${data.confirmPassword}`,
    )
  },
}
