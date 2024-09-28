import React from "react"
import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"

import { useQuestionStore } from "../../store/questionStore"

import ProgressBar from "./ProgressBar"
import { AnswerState } from "../../types"

const TestController = () => {
  const navigate = useNavigate()
  const { questions, count, setMyAnswer } = useQuestionStore()
  const [current, setCurrent] = React.useState(0)
  const [myChoise, setChoise] = React.useState<AnswerState>()

  const changePage = () => {
    if (current < count - 1) {
      setCurrent(current + 1)
    }
    if (myChoise) {
      setMyAnswer(myChoise)
    }
  }
  const testFinish = () => {
    navigate(`/main/trial-testing/finish/${myChoise?.testId}`)
  }

  return (
    <div>
      {questions && count > 0 && (
        <ProgressBar
          totalTime={count * 18000}
          currentQuestion={current + 1}
          questionCount={count}
        />
      )}
      <TestControllerStyle>
        {questions ? (
          <>
            {questions.map((question, i) => (
              <QuestBlock active={current === i}>
                <Question>
                  <p>{question.description}</p>
                </Question>
                <Options>
                  {question.optionsResponse.map((option, i) => (
                    <Option
                      key={i}
                      active={myChoise?.optionId === option.id}
                      onClick={() =>
                        setChoise({
                          questionId: question.questionId,
                          optionId: option.id,
                          testId: question.testId,
                        })
                      }
                    >
                      <p>{option.description}</p>
                    </Option>
                  ))}
                </Options>
              </QuestBlock>
            ))}
          </>
        ) : (
          <div>Loading...</div>
        )}
        <ButtonsContainer>
          <button onClick={() => testFinish()}>Завершить</button>

          {current !== count - 1 && (
            <button onClick={() => changePage()}>
              {!!myChoise && current === count - 1 ? "Завершить" : "Далее"}
            </button>
          )}
        </ButtonsContainer>
      </TestControllerStyle>
    </div>
  )
}

export default TestController

const TestControllerStyle = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > button {
    padding: 7px 20px;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
    &:active {
      transform: scale(0.95);
    }
    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  & > button:nth-of-type(1) {
    background-color: #ff9c40;
  }
  & > button:nth-of-type(2) {
    background-color: #407bff;
  }
`

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
