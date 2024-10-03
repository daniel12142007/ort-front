import mathematicIcon from "@/shared/assets/icon/mathematic.svg"
import React from "react"
import { useNavigate } from "react-router-dom"
import { useSubjectStore } from "../models/subjectStore"

export const TrialTesting = () => {
  const navigate = useNavigate()
  const [active, setActive] = React.useState<{
    id: number
    subjectName: string
  }>()
  const { fetchSubjects, subjects, loading, count } = useSubjectStore()

  React.useEffect(() => {
    if (subjects.length === 0) {
      fetchSubjects()
    }
  }, [])

  const nav = () => {
    navigate(`${active?.subjectName}`, {
      state: { active },
    })
  }

  const subjectList = subjects.map((subject, i) => (
    <ItemButton
      key={i}
      title={subject.subjectName}
      icon={mathematicIcon}
      iconColor="#9cc5e4"
      active={active?.id === subject.id}
      onClick={() => setActive(subject)}
    />
  ))

  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <div className="grid grid-cols-3 gap-4 md:grid-cols-2">
        {loading ? (
          <div>Loading...</div>
        ) : count === 0 ? (
          <div>Не удалось найти предметы</div>
        ) : (
          subjectList
        )}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 text-lg rounded-lg shadow-sm hover:bg-blue-600 disabled:bg-blue-300"
        disabled={!active}
        onClick={nav}
      >
        Перейти к тесту
      </button>
    </div>
  )
}

const ItemButton: React.FC<{
  title: string
  icon: string
  iconColor: string
  active: boolean
  onClick: (e: string) => void
}> = ({ title, icon, iconColor, active, onClick }) => {
  return (
    <div
      className={`flex items-center bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer gap-3 ${
        active && "transform translate-y-[1px] shadow-[2px_2px_10px_0px_purple]"
      }`}
      onClick={() => onClick(title)}
    >
      <div className={`bg-[${iconColor}] w-[30%] h-full`}>
        <img src={icon} alt="itemIcon" className="w-full h-full" />
      </div>
      <div>
        <p className="font-semibold h-full">{title}</p>
      </div>
    </div>
  )
}
