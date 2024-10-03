import { Avatar } from "@/shared/ui/AvatarImage"

interface Props {
  setEdit: (e: boolean) => void
}

const ProfileEdit: React.FC<Props> = ({ setEdit }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center p-4 gap-1">
        <Avatar name="Асанов Али Жанарович" size={100} />
        <label
          className="text-lg text-[#007aff] font-medium cursor-pointer"
          htmlFor="avatar"
        >
          Изменить фото
          <img src="" alt="" />
        </label>
        <input type="file" className="hidden" id="avatar" />
      </div>

      <div className="flex flex-col items-center gap-1 p-5 w-full">
        <h1 className="text-xl text-center">Персональные информация</h1>
        <div className="flex flex-col w-1/2">
          <label htmlFor="fullName" className="text-zinc-500 font-semibold">
            ФИО
          </label>
          <input
            id="fullName"
            type="text"
            className="border-2 border-gray-500 rounded-md px-3 py-1 outline-blue-500"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="age" className="text-zinc-500 font-semibold">
            Возраст
          </label>
          <input
            id="age"
            type="text"
            className="border-2 border-gray-500 rounded-md px-3 py-1 outline-blue-500"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="school" className="text-zinc-500 font-semibold">
            Школа
          </label>
          <select
            id="school"
            className="border-2 border-gray-500 rounded-md px-3 py-1 outline-blue-500"
          >
            <option>Лицеи №1 имени Ленина</option>
            <option>Лицеи №2 имени Ленина</option>
            <option>Лицеи №3 имени Ленина</option>
          </select>
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="phone_number" className="text-zinc-500 font-semibold">
            Номер телефона
          </label>
          <input
            id="phone_number"
            type="text"
            className="border-2 border-gray-500 rounded-md px-3 py-1 outline-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-center gap-10 p-5">
        <button className="bg-[#407bff] text-white px-5 py-2 rounded-lg shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-blue-600">
          Сохранить
        </button>
        <button
          onClick={() => setEdit(false)}
          className="bg-[#407bff] text-white px-5 py-2 rounded-lg shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-blue-600"
        >
          Назад
        </button>
      </div>
    </div>
  )
}

export default ProfileEdit
