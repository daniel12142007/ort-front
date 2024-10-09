import { CircleProgressBar } from "@/shared/ui"
import { useLocation } from "react-router-dom"
import { useTrialTestStore } from "@/features/trial-testing/models/store"
import React from "react"

const fullTest = {
  description: "Тест на знание английского языка",
  optionsResponse: [
    {
      description: "Тест на знание английского языка",
      correct: true,
      chose: true,
    },
    {
      description: "Тест на знание английского языка",
      correct: false,
      chose: false,
    },
    {
      description: "Тест на знание английского языка",
      correct: false,
      chose: false,
    },
    {
      description: "Тест на знание английского языка",
      correct: false,
      chose: false,
    },
  ],
}

const FullArchive = () => {
  const { state } = useLocation()
  const { getTestResult, testResult } = useTrialTestStore()
  console.log(testResult)
  React.useEffect(() => {
    getTestResult(Number(state))
  }, [])

  return (
    <div className="flex flex-col gap-8 rounded-xl items-center bg-white w-10/12 mx-auto my-5 p-5">
      <CircleProgressBar
        progress={testResult?.percent}
        success={testResult?.correct}
        total={testResult?.sumQuestion}
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <span className="bg-[#0dff00] w-3 h-3 rounded-full" />
          <p>Правильные ответы: {testResult?.correct}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-[#ff0000] w-3 h-3 rounded-full" />
          <p>Неправильные ответы: {testResult?.notCorrect}</p>
        </div>
      </div>
      {[...new Array(10)].fill(fullTest).map((obj, index) => (
        <div
          className={`flex sm:gap-1 gap-5 w-full ${
            index > 0 && "border-t-2 border-dashed border-indigo-800 pt-5"
          }`}
          key={index}
        >
          <span className="text-2xl sm:text-[16px] font-semibold">
            {index + 1}.
          </span>
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex gap-5">
              <p className="border border-gray-300 p-4 rounded-xl w-full">
                {obj.description}
              </p>
            </div>
            <div className="grid sm:grid-cols-1 grid-cols-2 gap-5">
              {obj.optionsResponse.map((option: any, i: number) => (
                <div key={i} className="flex gap-2 items-start">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full border border-zinc-600
                      ${
                        option.correct && (option.chose || !option.chose)
                          ? "bg-green-500 border-none"
                          : option.chose && !option.correct
                          ? "bg-red-500 border-none"
                          : ""
                      }`}
                    />
                    <span className="text-lg font-normal">
                      {["A", "B", "C", "D"][i]}
                    </span>
                  </div>
                  <p
                    className={`border border-gray-300 py-1 px-3 rounded-xl w-full ${
                      option.correct && (option.chose || !option.chose)
                        ? "border-2 border-green-500"
                        : option.chose && !option.correct
                        ? "border-2 border-red-500"
                        : ""
                    }`}
                  >
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FullArchive
