import { useEffect } from "react"
import { TitleHead, ItemsList,} from "../style/style"
import Item from "./items/Item"
import { useTrialTestStore } from "@/features/trial-testing/models/store"

const ItemList = () => {
  const { subjects, fetchSubjects, loadingSub, countSub } = useTrialTestStore()
  console.log(subjects)
  useEffect(() => {
    fetchSubjects()
  }, [])

  const subjectList = subjects.map((obj, i) => {
    const { questionCount, ...rest } = obj; 
    return <Item key={i} {...rest} questionCount={questionCount} />;
  });
  return (
    <div>
      <TitleHead>
        <p>Предметы</p>
      </TitleHead>
      <ItemsList>
        {loadingSub ? (
          <div>Loading...</div>
        ) : countSub === 0 ? (
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
