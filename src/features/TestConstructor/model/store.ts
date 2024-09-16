import { create } from "zustand";
import { api } from "../api";
import { GetQuestionsListResponse, QuestionReq, SubjectReq, TestFileState } from "../type";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

interface StoreState {
  testArray: TestFileState[];
  subjects: SubjectReq[];
  items: string[];
  loading: boolean;

  setTestArray: (question: TestFileState) => void;
  updateQuestion: (question: TestFileState) => void;

  fetchSubjects: () => Promise<void>;
  fetchItems: () => Promise<void>;

  questionsList: QuestionReq[];

  getQuestionsList: (subject: number) => Promise<GetQuestionsListResponse>;
  postQuestion: (question: TestFileState[], navigate: NavigateFunction) => void;
}

export const defaultQuestion: TestFileState = {
  id: 1,
  questionImageRequest: { description: "", subjectId: 1 },
  optionImageRequests: [
    { description: "", isCorrect: true },
    { description: "", isCorrect: false },
    { description: "", isCorrect: false },
    { description: "", isCorrect: false },
  ],
};

export const useStore = create<StoreState>((set) => ({
  testArray: [defaultQuestion],
  questionsList: [],
  subjects: [],
  items: [],
  loading: false,

  setTestArray: (question) =>
    set((state) => ({
      testArray: [...state.testArray, { ...question, id: state.testArray.length + 1 }],
    })),

  updateQuestion: (question) =>
    set((state) => ({
      testArray: state.testArray.map((x) => (x.id === question.id ? question : x)),
    })),

  getQuestionsList: async (subjectId) => {
    try {
      const res = await api.getQuestions(subjectId);
      set({ questionsList: res.data });
      return { status: "success", message: "" };
    } catch (err: any) {
      console.log(err);
      if (err.status === 404) {
        return { status: "error", message: "Не удалось найти вопросы" };
      }
      return { status: "error", message: "Произошла ошибка, попробуйте снова" };
    }
  },

  postQuestion: async (questions, navigate) => {
    set({ loading: true });
    for (const question of questions) {
      try {
        const res = await api.createTest(question);
        if (res.status === 200) {
          navigate(`/test-list/${question.questionImageRequest.subjectId}`);
          toast.success("Тест успешно создан");
          () => set({ testArray: [defaultQuestion] });
        }
      } catch (err) {
        console.log(err);
        toast.error("Произошла ошибка, попробуйте снова");
      }
    }
    set({ loading: false });
  },

  fetchSubjects: async () => {
    try {
      const response = await api.getSubjects();
      if (Array.isArray(response.data)) {
        set({ subjects: response.data });
      }
    } catch (err) {
      console.error(err);
    }
  },

  fetchItems: async () => {
    try {
      const response = await api.getSubjects();
      if (Array.isArray(response.data)) {
        const itemNames = response.data.map((subject: SubjectReq) => subject.subjectName);
        set({ items: itemNames });
      } else {
        console.error("Ошибка: полученные данные не являются массивом.");
      }
    } catch (error) {
      console.error("Ошибка при загрузке предметов:", error);
    }
  },
}));
