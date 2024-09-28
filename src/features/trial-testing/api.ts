import { apiRoot } from "@/app/api"
import { AnswerState, QuestionState, SubjectReq } from "./types"

export const api = {
  getSubjects: () => {
    return apiRoot.get<SubjectReq>("/api/subjects/list/of/subjects")
  },
  getQuestions: (subjectId: number, limit: number) => {
    return apiRoot.post<QuestionState>(
      `/api/question/random/questions/${subjectId}/${limit}`,
    )
  },
  postAnswer: (answer: AnswerState) => {
    const { questionId, optionId, testId } = answer
    return apiRoot.post(
      `api/options/answer/${questionId}/${optionId}/${testId}'`,
    )
  },
  getResult: (resultTestId: number) => {
    return apiRoot.get(`/api/question/result/${resultTestId}`)
  },
}
