import { create } from "zustand";
import { api } from "../api";
import { UserRes } from "../type";

interface UserState {
  user: UserRes[] | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
}

export const userStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  fetchUser: async () => {
    set({ isLoading: true, error: null });

    try {
      const res = await api.getUser();
      set({ user: res.data, isLoading: false });
    } catch (error) {
      set({ error: "Something went wrong", isLoading: false });
    }
  },
}));
