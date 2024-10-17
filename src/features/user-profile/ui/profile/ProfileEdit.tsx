import React from "react"

import { Avatar, LoaderDots } from "@/shared/ui"
import { PersonState, UpdatePersonState } from "../../types"
import { useForm } from "react-hook-form"
import { useProfileStore } from "../../models/store"
import { useSchoolsStore } from "@/features/Schools/model/store"
import { useNavigate } from "react-router-dom"

import { useHandleFile } from "@/hooks/fileResizer"

interface Props {
    setEdit: (e: boolean) => void
    person: PersonState
}

const ProfileEdit: React.FC<Props> = ({ setEdit, person }) => {
    const navigate = useNavigate()
    const { fetchSchools, schools } = useSchoolsStore()
    const { updatePerson , isLoading } = useProfileStore()
    const [schoolsPerson, setSchoolsPerson] = React.useState<number>(schools.find((x) => x.name === person.schoolName)?.id || 0)
    const { image, ...personWithoutImage } = person
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<UpdatePersonState>({
        defaultValues: personWithoutImage,
    })

    const { handelFile, resizedFile, resizedUrl} = useHandleFile()

    const onSubmit = (data: UpdatePersonState) => {
        updatePerson(
            person.userId,
            {
                schoolId: schoolsPerson,
                name: data.name,
                age: data.age,
                phoneNumber: data.phoneNumber,
                image: resizedFile || person.image,
            },
            navigate,
        )
    }

    React.useEffect(() => {
        fetchSchools()
    }, [])

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center"
        >
            <div className="flex flex-col items-center p-4 gap-1">
                <Avatar name={person.name} size={100} newUrl={resizedUrl ? resizedUrl : ""} photoUrl={image} />
                <label
                    className="text-lg text-[#007aff] font-medium cursor-pointer"
                    htmlFor="avatar"
                >
                    Изменить фото
                    <img src="" alt="" />
                </label>
                <input
                    type="file"
                    className="hidden"
                    id="avatar"
                    onChange={handelFile}
                />
            </div>

            <div className="flex flex-col items-center gap-1 sm:p-1 p-5 w-full">
                <h1 className="text-xl text-center">Персональные информация</h1>
                <div className="flex flex-col sm:w-10/12 md:w-8/12 w-1/2">
                    <label htmlFor="name" className="text-zinc-500 font-semibold">
                        ФИО
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="border-2 border-gray-500 rounded-md px-3 py-1 outline-blue-500"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>
                <div className="flex flex-col sm:w-10/12 md:w-8/12 w-1/2">
                    <label htmlFor="age" className="text-zinc-500 font-semibold">
                        Возраст
                    </label>
                    <input
                        id="age"
                        type="number"
                        {...register("age")}
                        className="border-2 border-gray-500 rounded-md px-3 py-1 outline-blue-500"
                    />
                    {errors.age && (
                        <p className="text-red-500 text-sm">{errors.age.message}</p>
                    )}
                </div>
                <div className="flex flex-col sm:w-10/12 md:w-8/12 w-1/2">
                    <label htmlFor="school" className="text-zinc-500 font-semibold">
                        Школа
                    </label>
                    <select
                        id="school"
                        defaultValue={schoolsPerson}
                        className="border-2 border-gray-500 rounded-md px-3 py-1 outline-blue-500"
                        onChange={(e) => setSchoolsPerson(Number(e.target.value))}
                    >
                        {schools.map((school, index) => (
                            <option key={index} value={school.id}>
                                {school.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col sm:w-10/12 md:w-8/12 w-1/2">
                    <label htmlFor="phone_number" className="text-zinc-500 font-semibold">
                        Номер телефона
                    </label>
                    <input
                        id="phone_number"
                        type="text"
                        {...register("phoneNumber")}
                        placeholder="+996 (700) 000 000"
                        className="border-2 border-gray-500 rounded-md px-3 py-1 outline-blue-500"
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
                    )}
                </div>
            </div>
            <div className="flex w-full justify-center gap-10 p-5">
                <button
                    type="submit"
                    className="bg-[#407bff] w-1/3 text-white px-5 py-2 rounded-lg
                        shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-blue-600 flex justify-center items-center">
                    {isLoading ? <LoaderDots/> : "Сохранить"}
                </button>
                <button
                    type="button"
                    onClick={() => setEdit(false)}
                    className="bg-[#407bff] w-1/3 text-white px-5 py-2 rounded-lg
                        shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-blue-600"
                >
                    Назад
                </button>
            </div>
        </form>
    )
}

export default ProfileEdit
