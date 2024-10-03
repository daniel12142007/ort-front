export interface LoginReq {
  email: string
  password: string
}

export interface LoginRes {
  token: string
  role: "ADMIN" | "USER"
}

export interface RegisterReq {
  schoolId?: number
  fullName: string
  age: number
  email: string
  passwordOne: string
  passwordTwo: string
}

export interface NewPasswordState {
  email: string
  newPassword: string
  confirmPassword: string
}
