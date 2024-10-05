import { apiRoot } from "@/app/api";

export const api = {
    getQuestionBySubject: (subjectId: number, limit: number) => {
        return apiRoot.get(`/api/question/getAllQuestionsBySubject/${subjectId}`)
    }
}