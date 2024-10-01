import mathematicIcon from "@/shared/assets/icon/mathematic.svg"
import React from "react"
import { useSubjectStore } from "../models/subjectStore"

import { useNavigateLogic } from "@/hooks/crossLogic"

export const TrialTesting = () => {
  const [active, setActive] = React.useState<{
    id: number
    subjectName: string
  }>()
  const { subjects, count } = useSubjectStore()
  const { navigateWithFetch, loading, testNavigate, testLoading } =
    useNavigateLogic()

  React.useEffect(() => {
    if (subjects.length === 0) {
      navigateWithFetch("current")
    }
  }, [])

  const nav = () => {
    if (!active) return
    testNavigate("prev", active.id, 10, active.subjectName)
  }

  const subjectList = subjects.map((subject, i) => (
    <ItemButton
      key={i}
      title={subject.subjectName}
      icon={mathematicIcon}
      iconColor="#9cc5e4"
      active={active?.id === subject.id}
      onClick={() => setActive(subject == active ? undefined : subject)}
      disabled={subject.questionCount === 0}
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
        disabled={!active || testLoading}
        onClick={nav}
      >
        {testLoading ? "Загрузка..." : "Пройти тест"}
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
  disabled: boolean
}> = ({ title, icon, iconColor, active, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center bg-white shadow-xl rounded-lg overflow-hidden cursor-pointer gap-3 disabled:shadow-none disabled:bg-zinc-300 relative ${
        active &&
        "transform translate-y-[1px] shadow-[2px_2px_10px_0px_#407bff]"
      }`}
      onClick={() => onClick(title)}
    >
      <div className={`bg-[${iconColor}] w-[30%] h-full`}>
        <img src={icon} alt="itemIcon" className="w-full h-full" />
      </div>
      <div>
        <p className="font-semibold h-full">{title}</p>
      </div>
    </button>
  )
}
