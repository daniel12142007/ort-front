import { apiRoot } from "@/app/api";
import { SubjectReq } from "./type";

export const api = {
    getSubjects: () => {
        return apiRoot.get<SubjectReq[]>('/api/subjects/list/of/subjects')
    }
};