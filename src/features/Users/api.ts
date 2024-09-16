import { apiRoot } from "@/app/api";
import { UserRes } from "./type";

export const api = {
    getUser : () => {
        return apiRoot.get<UserRes[]>('/api/users/find/all/user')
    }
}