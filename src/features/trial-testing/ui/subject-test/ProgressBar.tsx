import styled from "@emotion/styled"
import React from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  totalTime: number
  currentQuestion: number
  questionCount: number
}

const SubjectTest: React.FC<Props> = React.memo(
  ({ currentQuestion, questionCount, totalTime }) => {
    const [time, setTime] = React.useState(totalTime ?? 0)
    const navigate = useNavigate()

    React.useEffect(() => {
      if (totalTime == null) return

      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1000
          } else {
            clearInterval(interval)
            return 0
          }
        })
      }, 1000)

      return () => clearInterval(interval)
    }, [totalTime])

    if (time === 0) {
      alert("К сажелению время закончилась")
      navigate("/main/trial-testing/finish")
    }

    return (
      <div>
        <div>
          <Progress time={time} totalTime={totalTime}>
            <div />
          </Progress>
          <Timer>
            <span>{new Date(time).toISOString().slice(14, 19)}</span>
            <span>
              {currentQuestion}/{questionCount}
            </span>
          </Timer>
        </div>
      </div>
    )
  },
)

export default SubjectTest

const Progress = styled.div<{ time: number; totalTime: number }>`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  height: 13px;
  overflow: hidden;

  & > div {
    border-radius: 10px;
    width: ${({ time, totalTime }) => `${(time / totalTime) * 100}%`};
    height: 100%;
    background-color: #00ff37;
    transition: width 1s linear; // Добавляем плавную анимацию
  }
`
const Timer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 1200px;
  margin-top: 10px;
  font-size: 24px;
`
