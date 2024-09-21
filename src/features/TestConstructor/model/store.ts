import { create } from "zustand";
import { api } from "../api"; 
import { TestState, SubjectReq } from "../type";

interface StoreState {
  testArray: TestState[];
  subjects: SubjectReq[]
  setTestArray: (question: TestState) => void;
  updateQuestion: (question: TestState) => void;
  fetchItems: () => void;
}

export const defaultQuestion: TestState = {
  id: 1,
  question: "",
  options: [
    { option: "", isTrue: false },
    { option: "", isTrue: false },
    { option: "", isTrue: false },
    { option: "", isTrue: false },
  ],
};

export const useStore = create<StoreState>((set) => ({
  testArray: [defaultQuestion],
  subjects: [],
  
  setTestArray: (question: TestState) =>
    set((state) => ({
      testArray: [...state.testArray, { ...question, id: state.testArray.length + 1 }]
    })),
  
  updateQuestion: (question: TestState) =>
    set((state) => ({
      testArray: state.testArray.map((x) => (x.id === question.id ? question : x))
    })),

  fetchItems: async () => {
    try {
      const response = await api.getSubjects();
      const subjects: SubjectReq[] = response.data;
        set({ subjects});
    } catch (error) {
      console.error("Ошибка при загрузке предметов:", error);
    }
  }
}));
