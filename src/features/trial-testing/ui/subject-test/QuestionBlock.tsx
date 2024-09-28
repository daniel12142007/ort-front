import React from "react"
import styled from "@emotion/styled"
import { QuestionState } from "../../types"
import { useQuestionStore } from "../../store/questionStore"

interface Props {
  question: QuestionState
  current: boolean
}

const QuestionBlock: React.FC<Props> = ({ question, current }) => {
  const { setMyAnswers, myAnswers } = useQuestionStore()

  const findAnswerId = myAnswers
    .find((x) => x.questionId === question.questionId)
    ?.optionsResponse.find((x) => x.chose === true)?.id!

  const setAnswer = (i: number) => {
    setMyAnswers({
      ...question,
      optionsResponse: question.optionsResponse.map((x) => ({
        ...x,
        chose: x.id === i,
      })),
    })
  }

  return (
    <QuestBlock active={current}>
      <Question>
        <p>{question.description}</p>
      </Question>
      <Options>
        {question.optionsResponse.map((option, i) => (
          <Option
            key={i}
            active={findAnswerId === option.id}
            onClick={() => setAnswer(option.id)}
          >
            <p>{option.description}</p>
          </Option>
        ))}
      </Options>
    </QuestBlock>
  )
}

export default QuestionBlock

const QuestBlock = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;
`

const Question = styled.div`
  background-color: #eee;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
`
const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
`

const Option = styled.div<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#407bff" : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  padding: 20px;
  border-radius: 10px;
`
