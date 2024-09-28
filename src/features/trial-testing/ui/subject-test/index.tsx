import React from "react"
import { Outlet, useParams } from "react-router-dom"
import { useQuestionStore } from "../../store/questionStore"

const TestPage = () => {
  const { testSubjectId } = useParams()

  const { fetchQuestions, count, loading } = useQuestionStore()
  React.useEffect(() => {
    fetchQuestions(Number(testSubjectId), 10)
  }, [])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : count === 0 ? (
        <NotFoundPage type="notFound" />
      ) : (
        <Outlet />
      )}
    </>
  )
}

export default TestPage

const NotFoundPage = ({ type }: { type: "notFound" | "error" }) => {
  return (
    <div>{type === "notFound" ? "Тест не найден" : "Произошла ошибка"}</div>
  )
}
