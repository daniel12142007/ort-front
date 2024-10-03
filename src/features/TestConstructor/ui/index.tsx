import { useEffect } from "react"
import { TitleHead, ItemsList, Circular } from "../style/style"
import Item from "./items/Item"
import { useSubjectStore } from "@/features/trial-testing/models/subjectStore"
import { CircularProgress } from "@mui/material"

const ItemList = () => {
  const { subjects, fetchSubjects, loading, count } = useSubjectStore()

  useEffect(() => {
    fetchSubjects()
  }, [])

  const subjectList = subjects.map((obj, i) => <Item questionCount={0} key={i} {...obj} />)
  return (
    <div>
      <TitleHead>
        <p>Предметы</p>
      </TitleHead>
      <ItemsList>
        {loading ? (
          <Circular><CircularProgress/></Circular>
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
