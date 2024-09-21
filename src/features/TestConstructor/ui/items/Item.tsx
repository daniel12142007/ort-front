import React from "react";
import { BoxQuestion, ItemBox, Paragraph, Question } from "../../style/style";
import { useNavigate } from "react-router-dom";
import nextSVG from "../../../../shared/assets/svg/next.svg";
import { SubjectReq } from "../../type";

interface Props {
  subject: SubjectReq; // Изменено на SubjectReq
}

const Item: React.FC<Props> = ({ subject }) => {
  const navigate = useNavigate();
  const create = () => {
    navigate(`/test-list/${subject.id}`); // Используем id для навигации
  };

  return (
      <ItemBox onClick={create}>
        <Paragraph>{subject.subjectName}</Paragraph>
        <BoxQuestion>
          <Question>({subject.questionCount} вопр.)</Question>
          <img src={nextSVG} alt="next" />
        </BoxQuestion>
      </ItemBox>
  );
};

export default Item;
