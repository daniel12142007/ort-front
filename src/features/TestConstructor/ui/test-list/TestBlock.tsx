import React, { useState } from "react"
import { QuestionReq } from "../../type"
import { FullImageView } from "@/shared/ui"
import {
  ActionButtons,
  TestBlockStyle,
  QuestionBlock,
  OptionContainer,
  OptionStyle,
  TestQuest,
} from "../../style/style"
import { useStore } from "../../model/store"
import UpdateModal from "./UpdateModal"
import { DeleteModal } from "@/widgets/DeleteModal/ModalDelete"

interface Props {
  data: QuestionReq
  index: number
  refreshQuestions: () => void
}

const TestBlock: React.FC<Props> = ({ data, index, refreshQuestions }) => {
  const [edit, setEdit] = useState(false)
  const [hover, setHover] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const { deleteQuestion } = useStore()

  const onDelete = async () => {
    await deleteQuestion(data.questionId)
    refreshQuestions()
    setDeleteModalOpen(false)
  }

  const onEdit = () => {
    setEdit(true)
  }

  return (
    <>
      <TestBlockStyle>
        <QuestionBlock
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <TestQuest>
            {data.image && (
              <FullImageView src={data.image} width={40} height={40} />
            )}
            <h3
              style={{ fontSize: "20px" }}
            >{`${index}. ${data.description}`}</h3>
          </TestQuest>
          <ActionButtons>
            <button onClick={onEdit}>
              <img
                style={{ width: "20px", height: "20px" }}
                src="/src/shared/assets/svg/edit.svg"
              />
            </button>
            <button onClick={() => setDeleteModalOpen(true)}>
              <img
                style={{ width: "20px", height: "20px" }}
                src="/src/shared/assets/svg/delete.svg"
              />
            </button>
          </ActionButtons>
        </QuestionBlock>

        <OptionContainer hover={hover}>
          {data.optionsResponse.map((item, i) => (
            <OptionStyle active={item.correct} key={i}>
              {item.image && (
                <FullImageView src={item.image} width={40} height={40} />
              )}
              <p>{item.description}</p>
            </OptionStyle>
          ))}
        </OptionContainer>
      </TestBlockStyle>

      {edit && (
        <UpdateModal
          questionData={data}
          onClose={() => setEdit(false)}
          refreshQuestions={refreshQuestions}
        />
      )}

      {deleteModalOpen && (
        <DeleteModal
          title="вопрос"
          onConfirm={onDelete}
          onClose={() => setDeleteModalOpen(false)}
        />
      )}
    </>
  )
}

export default TestBlock
