import TokenService from "@/utils"
import axios from "axios"

if (!import.meta.env.VITE_BASE_URL) {
  throw new Error("VITE_BASE_URL is not defined in .env file")
}

const base_url = import.meta.env.VITE_BASE_URL

export const apiRoot = axios.create({
  baseURL: base_url,
})

// Интерцептор для добавления токена авторизации к каждому исходящему запросу,
// если токен существует, и обработки ошибок запроса.
apiRoot.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken()
    const userToken = TokenService.getUser()
    if (token || userToken?.token) {
      config.headers.Authorization = `Bearer ${token || userToken?.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Интерцептор для обработки ошибок ответа.
apiRoot.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      TokenService.removeToken()
    }
    return Promise.reject(error)
  },
)
