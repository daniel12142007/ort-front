import { styled } from "@mui/material"
import { QuestionReq } from "../../type"
import { FullImageView } from "@/shared/ui"
import React from "react"

interface Props {
  data: QuestionReq
  index: number
}

const TestBlock: React.FC<Props> = ({ data, index }) => {
  const [hover, setHover] = React.useState(false)
  return (
    <TestBlockStyle
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <QuestionBlock>
        <TestQuest>
          {data.image && (
            <ImageVisible visible={hover}>
              <FullImageView src={data.image} width={40} height={40} />
            </ImageVisible>
          )}
          <h3
            style={{ fontSize: "20px" }}
          >{`${index}. ${data.description}`}</h3>
        </TestQuest>
        <ActionButtons>
          <button>
            <img
              style={{ width: "20px", height: "20px" }}
              src="/src/shared/assets/svg/edit.svg"
            />
          </button>
          <button>
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
            {data.image && (
              <FullImageView src={item.image} width={40} height={40} />
            )}
            <p>{item.description}</p>
          </OptionStyle>
        ))}
      </OptionContainer>
    </TestBlockStyle>
  )
}

export default TestBlock

const TestBlockStyle = styled("div")({
  userSelect: "none",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "10px",
})

const QuestionBlock = styled("div")({
  backgroundColor: "#eee",
  padding: "10px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})
const TestQuest = styled("div")({
  display: "flex",
})
const ImageVisible = styled("div")<{ visible: boolean }>(({ visible }) => ({
  transition: "all 0.5s",
  width: visible ? "40px" : 0,
  height: visible ? "40px" : 0,
  marginRight: visible ? "10px" : 0,
  overflow: "hidden",
  fontSize: "10px",
}))

const OptionContainer = styled("div")<{ hover: boolean }>(({ hover }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  overflow: "hidden",
  transition: "all 0.5s",

  marginTop: hover ? "10px" : "0",
  height: hover ? "70px" : 0,
}))

const OptionStyle = styled("div")<{ active: boolean }>(({ active }) => ({
  backgroundColor: active ? "#4285b4" : "#eee",
  color: active ? "#fff" : "#000",
  borderRadius: "10px",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  flex: 1,

  p: {
    fontSize: "20px",
    fontWeight: active ? "bold" : "normal",
  },
}))

const ActionButtons = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  button: {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.5s",
    opacity: 0.7,

    "&:hover": {
      opacity: 1,
      transform: "scale(1.3)",
    },
  },
})
