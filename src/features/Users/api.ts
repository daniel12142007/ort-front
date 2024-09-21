import { apiRoot } from "@/app/api";
import { UserRes } from "./type";

export const api = {
    getUser : () => {
        return apiRoot.get<UserRes[]>('/api/users/find/all/user')
    },
    getUserById: (userId: number) => {
        return apiRoot.get<UserRes>(`/api/users/find/by/${userId}`)
    },
    deleteUser : (userId: number) => {
        return apiRoot.delete(`/api/users/delete/by/${userId}`)
    }
}