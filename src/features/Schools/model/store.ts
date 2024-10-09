import { create } from "zustand";
import { api } from "../api";
import { SchoolRes } from "../type";
import { toast } from "react-toastify";

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
            set((state) => ({
                schools: [...state.schools, res.data],
            }))
            toast.success("Школа успешно добавлена.");
        } catch (err) {
            console.log(err);
            toast.error("Ошибка при добавлении школы.");
        }
    },
    deleteSchool: async (id) => {
        try {
            const res = await api.deleteSchool(id);
            set((state) => ({
                schools: state.schools.filter((school) => school.id !== id),
            }))
            toast.success("Школа успешно удалена.");
        } catch (err) {
            console.log(err);
            toast.error("Ошибка при удалении школы.");
        }
    },
    updateSchool: async (data: SchoolRes) => {
        try {
            const res = await api.updateSchool(data);
            set((state) => ({
                schools: state.schools.map((school) =>
                    school.id === data.id ? res.data : school 
                ),
            }));
            toast.success("Школа успешно обновлена.");
        } catch (err) {
            console.log(err);
            toast.error("Ошибка при обновлении школы.");
        }
    },
    
}))