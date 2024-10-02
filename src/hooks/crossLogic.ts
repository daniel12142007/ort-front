import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTrialTestStore } from "@/features/trial-testing/models/store"

export const useNavigateLogic = () => {
  const navigate = useNavigate()
  const { fetchQuestions, fetchSubjects } = useTrialTestStore()
  const [loading, setLoading] = useState(false)
  const [testLoading, setTestLoading] = useState(false)

  const navigateWithFetch = async (page: "prev" | "current") => {
    setLoading(true)
    try {
      const result = await fetchSubjects()
      if (result && result > 0) {
        if (page === "prev") {
          navigate("/main/trial-testing")
        }
      }
    } catch (error) {
      console.error("Ошибка при запросе данных:", error)
    } finally {
      setLoading(false)
    }
  }

  const testNavigate = async (
    page: "prev" | "current",
    subId: number,
    limit: number,
    path: string,
  ) => {
    setTestLoading(true)
    try {
      const result = await fetchQuestions(subId, limit)

      if (result && result > 0) {
        if (page === "prev") {
          navigate(path, { state: { id: subId } })
        }
      }
    } catch (err) {
      console.log(err)
    } finally {
      setTestLoading(false)
    }
  }

  return { loading, navigateWithFetch, testLoading, testNavigate }
}
