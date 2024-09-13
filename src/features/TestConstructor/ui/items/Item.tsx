import React from "react";
import { BoxQuestion, ItemBox, Paragraph, Question } from "../../style/style";
import { useNavigate } from "react-router-dom";
import nextSVG from "../../../../shared/assets/svg/next.svg";

interface Props {
  name: string;
}

const Item: React.FC<Props> = ({ name }) => {
  // console.log(name);
  const navigate = useNavigate();
  const create = () => {
    navigate(`/test-list/${name}`);
  };
  return <ItemBox onClick={create}>
    <Paragraph>{name}</Paragraph>
    <BoxQuestion>
      <Question>(1000вопр.)</Question>
      <img src={nextSVG} alt="next" />
    </BoxQuestion>
  </ItemBox>;
};

export default Item;
