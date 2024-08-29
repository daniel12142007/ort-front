import { useNavigate, useParams } from "react-router-dom";
import { CreateButton, TitleHead, TestListStyle } from "../../style/style";
import { AddIcon } from "@/shared/ui/icon";
import TestBlock from "./TestBlock";

const TestList = () => {
  const navigate = useNavigate();
  const { itemType } = useParams();
  return (
    <div>
      <TitleHead>
        <h1>{itemType}</h1>
        <CreateButton onClick={() => navigate(`create-test`)}>
          <span>Добавить</span>
          <AddIcon color="black" size={18} />
        </CreateButton>
      </TitleHead>
      <TestListStyle>
        <TestBlock />
        <TestBlock />
        <TestBlock />
        <TestBlock />
      </TestListStyle>
    </div>
  );
};

export default TestList;
