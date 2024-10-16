import { apiRoot } from "@/app/api";
import { SchoolRes } from "./type";

export const api = {
    getSchools: () => {
        return apiRoot.get("/schools");
    },
    postSchool: (data: any) => {
        return apiRoot.post("/schools", data);
    },
    deleteSchool: (id: number) => {
        return apiRoot.delete(`/schools/${id}`);
    },
    updateSchool: (data: SchoolRes) => {
        return apiRoot.put(`/schools/${data.id}`, {
            name: data.name, district: data.district});
    }
}