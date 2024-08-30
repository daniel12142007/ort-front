import { TestBlockStyle } from "../../style/style";

const TestBlock = () => {
  return (
    <TestBlockStyle>
      <div>
        <div>
          <h2 style={{ fontSize: "26px" }}>Вопрос: 1</h2>
          <h3 style={{ fontSize: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, laborum. Sequi, reiciendis velit. Unde vitae
            inventore adipisci aliquid iure praesentium dolor veritatis tempora magni, architecto corrupti sit sapiente, quasi
            iusto quidem! Eligendi ad ea, veniam necessitatibus quod deleniti cumque illum.
          </h3>
        </div>
        <div>
          <button>Редактировать</button>
          <button>Удалить</button>
        </div>
      </div>
      <div>
        <div>fasfa</div>
        <div>fasfa</div>
        <div>fasfa</div>
        <div>fasfa</div>
      </div>
    </TestBlockStyle>
  );
};

export default TestBlock;
