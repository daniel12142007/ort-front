import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  CreateButton,
  TitleHead,
  TestListStyle,
  NotQuestion,
  KeyBoard,
  Flexing,
} from "../../style/style"
import { AddIcon } from "@/shared/ui/icon"
import TestBlock from "./TestBlock"
import { useStore } from "../../model/store"
import { useTrialTestStore } from "@/features/trial-testing/models/store"
import { GetQuestionsListResponse } from "../../type"

const TestList = () => {
  const navigate = useNavigate()
  const { itemId } = useParams()
  const [status, setStatus] = useState<GetQuestionsListResponse>({
    status: "",
    message: "",
  })
  const { questionsList, getQuestionsList } = useStore()
  const { subjects, fetchSubjects } = useTrialTestStore()

  const subject = subjects.find((subject) => subject.id === Number(itemId))

  // Вынесем рендеринг вопросов в функцию
  const questionList = questionsList.map((item, i) => (
    <TestBlock key={i} data={item} index={i + 1} refreshQuestions={() => getItem(Number(itemId))} />
  ))

  useEffect(() => {
    fetchSubjects()
    getItem(Number(itemId))
  }, [])

  const getItem = async (subjectId: number) => {
    const status = await getQuestionsList(subjectId)
    setStatus(status)
  }

  return (
    <div>
      <TitleHead>
        <Flexing>
          <KeyBoard  onClick={() => navigate(-1)}/>
          <h1>{subject?.subjectName}</h1>
        </Flexing>
        <CreateButton onClick={() => navigate(`create-test`)}>
          <span>Добавить</span>
          <AddIcon color="black" size={18} />
        </CreateButton>
      </TitleHead>
      <TestListStyle>
        {status.status === "error" ? (
          <NotQuestion>
            <h1>{status.message}</h1>
            <p>
              Похоже вы еще не добавили ни одного тестового вопроса, для этого
              добавьте вопрос
            </p>
          </NotQuestion>
        ) : (
          questionList
        )}
      </TestListStyle>
    </div>
  )
}

export default TestList
