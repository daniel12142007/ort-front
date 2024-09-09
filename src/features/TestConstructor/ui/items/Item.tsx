import React from "react";
import { ItemBox } from "../../style/style";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
}

const Item: React.FC<Props> = ({ name }) => {
  // console.log(name);
  const navigate = useNavigate();
  const create = () => {
    navigate(`/test-list/${name}`);
  };
  return <ItemBox onClick={create}>{name}</ItemBox>;
};

export default Item;
