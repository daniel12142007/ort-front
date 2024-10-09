import { apiRoot } from "@/app/api"
import { UpdatePersonState } from "./types"

export const api = {
  getUserProfile: (userId: number) => {
    return apiRoot.get(`/api/users/${userId}/profile`)
  },

  updateUserProfile: (userId: number, data: UpdatePersonState) => {
    console.log(data)
    return apiRoot.put(`/api/users/update/by/${userId}`, data)
  },

  getArchive: () => {
    return apiRoot.get(`/api/users/tests`)
  },
}
