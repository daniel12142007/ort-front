import { useTrainingTestStore } from "../../model/store";

export const QuestionComponent = () => {
  const { questions, loading } = useTrainingTestStore();
  console.log(questions)

  if (loading) {
    return <div>Загрузка вопросов...</div>;
  }

  if (questions.length === 0) {
    return <div>Нет вопросов для данного предмета</div>;
  }

  return (
    <div className="flex flex-col gap-4 mt-5">
      {questions.map((question, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-lg">
          <p className="font-semibold">{question.description}</p>
        </div>
      ))}
    </div>
  );
};
