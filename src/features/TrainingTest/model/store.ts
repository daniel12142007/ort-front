import { create } from "zustand";
import { api } from "../api";
import { QuestionState, SubjectReq } from "@/features/trial-testing/types";

interface StoreState {
  questions: QuestionState[];
  count: number;
  loading: boolean;
  subjects: SubjectReq[];
  questionsLoaded: boolean;
  questionsPerPage: number; // Добавлено сюда
  getQuestions: (subjectId: number, page: number) => Promise<void>;
}

export const useTrainingTestStore = create<StoreState>((set) => ({
  questions: [],
  count: 0,
  loading: false,
  subjects: [],
  questionsLoaded: false,
  questionsPerPage: 15, // Установите значение здесь

  getQuestions: async (subjectId: number, page: number) => {
    set({ loading: true });
    try {
      const res = await api.getQuestionBySubject(subjectId, page);
      set(() => ({
        questions: res.data, // добавляем новые вопросы к существующим
        count: res.data.length, // Обновляем количество вопросов
        questionsLoaded: true,
      }));
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      set({ loading: false });
    }
  },
}));
