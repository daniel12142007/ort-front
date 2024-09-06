import { create } from "zustand";
import { TestFileState, TestState, QuestionReq, GetQuestionsListResponse } from "../../type";
import { api } from "../../api";
import { toast } from "react-toastify";
import { NavigateFunction } from "react-router-dom";

interface StoreState {
  testArray: TestFileState[];
  setTestArray: (question: TestFileState) => void;
  updateQuestion: (question: TestFileState) => void;

  questionsList: QuestionReq[];

  getQuestionsList: (subject: string) => Promise<GetQuestionsListResponse>;
  postQuestion: (question: TestFileState[], navigate: NavigateFunction) => void;
}

export const defaultQuestion: TestFileState = {
  id: 1,
  questionRequest: { description: "", subjectId: 1 },
  optionRequests: [
    { description: "", isCorrect: true },
    { description: "", isCorrect: false },
    { description: "", isCorrect: false },
    { description: "", isCorrect: false },
  ],
};

export const useStore = create<StoreState>((set) => ({
  testArray: [defaultQuestion],
  questionsList: [],

  setTestArray: (question) =>
    set((state) => ({ testArray: [...state.testArray, { ...question, id: state.testArray.length + 1 }] })),
  updateQuestion: (question) =>
    set((state) => ({ testArray: state.testArray.map((x) => (x.id === question.id ? question : x)) })),

  getQuestionsList: async (subject) => {
    try {
      const res = await api.getQuestions(subject);
      console.log(res);
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
    for (const question of questions) {
      const data: TestState = {
        questionRequest: {
          description: question.questionRequest.description,
          subjectId: question.questionRequest.subjectId,
        },
        optionRequests: question.optionRequests.map((x) => ({
          description: x.description,
          isCorrect: x.isCorrect,
        })),
      };

      try {
        const res = await api.createTest(data);
        console.log(res);
        if (res.status === 200) {
          navigate(`/test-list/${question.questionRequest.subjectId}`);
          toast.success("Тест успешно создан");
          () => set({ testArray: [defaultQuestion] });
        }
      } catch (err) {
        console.log(err);
        toast.error("Произошла ошибка, попробуйте снова");
      }
    }
  },
}));
