import { create } from "zustand"
import { api } from "../api"
import { PersonState, UpdatePersonState, ArchiveState } from "../types"
import { NavigateFunction } from "react-router-dom"
import { toast } from "react-toastify"

interface storeState {
  loading: boolean
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

  updatePerson: async (userId, data, navigate) => {
    try {
      console.log(data)
      const res = await api.updateUserProfile(userId, data)
      if (res.status === 200) {
        toast.success("Данные обновлены")
        navigate("/main")
      }
    } catch (err) {
      toast.error("Произошла ошибка, попробуйте снова")
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
