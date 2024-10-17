import { create } from "zustand"
import { api } from "../api"
import { ArchiveState, PersonState, UpdatePersonState } from "../types"
import { NavigateFunction } from "react-router-dom"
import { toast } from "react-toastify"
import { imageService } from "@/features/user-profile/models/image.service"

interface storeState {
    loading: boolean
    isLoading: boolean
    person: PersonState | null

    fetchPerson: (id: number) => Promise<void>
    updatePerson: (
        userId: number,
        data: UpdatePersonState,
        navigate: NavigateFunction,
    ) => Promise<void>

    archive: ArchiveState[]

    fetchArchive: () => Promise<void>
}

export const useProfileStore = create<storeState>((set) => ({
    loading: false,
    person: null,

    fetchPerson: async (id) => {
        set({ loading: true })
        try {
            const res = await api.getUserProfile(id)
            if (res.status === 200) {
                set({ person: res.data })
            }
        } catch (err) {
            console.log(err)
        } finally {
            set({ loading: false })
        }
    },

    isLoading: false,
    updatePerson: async (userId, data, navigate) => {
        try {
            set({ isLoading: true })
            console.log(data)
            const strImage = data.image === undefined
                ? ""
                : data.image instanceof File
                    ? await imageService(data.image)
                    : data.image;
            console.log(strImage)
            const res = await api.updateUserProfile(userId, { ...data, image: strImage})
            if (res.status === 200) {
                toast.success("Данные обновлены")
                navigate("/main")
            }
            set({ isLoading: false })
        } catch (err) {
            toast.error("Произошла ошибка, попробуйте снова")
            set({ isLoading: false })
            console.log(err)
        }
    },

    archive: [],

    fetchArchive: async () => {
        try {
            const res = await api.getArchive()
            if (res.status === 200) {
                console.log(res.data)
                set({ archive: res.data })
            }
        } catch (err) {
            console.log(err)
        }
    },
}))
