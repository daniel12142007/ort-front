import { apiRoot } from "@/app/api"
import { UpdatePersonStateImage } from "./types"

export const api = {
    getUserProfile: (userId: number) => {
        return apiRoot.get(`/api/users/${userId}/profile`)
    },

    updateUserProfile: (userId: number, data: UpdatePersonStateImage) => {
        console.log(data)
        return apiRoot.put(`/api/users/update/by/${userId}`, data)
    },

    getArchive: () => {
        return apiRoot.get(`/api/users/tests`)
    },

    setImage: (image: File) => {
        return apiRoot.post("s3/upload",
            { file: image },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
        )
    },
}
