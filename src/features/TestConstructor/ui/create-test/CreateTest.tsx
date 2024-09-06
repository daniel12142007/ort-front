import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContainerStyle, AddButton, ButtonContainer, Title, TaskList } from "../../style/style";
import TestBlock from "./TestBlock";
import { AddIcon } from "@/shared/ui/icon";
import { TestFileState } from "../../type";
import { useStore, defaultQuestion } from "../model/store";

const CreateTest: React.FC = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();
  const { testArray, setTestArray, updateQuestion, postQuestion } = useStore();
  const [valid, setValid] = useState<boolean>(true);

  const onSubmit = () => {
    if (valid) {
      postQuestion(testArray, navigate);
    }
  };

  const update = (data: TestFileState) => {
    updateQuestion(data);
  };

  return (
    <ContainerStyle>
      <Title>
        <h1>{itemId}</h1>
        <ButtonContainer>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <AddButton onClick={() => setTestArray(defaultQuestion)}>
                <AddIcon color="white" size={18} />
                Добавить еще
              </AddButton>
              <AddButton disabled={!valid} onClick={onSubmit}>
                Сохранить
              </AddButton>
            </div>
            {!valid && <p style={{ fontSize: "16px", color: "red", fontWeight: "bold" }}>Заполните все поля</p>}
          </div>
        </ButtonContainer>
      </Title>

      <TaskList>
        {testArray.map((obj, index) => (
          <TestBlock key={index} index={index + 1} data={obj} subject={Number(itemId)} update={update} valid={setValid} />
        ))}
      </TaskList>
    </ContainerStyle>
  );
};

export default CreateTest;
