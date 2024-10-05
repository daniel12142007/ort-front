import { QuestionState, SubjectReq } from "@/features/trial-testing/types";
import { create } from "zustand";
import { api } from "../api";

interface storeState {
  questions: QuestionState[];
  count: number;
  loading: boolean;
  subjects: SubjectReq[];

  getQuestions: (subjectId: number, limit: number) => Promise<void>;
}

export const useTrainingTestStore = create<storeState>((set) => ({
  questions: [],
  count: 0,
  loading: false,
  subjects: [],

  getQuestions: async (subjectId: number, limit: number) => {
    set({ loading: true });
    try {
      const res = await api.getQuestionBySubject(subjectId, limit);
      set({ questions: res.data, count: res.data.length });
    } catch (err) {
      console.log(err);
    } finally {
      set({ loading: false });
    }
  },
}));
