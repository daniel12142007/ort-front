import { apiRoot } from "@/app/api"
import { TestFileState } from "./type"
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
