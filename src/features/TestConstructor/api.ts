import { apiRoot } from "@/app/api"
import { QuestionUpdateState, TestFileState } from "./type"
import { uploadImageAndGetUrl, notImage } from "./model/image.service"

export const api = {
  createTest: async (question: TestFileState) => {
    if (question.questionImageRequest.image) {
      const questionImageUrl = await uploadImageAndGetUrl(question)
      return apiRoot.post("api/question/save-with-image", questionImageUrl)
    }
    const questionNoImage = notImage(question)
    return apiRoot.post("api/question/save", questionNoImage)
  },

  getQuestions: (subjectId: number) => {
    return apiRoot.get(`api/question/getAllQuestionsBySubject/${subjectId}`)
  },

  getQuestionById: (questionId: number) => {
    return apiRoot.get(`api/question/find/by/question/${questionId}`)
  },
  deleteQuestion: (questionId: number) => {
    return apiRoot.delete(`api/question/delete/${questionId}`)
  },
  updateQuestionById: (question: QuestionUpdateState) => {
    return apiRoot.put("api/question/update/question", question)
  },

  upload: (file: File) => {
    return apiRoot.post(
      "s3/upload",
      { file: file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    )
  },
}
