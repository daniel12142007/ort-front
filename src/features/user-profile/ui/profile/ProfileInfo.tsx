import { Avatar } from "@/shared/ui"
import { PersonState } from "../../type"

interface Props {
  setEdit: (e: boolean) => void
  person: PersonState
}

const ProfileInfo: React.FC<Props> = ({ setEdit, person }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center p-5 gap-3">
        <Avatar
          name="Асанов Али Жанарович"
          size={100}
          photoUrl={person.image}
        />
        <h5 className="text-xl font-semibold">{person.name}</h5>
      </div>
      <h1 className="sm:text-sm font-semibold text-xl text-center -mb-5">
        Персональные информация
      </h1>

      <div className="flex flex-col items-start sm:p-2 sm:py-5 p-5 sm:text-[14px]">
        <div className="flex sm:gap-1 items-center gap-5 border-b-2 w-full py-2 sm:px-1 px-10">
          <span className="text-gray-500 font-medium">ФИО :</span>
          <p className="sm:text-[12px] text-lg font-medium">{person.name}</p>
        </div>
        <div className="flex sm:gap-1 items-center gap-5 border-b-2 w-full py-2 sm:px-1 px-10">
          <span className="text-gray-500 font-medium">Возраст :</span>
          <p className="sm:text-[12px] text-lg font-medium">{person.age}</p>
        </div>
        <div className="flex sm:gap-1 items-center gap-5 border-b-2 w-full py-2 sm:px-1 px-10">
          <span className="text-gray-500 font-medium">Школа :</span>
          <p className="sm:text-[12px] text-lg font-medium">{person.school}</p>
        </div>
        <div className="flex sm:gap-1 items-center gap-5 border-b-2 w-full py-2 sm:px-1 px-10">
          <span className="text-gray-500 font-medium">Номер телефона :</span>
          <p className="sm:text-[12px] text-lg font-medium">
            {person.phone_number}
          </p>
        </div>
      </div>
      <button
        onClick={() => setEdit(true)}
        className="ml-auto m-5 bg-[#407bff] text-white px-5 py-2 rounded-lg shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-blue-600"
      >
        Редактировать
      </button>
    </div>
  )
}

export default ProfileInfo
