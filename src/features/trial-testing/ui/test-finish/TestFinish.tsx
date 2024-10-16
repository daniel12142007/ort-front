import { useTrialTestStore } from "../../models/store"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import ResultView from "./ResultView"

const TestFinish = () => {
  const locate = useLocation()
  const navigate = useNavigate()
  const { getTestResult, testResult, fetchFullTestResult, fullTestResult } =
    useTrialTestStore()
  const [isFull, setFull] = React.useState(false)
  const resultId = locate.state.resultId

  React.useEffect(() => {
    console.log(resultId)
    getTestResult(resultId)
  }, [])

  const openFullTestResult = () => {
    if (!isFull) {
      fetchFullTestResult(resultId)
      if (fullTestResult) {
        setFull(true)
      }
    } else {
      setFull(false)
    }
  }
  const nav = () => {
    navigate("/main/trial-testing")
  }

  return (
    <div className="flex flex-col gap-8 rounded-xl items-center bg-white w-10/12 mx-auto my-5 p-5">
      <CircleProgressBar
        progress={testResult?.percent}
        success={testResult?.correct}
        total={testResult?.sumQuestion}
      />
      <div className="flex gap-10">
        <div className="flex items-center gap-3">
          <span className="bg-[#0dff00] w-3 h-3 rounded-full" />
          <p>Отлично</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-[#ff9d00] w-3 h-3 rounded-full" />
          <p>Хорошо</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-[#ff0000] w-3 h-3 rounded-full" />
          <p>Плохо</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <div className="flex items-center gap-4">
          <span className="bg-[#0dff00] w-3 h-3 rounded-full" />
          <p>Правильные ответы: {testResult?.correct}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-[#ff0000] w-3 h-3 rounded-full" />
          <p>Неправильные ответы: {testResult?.notCorrect}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-2/6">
        <button
          className="bg-[#407bff] px-7 py-2 rounded-lg text-white hover:bg-[#0d66ff] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.3)]"
          onClick={openFullTestResult}
        >
          {isFull ? "Скрыть результат" : "Показать результат"}
        </button>
        <button
          className="border-2 border-black px-7 py-2 rounded-lg hover:bg-gray-100"
          onClick={nav}
        >
          Закрыть
        </button>
      </div>
      {fullTestResult && (
        <ResultView isFull={isFull} fullTest={fullTestResult} />
      )}
    </div>
  )
}

export default TestFinish

const CircleProgressBar = ({
  progress = 0,
  success = 0,
  total = 0,
}: {
  progress?: number
  success?: number
  total?: number
}) => {
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex items-center justify-center">
      <svg className="rotate-[-90deg]" width="120" height="120">
        <circle
          className="text-gray-300"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className={`${
            progress < 33
              ? "text-[#ff0000]"
              : progress < 66
              ? "text-[#ff9d00]"
              : "text-[#0dff00]"
          }`}
          strokeWidth="10"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute text-xl flex flex-col items-center">
        <p>{progress}%</p>
        <p>
          {success} из {total}
        </p>
      </span>
    </div>
  )
}
