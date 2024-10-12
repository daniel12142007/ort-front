import { create } from "zustand"
import { api } from "../api"
import {
  QuestionState,
  AnswerState,
  TestResultState,
  SubjectReq,
} from "../types"

interface storeState {
  loading: boolean
  questions: QuestionState[]
  count: number
  fetchQuestions: (subjectId: number, limit: number) => Promise<number | void>

  testResult: TestResultState | null
  setMyAnswer: (answer: AnswerState) => Promise<string>
  getTestResult: (resultTestId: number) => Promise<void>

  fullTestResult: QuestionState[]
  fetchFullTestResult: (testId: number) => Promise<void>

  subjects: SubjectReq[]
  loadingSub: boolean
  countSub: number
  fetchSubjects: () => Promise<number | void>
}

export const useTrialTestStore = create<storeState>((set) => ({
  questions: [],
  count: 0,
  loading: false,

  fetchQuestions: async (subjectId, limit) => {
    try {
      set({ loading: true })
      const response = await api.getQuestions(subjectId, limit)
      if (Array.isArray(response.data)) {
        set({ questions: response.data, count: response.data.length })
        return response.data.length
      }
      return 0
    } catch (err) {
      console.log(err)
      return 0
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

  fullTestResult: [],
  fetchFullTestResult: async (testId) => {
    try {
      console.log(testId)
      const response = await api.getFullResult(testId)
      if (response.status === 200) {
        set({ fullTestResult: response.data })
      }
    } catch (err) {
      console.log(err)
    }
  },

  subjects: [],
  loadingSub: false,
  countSub: 0,

  fetchSubjects: async () => {
    set({ loading: true })
    try {
      const response = await api.getSubjects()
      if (Array.isArray(response.data)) {
        set({ subjects: response.data, countSub: response.data.length })
        return response.data.length
      }
      return 0
    } catch (err) {
      console.error(err)
      return 0
    } finally {
      set({ loading: false })
    }
  },
}))
