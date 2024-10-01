import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { useQuestionStore } from "../../models/questionStore"

import ProgressBar from "./ProgressBar"
import { AnswerState } from "../../types"
import { useNavigateLogic } from "@/hooks/crossLogic"

const TestController = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [modal, setModal] = React.useState(false)
  const [current, setCurrent] = React.useState(0)
  const [myChoise, setChoise] = React.useState<AnswerState>()
  const { testNavigate } = useNavigateLogic()
  const { questions, count, setMyAnswer, loading } = useQuestionStore()

  React.useEffect(() => {
    const id = location.state?.id
    if (!id) navigate("/main/trial-testing")
    testNavigate("current", Number(id), 10, "testing")
  }, [])

  const changePage = () => {
    if (current < count - 1) {
      setCurrent(current + 1)
    }
    if (myChoise) {
      setMyAnswer(myChoise)
    }
  }
  const testFinish = async () => {
    if (myChoise) {
      const res = await setMyAnswer(myChoise)
      if (res === "success") {
        navigate("/main/trial-testing/finish", {
          state: { resultId: myChoise?.testId },
        })
      }
    } else {
      setModal(true)
    }
  }
  function replaceUrl(imageUrl: string | null | undefined): string {
    const oldUrlPart = "http://"
    const newUrlPart = "https://ort-365ceab257f6.herokuapp.com/"

    if (typeof imageUrl === "string" && imageUrl.includes(oldUrlPart)) {
      return imageUrl.replace(oldUrlPart, newUrlPart)
    }

    return imageUrl || ""
  }

  return (
    <div className="relative">
      {loading ? (
        <div>Loading...</div>
      ) : count === 0 ? (
        <div>"Произошла ошибка"</div>
      ) : (
        <div className="flex flex-col w-4/5 m-auto">
          {questions && count > 0 && (
            <ProgressBar
              totalTime={count * 180_000}
              currentQuestion={current + 1}
              questionCount={count}
            />
          )}
          <div className="w-full bg-white rounded-lg p-5">
            {questions ? (
              <>
                {questions.map((question, i) => (
                  <div className={`${i === current ? "" : "hidden"}`} key={i}>
                    <div className="flex flex-col gap-2">
                      <h5 className="text-lg font-semibold">
                        Вопрос №{i + 1}:
                      </h5>
                      <div className="border border-[#eaeaea] rounded-lg p-2 bg-[#f9f9f9] flex gap-5">
                        <p className="font-semibold text-lg first-letter:capitalize">
                          {question.description}
                        </p>
                        {question.image && (
                          <div className="h-[100px]">
                            <img
                              src={replaceUrl(question.image)}
                              alt={`image-${i}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="py-5 grid grid-cols-2 gap-5">
                      {question.optionsResponse.map((option, i) => (
                        <div
                          key={i}
                          className="flex gap-5 items-start"
                          onClick={() =>
                            setChoise({
                              questionId: question.questionId,
                              optionId: option.id,
                              testId: question.testId,
                            })
                          }
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="option"
                              checked={myChoise?.optionId === option.id}
                            />
                            <span className="text-[22px] font-[500]">
                              {["А", "Б", "В", "Г"][i]}
                            </span>
                          </div>
                          <div
                            className={`${
                              myChoise?.optionId === option.id
                                ? "bg-zinc-200"
                                : "bg-[#f9f9f9]"
                            } border border-[#eaeaea] rounded-lg p-3 flex-1 flex gap-5`}
                          >
                            <p className="first-letter:capitalize">
                              {option.description}
                            </p>
                            {option.image && (
                              <div className="h-[100px]">
                                <img
                                  src={replaceUrl(option.image)}
                                  alt={`image-${i}`}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div>Loading...</div>
            )}
            <div className="flex justify-evenly items-center">
              <button
                className="py-2 px-5 bg-[#ff9c40] rounded-lg text-white font-[500] text-lg cursor-pointer shadow-lg transition-all duration-200 active:scale-95 hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => testFinish()}
              >
                Завершить
              </button>

              {current !== count - 1 && (
                <button
                  className="py-2 px-5 bg-[#407bff] rounded-lg text-white font-[500] text-lg cursor-pointer shadow-lg transition-all duration-200 active:scale-95 hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => changePage()}
                  disabled={!myChoise}
                >
                  {!!myChoise && current === count - 1 ? "Завершить" : "Далее"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[rgb(0,0,0,.3)] ${
          !modal && "hidden"
        }`}
      >
        <div className="bg-white p-5 rounded-lg">
          <h1>Вы уверены что хотите завершить тест</h1>
          <div className="flex gap-5 items-center justify-center">
            <button className="bg-blue-400" onClick={() => setModal(false)}>
              Назад
            </button>
            <button
              className="bg-blue-400"
              onClick={() => navigate("/main/trial-testing")}
            >
              Завершить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestController
