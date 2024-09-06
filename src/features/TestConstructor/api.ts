import { apiRoot } from "@/app/api";
import { TestState } from "./type";

export const api = {
  createTest: (data: TestState) => {
    return apiRoot.post("api/question/save", data);
  },
  getQuestions: (subject: string) => {
    return apiRoot.get(`api/question/getAllQuestionsBySubject?subjectName=${subject}`);
  },
};
