class TokenService {
  static setToken(token: string) {
    localStorage.setItem("ort_token", token)
  }

  static getToken() {
    return localStorage.getItem("ort_token")
  }

  static removeToken() {
    localStorage.removeItem("ort_token")
  }

  static hasToken(): boolean {
    return !!this.getToken()
  }
}

export default TokenService
