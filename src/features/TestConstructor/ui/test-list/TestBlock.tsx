import { TestBlockStyle } from "../../style/style";
import { QuestionReq } from "../../type";

const TestBlock = ({ data }: { data: QuestionReq }) => {
  return (
    <TestBlockStyle>
      <div>
        <div>
          <h2 style={{ fontSize: "26px" }}>Вопрос: {data.questionId}</h2>
          <h3 style={{ fontSize: "20px" }}>{data.description}</h3>
        </div>
        <div>
          <button>Редактировать</button>
          <button>Удалить</button>
        </div>
      </div>
      <div>
        {data.optionsResponse.map((item, i) => (
          <div key={i}>
            <div>{item.description}</div>
            <input type="checkbox" checked={item.correct} readOnly />
          </div>
        ))}
      </div>
    </TestBlockStyle>
  );
};

export default TestBlock;
