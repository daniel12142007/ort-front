import { api } from "../api"
import { toast } from "react-toastify"

export const imageService = async (file: File) => {
    try {
        console.log(file)
        const res = await api.setImage(file)
        if (res.status === 200) {
            return res.data as string
        }
        console.log(res)
        toast.error("Не удалось загрузить изображение")
        return "error"
    } catch (err) {
        console.log(err)
        toast.error("Не удалось загрузить изображение")
        return "error"
    }
}