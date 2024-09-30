import { useEffect } from "react"
import { TitleHead, ItemsList } from "../style/style"
import Item from "./items/Item"
import { useSubjectStore } from "@/features/trial-testing/models/subjectStore"

const ItemList = () => {
  const { subjects, fetchSubjects, loading, count } = useSubjectStore()

  useEffect(() => {
    fetchSubjects()
  }, [])

  const subjectList = subjects.map((obj, i) => <Item {...obj} key={i} />)
  return (
    <div>
      <TitleHead>
        <p>Предметы</p>
      </TitleHead>
      <ItemsList>
        {loading ? (
          <div>Loading...</div>
        ) : count === 0 ? (
          <div>Не удалось найти предметы</div>
        ) : (
          subjectList
        )}
        {}
      </ItemsList>
    </div>
  )
}

export default ItemList
