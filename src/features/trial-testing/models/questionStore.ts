import { create } from "zustand"
import { api } from "../api"
import { QuestionState, AnswerState, TestResultState } from "../types"

interface storeState {
  loading: boolean
  questions: QuestionState[]
  count: number
  fetchQuestions: (subjectId: number, limit: number) => Promise<void>

  testResult: TestResultState | null
  setMyAnswer: (answer: AnswerState) => Promise<string>
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
      if (res.status === 200) {
        return "success"
      }
      return "error"
    } catch (err) {
      console.log(err)
      return "error"
    }
  },

  testResult: null,
  getTestResult: async (resultTestId) => {
    try {
      const response = await api.getResult(resultTestId)
      if (response.status === 200) {
        set({ testResult: response.data })
      }
    } catch (err) {
      console.log(err)
    }
  },
}))
