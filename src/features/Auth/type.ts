export interface LoginReq {
  email: string
  password: string
}

export interface LoginRes {
  id: number
  token: string
  role: "ADMIN" | "USER"
}
