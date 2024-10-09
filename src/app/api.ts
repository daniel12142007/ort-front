import TokenService from "@/utils"
import axios from "axios"

const base_url = "http://ec2-54-173-142-201.compute-1.amazonaws.com:8080/";


export const apiRoot = axios.create({
  baseURL: base_url,
})

// Интерцептор для добавления токена авторизации к каждому исходящему запросу,
// если токен существует, и обработки ошибок запроса.
apiRoot.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
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
