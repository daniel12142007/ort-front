import styled from "@emotion/styled"
import { TestButton } from "../../styles"
import { useNavigate } from "react-router-dom"

const InformationBlock = () => {
  const navigate = useNavigate()
  const nav = () => {
    navigate("testing")
  }
  return (
    <InformationBlockStyle>
      <h1>Добро пожаловать!</h1>
      <p>
        Тест состоит из 30 заданий, на выполнение которых отводиться 30 минут.
      </p>
      <p>
        Во время выполнения зданий Вы можете изменить выбранный вариант ответа,
        но сделать это можно только один раз для каждого задания. При
        исправлении новый (правильный) ответ будет представлен квадратиком.
      </p>
      <RadioInputContainer>
        {[...new Array(3)]
          .fill(["A", "B", "C", "D"])
          .map((x: string[], index) =>
            x.map((y, i) => (
              <RadioInput
                active={index !== 0 && i === 2}
                gray={index === 2 && i === 2}
                title={y}
              />
            )),
          )}
      </RadioInputContainer>
      <p>
        После прохождения теста Вы получите результат, в котором будет указано
        количество данных Вами правильных ответов и общий процент правильно и
        неправильно выполненных заданий.
      </p>
      <h1>Желаем Удачи!</h1>
      <TestButton onClick={nav}>Дальше</TestButton>
    </InformationBlockStyle>
  )
}

export default InformationBlock

const RadioInput = ({
  active,
  title,
  gray,
}: {
  active: boolean
  title: string
  gray: boolean
}) => {
  return (
    <RadioInputStyle>
      <input
        type="radio"
        style={{ accentColor: gray ? "#ccc" : "#407bff" }}
        readOnly
        checked={active}
      />
      <span>{title}</span>
    </RadioInputStyle>
  )
}

const InformationBlockStyle = styled.div`
  background-color: #ffffff;
  margin: 10px 100px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  gap: 20px;

  & > h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 18px;
    font-weight: 500;
  }
`

const RadioInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 500px;
  margin: 0 auto;
`

const RadioInputStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;

  span {
    font-size: 22px;
    font-weight: 500;
  }
`
