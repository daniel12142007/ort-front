import { create } from "zustand";
import { api } from "../api"; 
import { SubjectReq, TestState } from "../type";

interface StoreState {
  testArray: TestState[];
  subjects: string[];
  items: string[];
  setTestArray: (question: TestState) => void;
  updateQuestion: (question: TestState) => void;
  fetchSubjects: () => void;
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
  items: [],
  
  setTestArray: (question: TestState) =>
    set((state) => ({
      testArray: [...state.testArray, { ...question, id: state.testArray.length + 1 }]
    })),
  
  updateQuestion: (question: TestState) =>
    set((state) => ({
      testArray: state.testArray.map((x) => (x.id === question.id ? question : x))
    })),

  fetchSubjects: async () => {
    const response = await api.getSubjects();
    if (Array.isArray(response.data)) {
      const subjects = response.data.map((subject: SubjectReq) => subject.subjectName);
      set({ subjects });
    } else {
      console.error("Ошибка: полученные данные не являются массивом.");
    }
  },

  fetchItems: async () => {
    try {
      const response = await api.getSubjects();
      console.log("API Response:", response.data);
      if (Array.isArray(response.data)) {
        const itemNames = response.data.map((subject: SubjectReq) => subject.subjectName);
        set({ items: itemNames });
      } else {
        console.error("Ошибка: полученные данные не являются массивом.");
      }
    } catch (error) {
      console.error("Ошибка при загрузке предметов:", error);
    }
  }
}));
