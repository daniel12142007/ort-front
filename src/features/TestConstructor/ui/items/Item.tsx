import React from "react"
import { BoxQuestion, ItemBox, Paragraph, Question } from "../../style/style"
import { useNavigate } from "react-router-dom"
import nextSVG from "../../../../shared/assets/svg/next.svg"
import { SubjectReq } from "../../type"

const Item: React.FC<SubjectReq> = ({ subjectName, id, questionCount }) => {
  const navigate = useNavigate()

  const create = () => {
    navigate(`/admin/test-list/${id}`)
  }
  return (
    <ItemBox onClick={create}>
      <Paragraph>{subjectName}</Paragraph>
      <BoxQuestion>
        <Question>({questionCount} вопр.)</Question>
        <img src={nextSVG} alt="next" />
      </BoxQuestion>
    </ItemBox>
  )
}

export default Item
