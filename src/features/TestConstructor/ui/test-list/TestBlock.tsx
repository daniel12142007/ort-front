import { styled } from "@mui/material";
import { QuestionReq } from "../../type";
import FullImageView from "@/shared/ui/FullImageView";

const TestBlock = ({ data }: { data: QuestionReq }) => {
  return (
    <TestBlockStyle>
      <QuestionBlock>
        <TestQuest>
          {data.image && <FullImageView src={data.image} width={70} height={70} />}
          <div>
            <h2 style={{ fontSize: "26px" }}>Вопрос: {data.questionId}</h2>
            <h3 style={{ fontSize: "20px" }}>{data.description}</h3>
          </div>
        </TestQuest>
        <div>
          <button>Редактировать</button>
          <button>Удалить</button>
        </div>
      </QuestionBlock>
      <OptionContainer>
        {data.optionsResponse.map((item, i) => (
          <OptionStyle active={item.correct} key={i}>
            {data.image && <FullImageView src={item.image} width={50} height={50} />}
            <p>{item.description}</p>
          </OptionStyle>
        ))}
      </OptionContainer>
    </TestBlockStyle>
  );
};

export default TestBlock;

const TestBlockStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "20px",
});

const QuestionBlock = styled("div")({
  backgroundColor: "#4285b4",
  padding: "10px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const TestQuest = styled("div")({
  display: "flex",
  gap: "10px",
});

const OptionContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
});
const OptionStyle = styled("div")<{ active: boolean }>(({ active }) => ({
  backgroundColor: active ? "#00ffc8" : "#ff7f7f",
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
}));
