import mathematicIcon from "@/shared/assets/icon/mathematic.svg"
import React from "react"
import { useTrialTestStore } from "../models/store"
import { Container } from "@/shared/ui/Container"


import { useNavigateLogic } from "@/hooks/crossLogic"
import { useNavigate } from "react-router-dom"

export const TrialTesting = () => {
  const navigate = useNavigate()
  const [active, setActive] = React.useState<{
    id: number
    subjectName: string
  }>()
  const { subjects, countSub } = useTrialTestStore()
  const { navigateWithFetch, loading, testLoading } =
    useNavigateLogic()

  React.useEffect(() => {
    if (subjects.length === 0) {
      navigateWithFetch("current")
    }
  }, [])

  const nav = () => {
    if (!active) return
    navigate(`${active.subjectName}`, { state: active.id})
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
      <Container>
        <div className="flex mt-5 flex-col gap-4 items-center">
          <div className="flex flex-wrap gap-2 md:gap-5 w-full lg:gap-4">
        {loading ? (
          <div>Loading...</div>
        ) : countSub === 0 ? (
          <div>Не удалось найти предметы</div>
        ) : (
          subjectList
        )}
          </div>
      </div>
        <div className="flex justify-center mt-5">
      <button
        className="bg-blue-500 text-white mx-auto w-1/3 px-4 py-2 text-lg rounded-lg shadow-sm hover:bg-blue-600 disabled:bg-blue-300"
        disabled={!active || testLoading}
        onClick={nav}
      >
        Пройти тест
      </button>
        </div>
      </Container>
  )
}

const ItemButton: React.FC<{
  title: string;
  icon: string;
  iconColor: string;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}> = ({ title, icon, iconColor, active, onClick, disabled }) => {
  return (
      <button
          disabled={disabled}
          className={`flex flex-col md:flex-row w-[48.5%] lg:w-[32.4%] items-center bg-white shadow-lg rounded-lg 
      overflow-hidden cursor-pointer md:gap-4 disabled:opacity-50 
      ${ active ? "transform scale-105 shadow-[0_0_15px_0px_#407bff]" : ""}`}
          onClick={onClick}
      >
        <div className={`bg-[${iconColor}] flex justify-center items-center bg-[#9AB6FF] w-full md:w-[30%] h-20`}>
          <img src={icon} alt="itemIcon" className="w-full h-full flex items-center m-2 justify-center" />
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-[16px] m-3 md:m-0 md:text-[20px]">{title}</p>
        </div>
      </button>
  );
};
