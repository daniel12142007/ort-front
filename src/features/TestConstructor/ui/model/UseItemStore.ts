// useItemStore.ts
import { create } from "zustand";
import { api } from "../../api"; // Ваш API для выполнения запросов
import { SubjectReq } from "../../type"; // Тип для предметов

interface ItemState {
  items: string[];
  fetchItems: () => void;
}

export const useItemStore = create<ItemState>((set) => ({
  items: [],
  fetchItems: async () => {
    try {
      const response = await api.getSubjects(); // GET запрос к вашему API
      console.log("API Response:", response.data); // Проверим, что возвращает API
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
