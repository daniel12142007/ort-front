import styled from "@emotion/styled"
import { useQuestionStore } from "../../store/questionStore"
import React from "react"
import { useParams } from "react-router-dom"

const TestFinish = () => {
  const { getTestResult } = useQuestionStore()
  const { testId } = useParams()

  React.useEffect(() => {
    getTestResult(Number(testId))
  }, [])

  return (
    <TestFinishStyle>
      <Rounded>
        <span>40%</span>
        <p>10 из 20</p>
      </Rounded>
      <Sort>
        <div>
          <span />
          <p>Отлично</p>
        </div>
        <div>
          <span />
          <p>Хорошо</p>
        </div>
        <div>
          <span />
          <p>Плохо</p>
        </div>
      </Sort>
      <Polaris>
        <div>
          <span />
          <p>Правильные ответы: 0</p>
        </div>
        <div>
          <span />
          <p>Неправильные ответы: 0</p>
        </div>
      </Polaris>
      <Buttons>
        <button>Просмотр</button>
        <button>Закрыть</button>
      </Buttons>
    </TestFinishStyle>
  )
}

export default TestFinish

const TestFinishStyle = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: 30px;
  padding: 20px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Rounded = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 50px solid #3e5ecf;

  & > span {
    font-size: 30px;
    font-weight: 600;
  }
  & > p {
    font-size: 18px;
    font-weight: 600;
  }
`

const Sort = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  & > div {
    display: flex;
    align-items: center;
    & > span {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: #3e5ecf;
    }
    & > p {
      font-size: 18px;
      font-weight: 600;
      margin-left: 10px;
    }
  }
`

const Polaris = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin: 40px;

  & > div {
    width: 300px;
    display: flex;
    align-items: center;
    & > span {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: #3e5ecf;
    }
    & > p {
      font-size: 18px;
      font-weight: 600;
      margin-left: 10px;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  & > button:nth-child(1) {
    background-color: #3e5ecf;
    color: #fff;
  }
  & > button:nth-child(2) {
    background-color: #eee;
    color: #000;
  }

  & > button {
    padding: 7px 20px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    width: 200px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
    &:active {
      transform: scale(0.95);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
