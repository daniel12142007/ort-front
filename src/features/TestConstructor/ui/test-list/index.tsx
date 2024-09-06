import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateButton, TitleHead, TestListStyle } from "../../style/style";
import { AddIcon } from "@/shared/ui/icon";
import TestBlock from "./TestBlock";
import { useStore } from "../model/store";
import { GetQuestionsListResponse } from "../../type";
import { itemsArray } from "..";

const TestList = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [status, setStatus] = useState<GetQuestionsListResponse>({ status: "", message: "" });
  const { getQuestionsList, questionsList } = useStore();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const subject = itemsArray.find((_, index) => index + 1 === Number(itemId));
    setStatus(await getQuestionsList(subject!));
  };

  const filterQuestionsList = (subjectId: number) => {
    return questionsList.filter((item) => item.subjectId === subjectId);
  };

  const questionList = filterQuestionsList(Number(itemId)).map((item, i) => <TestBlock key={i} data={item} />);

  return (
    <div>
      <TitleHead>
        <h1>{itemId}</h1>
        <CreateButton onClick={() => navigate(`create-test`)}>
          <span>Добавить</span>
          <AddIcon color="black" size={18} />
        </CreateButton>
      </TitleHead>
      <TestListStyle>
        {status.status === "error" ? (
          <div>
            <h1>{status.message}</h1>
            <p>Похоже вы еще не добавили ни одного вопроса. Добавте вопрос</p>
            <CreateButton onClick={() => navigate(`create-test`)}>
              <span>Добавить</span>
              <AddIcon color="black" size={18} />
            </CreateButton>
          </div>
        ) : (
          questionList
        )}
      </TestListStyle>
    </div>
  );
};

export default TestList;
