import { Avatar } from "@/shared/ui"

interface Props {
  setEdit: (e: boolean) => void
}

const ProfileInfo: React.FC<Props> = ({ setEdit }) => {
  return (
    <div className="flex flex-col relative">
      <button
        onClick={() => setEdit(true)}
        className="absolute top-10 right-8 bg-[#407bff] text-white px-5 py-2 rounded-lg shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-blue-600"
      >
        Редактировать
      </button>
      <div className="flex flex-col items-center p-5 gap-3">
        <Avatar name="Асанов Али Жанарович" size={100} />
        <h5 className="text-xl font-semibold">Асанов Али Жанарович</h5>
      </div>
      <h1 className="text-xl text-center -mb-5">Персональные информация</h1>

      <div className="flex flex-col items-start p-5">
        <div className="flex gap-5 border-b-2 w-full py-2 px-10">
          <span className="text-gray-500 font-medium">ФИО :</span>
          <p className="text-lg font-medium">Асанов Али Жанарович</p>
        </div>
        <div className="flex gap-5 border-b-2 w-full py-2 px-10">
          <span className="text-gray-500 font-medium">Возраст :</span>
          <p className="text-lg font-medium">19 лет</p>
        </div>
        <div className="flex gap-5 border-b-2 w-full py-2 px-10">
          <span className="text-gray-500 font-medium">Школа :</span>
          <p className="text-lg font-medium">Лицеи №1 имени Ленина</p>
        </div>
        <div className="flex gap-5 border-b-2 w-full py-2 px-10">
          <span className="text-gray-500 font-medium">Номер телефона :</span>
          <p className="text-lg font-medium">+7 (999) 999-99-99</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
