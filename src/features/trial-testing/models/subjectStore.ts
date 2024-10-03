import { create } from "zustand"
import { SubjectReq } from "../types"
import { api } from "../api"

interface storeState {
  subjects: SubjectReq[]
  loading: boolean
  count: number
  fetchSubjects: () => Promise<void>
}

export const useSubjectStore = create<storeState>((set) => ({
  subjects: [],
  loading: false,
  count: 0,

  fetchSubjects: async () => {
    set({ loading: true })
    try {
      const response = await api.getSubjects()
      if (Array.isArray(response.data)) {
        set({ subjects: response.data, count: response.data.length })
      }
    } catch (err) {
      console.error(err)
    } finally {
      set({ loading: false })
    }
  },
}))
