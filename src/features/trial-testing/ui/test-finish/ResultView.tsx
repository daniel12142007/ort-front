import React from "react"
import { QuestionState } from "../../types"

interface Props {
  isFull: boolean
  fullTest: QuestionState[]
}

const ResultView: React.FC<Props> = ({ isFull, fullTest }) => {
  return (
    <div
      className={`w-full  overflow-auto flex flex-col gap-5 transition-all duration-1000 px-3 ${
        !isFull && "h-0"
      }`}
    >
      {fullTest.map((obj, index) => (
        <div
          className={`flex gap-5 ${
            index > 0 && "border-t-2 border-dashed border-indigo-800 pt-5"
          }`}
          key={index}
        >
          <span className="text-2xl font-semibold">{index + 1}.</span>
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex gap-5">
              <p className="border border-gray-300 p-4 rounded-xl w-full">
                {obj.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {obj.optionsResponse.map((option, i) => (
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
                    <span className="text-lg font-normal">{i + 1}.</span>
                  </div>
                  <p
                    className={`border border-gray-300 py-1 px-3 rounded-xl  w-full ${
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

export default ResultView
