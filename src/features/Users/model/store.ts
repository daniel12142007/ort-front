import { create } from "zustand";
import { api } from "../api";
import { UserRes,UserDetailRes } from "../type";

interface UserState {
  deleteUser: any;
  user: UserRes[] | null;
  userDetails: UserDetailRes | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  getuserById: (userId: number) => Promise<void>;
}

export const userStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  userDetails: null,
  

  fetchUser: async () => {
    set({ isLoading: true, error: null });

    try {
      const res = await api.getUser();
      set({ user: res.data, isLoading: false });
    } catch (error) {
      set({ error: "Something went wrong", isLoading: false });
    }
  },

  deleteUser: async (id: number) => {
    try{
      await api.deleteUser(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  },

  getuserById: async (userId: number) => {
    set({ isLoading: true, error: null });
    try{
      const res = await api.getUserById(userId);
      set({ userDetails: res.data, isLoading: false });
    }catch(error){
      console.error("Error fetching user:", error);
    }
  }
}));

