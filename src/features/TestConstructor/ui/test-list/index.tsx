import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateButton, TitleHead, TestListStyle, NotQuestion } from "../../style/style";
import { AddIcon } from "@/shared/ui/icon";
import TestBlock from "./TestBlock";
import { useStore } from "../../model/store";
import { GetQuestionsListResponse } from "../../type";

const TestList = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [status, setStatus] = useState<GetQuestionsListResponse>({ status: "", message: "" });
  const { fetchSubjects, questionsList, subjects, getQuestionsList } = useStore();

  const subject = subjects.find((subject) => subject.id === Number(itemId));
  const questionList = questionsList.map((item, i) => <TestBlock key={i} data={item} index={i + 1} />);

  useEffect(() => {
    fetchSubjects();
    getItem(Number(itemId));
  }, []);

  const getItem = async (subjectId: number) => {
    const status = await getQuestionsList(subjectId);
    setStatus(status);
  };

  return (
    <div>
      <TitleHead>
        <h1>{subject?.subjectName}</h1>
        <CreateButton onClick={() => navigate(`create-test`)}>
          <span>Добавить</span>
          <AddIcon color="black" size={18} />
        </CreateButton>
      </TitleHead>
      <TestListStyle>
        {status.status === "error" ? (
          <NotQuestion>
            <h1>{status.message}</h1>
            <p>Похоже вы еще не добавили ни одного тестового вопроса, для этого добавте вопрос</p>
          </NotQuestion>
        ) : (
          questionList
        )}
      </TestListStyle>
    </div>
  );
};

export default TestList;
