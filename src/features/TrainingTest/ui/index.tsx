import mathematicIcon from "@/shared/assets/icon/mathematic.svg"
import React from "react"
import { useTrialTestStore } from "@/features/trial-testing/models/store"
import { useNavigate } from "react-router-dom"
import { useTrainingTestStore } from "../model/store"
import { Container } from "@/shared/ui/Container"

export const TrainingTest = () => {
  const [active, setActive] = React.useState<{
    id: number
    subjectName: string
  }>()
  
  const { subjects, countSub,fetchSubjects } = useTrialTestStore()
  const { getQuestions } = useTrainingTestStore()
  const navigate = useNavigate()

  React.useEffect(() => {
    fetchSubjects()
  }, [])

  const handleSubjectSelect = async () => {
    if (active) {
      await getQuestions(active.id, 10); // Загружаем вопросы
      navigate(`/main/training-test/${active.subjectName}`); // Переходим на страницу с вопросами
    }
  }

  const subjectList = subjects.map((subject, i) => (
    <ItemButton
      key={i}
      title={subject.subjectName}
      icon={mathematicIcon}
      iconColor="#9cc5e4"
      active={active?.id === subject.id}
      onClick={() => setActive(subject === active ? undefined : subject)}
      disabled={subject.questionCount === 0}
    />
  ))

  return (
    <Container>
        <div className="flex mt-5 flex-col gap-4 items-center border border-red-500">
            <div className="flex flex-wrap gap-4">
                {countSub === 0 ? (
                <div>Не удалось найти предметы</div>
                ) : (
                subjectList
                )}
            </div>
            <button
                className="bg-blue-500 text-white px-4 py-2 text-lg rounded-lg shadow-sm hover:bg-blue-600 disabled:bg-blue-300"
                disabled={!active}
                onClick={handleSubjectSelect}
            >
                Перейти к вопросам
            </button>
        </div>
    </Container>
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
    className={`flex w-[30%] p-3 items-center bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer gap-3 disabled:opacity-50 border border-red-500 ${
        active ? "transform scale-105 shadow-[0_0_15px_0px_#407bff]" : ""
    }`}
    onClick={() => onClick(title)}
    >
        <div
            className={`w-[40px] h-[40px] flex items-center justify-center border border-red-500 bg-[${iconColor}]`}
        >
            <img src={icon} alt="itemIcon" className="" />
        </div>
        <div>
            <p className="font-semibold text-gray-800">{title}</p>
        </div>
    </button>
  )
}
