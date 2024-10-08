import { apiRoot } from "@/app/api";

export const api = {
    getQuestionBySubject: (subjectId: number, page: number) => {
        return apiRoot.get(`/api/question/getAllQuestionsBySubject/${subjectId}?page=${page}`)
    }
}