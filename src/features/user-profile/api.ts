import { apiRoot } from "@/app/api"

export const api = {
  getUserProfile: (userId: number) => {
    return apiRoot.get(`/api/users/${userId}/profile`)
  },
}
