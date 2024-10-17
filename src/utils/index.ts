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

    static setUser(token: string, id: number) {
        const user = JSON.stringify({ token, id })
        localStorage.setItem("ort_user", user)
    }

    static getUser() {
        const user = localStorage.getItem("ort_user")
        if (!user) return null
        return JSON.parse(user)
    }

    static removeUser() {
        localStorage.removeItem("ort_user")
    }

    static hasUser(): boolean {
        return !!this.getUser()
    }

    static clearLS() {
        localStorage.clear()
    }
}

export default TokenService

export const getFullFile = (imageUrl: string | null | undefined): string => {
    if (typeof imageUrl === "string") {
        const baseUrl = "http://ec2-54-173-142-201.compute-1.amazonaws.com:8080/s3/image/";
        return `${baseUrl}${imageUrl}`;
    }

    return imageUrl || ""
}
