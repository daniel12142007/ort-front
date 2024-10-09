import { create } from "zustand"
import { api } from "../api"
import { GetQuestionsListResponse, QuestionReq, QuestionUpdateState, TestFileState } from "../type"
import { NavigateFunction } from "react-router-dom"
import { toast } from "react-toastify"

interface StoreState {
  testArray: TestFileState[]
  loading: boolean
  deleteQuestion: (id: number) => void

  setTestArray: (question: TestFileState) => void
  updateQuestion: (question: TestFileState) => void
  updateTest: (data: QuestionUpdateState) => void
  getQuestionById: (question: number) => Promise<QuestionReq | undefined>;

  questionsList: QuestionReq[]

  getQuestionsList: (subject: number) => Promise<GetQuestionsListResponse>
  postQuestion: (question: TestFileState[], navigate: NavigateFunction) => void
}
export const defaultQuestion: TestFileState = {
  id: 0,
  questionImageRequest: {
    description: "",
    subjectId: 1,},
  optionImageRequests: [
    { description: "",isCorrect: true },
    { description: "",isCorrect: false },
    { description: "",isCorrect: false },
    { description: "",isCorrect: false },
  ]
}

export const useStore = create<StoreState>((set) => ({
  testArray: [defaultQuestion],
  questionsList: [], 
  loading: false,

  setTestArray: (question) =>
    set((state) => ({
      testArray: [
        ...state.testArray,
        { ...question, id: state.testArray.length + 1 },
      ],
    })),

  updateQuestion: (question) =>
    set((state) => ({
      testArray: state.testArray.map((q) => (q.id === question.id ? question : q)),
    })),

  getQuestionsList: async (subjectId) => {
    try {
      const res = await api.getQuestions(subjectId)
      set({ questionsList: res.data }) 
      return { status: "success", message: "" }
    } catch (err: any) {
      console.log(err)
      if (err.status === 404) {
        return { status: "error", message: "Не удалось найти вопросы" }
      }
      return { status: "error", message: "Произошла ошибка, попробуйте снова" }
    }
  },

  postQuestion: async (questions, navigate) => {
    set({ loading: true })
    for (const question of questions) {
      try {
        const res = await api.createTest(question)
        if (res.status === 200) {
          navigate(
            `/admin/test-list/${question.questionImageRequest.subjectId}`,
          )
          toast.success("Тест успешно создан")
          ;() => set({ testArray: [] })
        }
      } catch (err) {
        console.log(err)
        toast.error("Произошла ошибка, попробуйте снова")
      }
    }
    set({ loading: false })
  },
  
  deleteQuestion: async (questionId: number) => {
    try {
      const res = await api.deleteQuestion(questionId);
      if (res.status === 200) {
        set((state) => ({
          questionsList: state.questionsList.filter((q) => q.id !== questionId), 
        }));
        toast.success("Вопрос успешно удален");
      }
    } catch (err) {
      console.log(err);
      toast.error("Не удалось удалить вопрос, попробуйте снова");
    }
  },
  getQuestionById: async (questionId: number) => {
    try {
      const res = await api.getQuestionById(questionId);
      if (res.status === 200) {
        return res.data;
      } else {
        console.log(`Ошибка при получении вопроса, статус: ${res.status}`); 
      }
    } catch (err) {
      console.log("Ошибка в getQuestionById:", err);
    }
  },

  updateTest: async (data: QuestionUpdateState) => {
    set({ loading: true }); 
    try {
      console.log("Обновление вопроса с данными:", data);
      const res = await api.updateQuestionById(data);
      if(res.status === 200) {
        toast.success("Вопрос успешно обновлен");
      }
    } catch (err) {
      console.log(err);
      toast.error("Не удалось обновить вопрос, попробуйте снова");
    } finally {
      set({ loading: false });
    }
  },
  
  
}))
