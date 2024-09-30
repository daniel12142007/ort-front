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
      navigate("/main/trial-testing/finish/")
    }

    return (
      <div>
        <div className="w-full bg-white rounded-lg h-3 overflow-hidden">
          <div
            className="h-full  bg-[#00ff37] rounded-lg transition-all duration-1000"
            style={{ width: `${(time / totalTime) * 100}%` }}
          />
        </div>

        <div className="flex justify-evenly items-center mt-3 text-sm">
          <span>{new Date(time).toISOString().slice(14, 19)}</span>
          <span>
            {currentQuestion}/{questionCount}
          </span>
        </div>
      </div>
    )
  },
)

export default SubjectTest
