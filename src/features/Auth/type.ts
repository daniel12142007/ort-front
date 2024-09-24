export interface LoginReq {
  email: string
  password: string
}

export interface LoginRes {
  token: string
  role: "ADMIN" | "USER"
}
