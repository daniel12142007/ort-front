import React from "react";
import { useParams } from "react-router-dom";
import { ContainerStyle, AddButton, ButtonContainer, Title, TaskList } from "../../style/style";
import TestBlock from "./TestBlock";
import { AddIcon } from "@/shared/ui/icon";
import { TestState } from "../../type";
import { useStore, defaultQuestion } from "../../model/store";

const CreateTest: React.FC = () => {
  const { itemType } = useParams();
  const { testArray, setTestArray, updateQuestion } = useStore();

  const onSubmit = () => {
    console.log(testArray);
  };

  const update = (data: TestState) => {
    console.log("Changed", data);
    updateQuestion(data);
  };

  return (
    <ContainerStyle>
      <Title>
        <h1>{itemType}</h1>
        <ButtonContainer>
          <AddButton onClick={() => setTestArray(defaultQuestion)}>
            <AddIcon color="white" size={18} />
            Добавить еще
          </AddButton>
          <AddButton onClick={onSubmit}>Сохранить</AddButton>
        </ButtonContainer>
      </Title>

      <TaskList>
        {testArray.map((obj, index) => (
          <TestBlock key={index} index={index + 1} data={obj} update={update} />
        ))}
      </TaskList>
    </ContainerStyle>
  );
};

export default CreateTest;
