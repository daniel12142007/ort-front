import React from "react";
import { ItemBox } from "../../style/style";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  index: number;
}

const Item: React.FC<Props> = ({ name, index }) => {
  const navigate = useNavigate();
  const create = () => {
    navigate(`/test-list/${index}`);
  };
  return <ItemBox onClick={create}>{name}</ItemBox>;
};

export default Item;
