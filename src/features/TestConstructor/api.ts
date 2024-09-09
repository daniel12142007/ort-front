import { apiRoot } from "@/app/api";
import { SubjectReq } from "./type";
import { TestState } from "./type";

export const api = {
  createTest: (data: TestState) => {
    return apiRoot.post("api/question/save", data);
  },
  getQuestions: (subject: string) => {
    return apiRoot.get(`api/question/getAllQuestionsBySubject?subjectName=${subject}`);
  },
  getSubjects: () => {
    return apiRoot.get<SubjectReq>("/api/subjects/list/of/subjects");
  },
};
