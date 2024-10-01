import { create } from "zustand";
import { api } from "../api";
import { SchoolRes } from "../type";

interface SchoolsState {
    schools: SchoolRes[];
    isLoading: boolean;
    error: string | null;
    fetchSchools: () => Promise<void>;
    postSchools: (data: any) => Promise<void>;
    deleteSchool: (id: number) => Promise<void>;
    updateSchool: (data: SchoolRes) => Promise<void>;
}
export const useSchoolsStore = create<SchoolsState>((set) => ({
    schools: [],
    isLoading: false,
    error: null,
    fetchSchools: async () => {
        set({ isLoading: true, error: null });
        try {
            const res = await api.getSchools();
            set({ schools: res.data, isLoading: false });
        } catch (error) {
            set({ error: "Something went wrong", isLoading: false });
        }
    },
    postSchools: async (data) => {
        try {
            const res = await api.postSchool(data);
            console.log(res);
            set((state) => ({
                schools: [...state.schools, res.data],
            }))
        } catch (err) {
            console.log(err);
        }
    },
    deleteSchool: async (id) => {
        try {
            const res = await api.deleteSchool(id);
            console.log(res);
            set((state) => ({
                schools: state.schools.filter((school) => school.id !== id),
            }))
        } catch (err) {
            console.log(err);
        }
    },
    updateSchool: async (data: SchoolRes) => {
        try {
            const res = await api.updateSchool(data);
            console.log(res);
            set((state) => ({
                schools: state.schools.map((school) =>
                    school.id === data.id ? res.data : school // Заменяем обновленную школу
                ),
            }));
        } catch (err) {
            console.log(err);
        }
    },
    
}))