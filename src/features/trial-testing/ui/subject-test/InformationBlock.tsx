import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

const InformationBlock = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const nav = () => {
    const id = location.state?.active?.id
    navigate("testing", { state: { id } })
  }

  return (
    <div className="flex flex-col items-center gap-6 w-4/5 bg-white mx-auto my-5 rounded-xl p-5">
      <h1 className="text-2xl">Добро пожаловать!</h1>
      <p>
        Тест состоит из 30 заданий, на выполнение которых отводиться 30 минут.
      </p>
      <p className="w-5/6">
        Во время выполнения зданий Вы можете изменить выбранный вариант ответа,
        но сделать это можно только один раз для каждого задания. При
        исправлении новый (правильный) ответ будет представлен квадратиком.
      </p>
      <div className="grid grid-cols-4 w-3/4 m-auto">
        {[...new Array(3)]
          .fill(["A", "B", "C", "D"])
          .map((x: string[], index) =>
            x.map((y, i) => (
              <RadioInput
                key={i}
                active={index !== 0 && i === 2}
                gray={index === 2 && i === 2}
                title={y}
              />
            )),
          )}
      </div>
      <p className="w-5/6">
        После прохождения теста Вы получите результат, в котором будет указано
        количество данных Вами правильных ответов и общий процент правильно и
        неправильно выполненных заданий.
      </p>
      <h1 className="text-2xl">Желаем Удачи!</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 text-lg rounded-lg shadow-sm hover:bg-blue-600 disabled:bg-blue-300"
        onClick={nav}
      >
        Дальше
      </button>
    </div>
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
    <div className="flex items-center gap-3">
      <input
        type="radio"
        style={{ accentColor: gray ? "#ccc" : "#407bff" }}
        readOnly
        checked={active}
      />
      <span className="text-[22px] font-[500]">{title}</span>
    </div>
  )
}
