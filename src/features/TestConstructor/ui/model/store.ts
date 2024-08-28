import { create } from "zustand";
import { TestState } from "../../type";

interface StoreState {
  testArray: TestState[];
  setTestArray: (question: TestState) => void;
  updateQuestion: (question: TestState) => void;
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
  setTestArray: (question: TestState) =>
    set((state) => ({ testArray: [...state.testArray, { ...question, id: state.testArray.length + 1 }] })),
  updateQuestion: (question: TestState) =>
    set((state) => ({ testArray: state.testArray.map((x) => (x.id === question.id ? question : x)) })),
}));
