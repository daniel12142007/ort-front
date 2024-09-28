import { ItemButtonContainer, ItemButtonStyle, TestButton } from "../styles"

import mathematicIcon from "@/shared/assets/icon/mathematic.svg"
// import kyrgyzIcon from "@/shared/assets/icon/kyrgyz.svg"
// import analogyIcon from "@/shared/assets/icon/mathematic.svg"
import React from "react"
import { useNavigate } from "react-router-dom"
import { useSubjectStore } from "../store/subjectStore"

export const TrialTesting = () => {
  const navigate = useNavigate()
  const [active, setActive] = React.useState<number>()
  const { fetchSubjects, subjects, loading, count } = useSubjectStore()

  React.useEffect(() => {
    fetchSubjects()
  }, [])

  const nav = () => {
    navigate(`/main/trial-testing/${active}`)
  }

  const subjectList = subjects.map((subject, i) => (
    <ItemButton
      key={i}
      title={subject.subjectName}
      icon={mathematicIcon}
      iconColor="#9cc5e4"
      active={active === subject.id}
      onClick={() => setActive(subject.id)}
    />
  ))

  return (
    <ItemButtonContainer>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : count === 0 ? (
          <div>Не удалось найти предметы</div>
        ) : (
          subjectList
        )}
      </div>
      <TestButton disabled={!active} onClick={nav}>
        Перейти к тесту
      </TestButton>
    </ItemButtonContainer>
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
    <ItemButtonStyle
      active={active}
      onClick={() => onClick(title)}
      iconColor={iconColor}
    >
      <div>
        <img src={icon} alt="itemIcon" />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </ItemButtonStyle>
  )
}
