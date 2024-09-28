import { create } from "zustand"
import { api } from "../api"
import { QuestionState, AnswerState } from "../types"

interface storeState {
  loading: boolean
  questions: QuestionState[]
  count: number
  fetchQuestions: (subjectId: number, limit: number) => Promise<void>

  setMyAnswer: (answer: AnswerState) => Promise<void>
  getTestResult: (resultTestId: number) => Promise<void>
}

export const useQuestionStore = create<storeState>((set) => ({
  questions: [],
  count: 0,
  loading: false,

  fetchQuestions: async (subjectId, limit) => {
    try {
      set({ loading: true })
      const response = await api.getQuestions(subjectId, limit)
      if (Array.isArray(response.data)) {
        set({ questions: response.data, count: response.data.length })
      }
    } catch (err) {
      console.log(err)
    } finally {
      set({ loading: false })
    }
  },

  setMyAnswer: async (answer) => {
    try {
      const res = await api.postAnswer(answer)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  },

  getTestResult: async (resultTestId) => {
    try {
      const response = await api.getResult(resultTestId)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  },
}))
