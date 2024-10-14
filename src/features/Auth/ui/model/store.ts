import { create } from "zustand"
import TokenService from "@/utils"

import { NavigateFunction } from "react-router-dom"
import { LoginReq, NewPasswordState, RegisterReq } from "../../type"
import { api } from "../../api"
import { toast } from "react-toastify"

interface AuthStoreState {
  token: string
  signIn: (data: LoginReq, navigate: NavigateFunction) => Promise<any>
  signUp: (data: RegisterReq, navigate: NavigateFunction) => Promise<any>

  findEmail: (email: string, navigate: NavigateFunction) => Promise<any>
  codeEmail: (
    data: { email: string; code: number },
    navigate: NavigateFunction,
  ) => Promise<any>
  resetPassword: (
    data: NewPasswordState,
    navigate: NavigateFunction,
  ) => Promise<any>
}

export const useAuthStore = create<AuthStoreState>(() => ({
  token: TokenService.getToken() || "",

  signIn: async (data, navigate) => {
    try {
      TokenService.clearLS()
      const res = await api.signIn(data)
      if (res.status === 200) {
        if (res.data.role === "ADMIN") {
          TokenService.setToken(res.data.token)
          navigate("/admin")
        } else if (res.data.role === "USER") {
          TokenService.setUser(res.data.token, res.data.id)
          navigate("/main")
        }
        return { status: "success", message: "Аутентификация прошла успешно" }
      }
      return { status: "error", message: "Произошла ошибка, попробуйте снова." }
    } catch (err: any) {
      console.log(err)
      if (err.response && err.response.status === 401) {
        return { status: "error", message: "Неверный логин или пароль" }
      }
      return { status: "error", message: "Произошла ошибка, попробуйте снова." }
    }
  },

  signUp: async (data, navigate) => {
    try {
      console.log(data)
      const res = await api.signUp(data)
      if (res.status === 200) {
        navigate("/auth/sign-in")
      }
      console.log(res)
    } catch (err: any) {
      if (err.response.data && err.response.status === 400) {
        return err.response.data
      }
    }
  },

  findEmail: async (email, navigate) => {
    try {
      const res = await api.setEmail(email)
      if (res.status === 200) {
        navigate("/auth/forgot-password/code", { state: { email } })
        return { status: "success", message: "Письмо отправлено" }
      }
      return { status: "error", message: "Произошла ошибка, попробуйте снова." }
    } catch (err) {
      console.log(err)
      return { status: "error", message: "Произошла ошибка, попробуйте снова." }
    }
  },

  codeEmail: async (data, navigate) => {
    try {
      const res = await api.setCode(data)
      if (res.status === 200) {
        navigate("/auth/forgot-password/new-password", {
          state: { email: data.email },
        })
        return { status: "success", message: "Код принят" }
      }
      return { status: "error", message: "Произошла ошибка, попробуйте снова." }
    } catch (err) {
      console.log(err)
      return { status: "error", message: "Произошла ошибка, попробуйте снова." }
    }
  },

  resetPassword: async (data, navigate) => {
    try {
      const res = await api.resetPassword(data)
      if (res.status === 200) {
        navigate("/auth/sign-in")
        return { status: "success", message: "Пароль изменен" }
      }
      return { status: "error", message: "Произошла ошибка, попробуйте снова." }
    } catch (err) {
      console.log(err)
      return { status: "error", message: "Произошла ошибка, попробуйте снова." }
    }
  },
}))
