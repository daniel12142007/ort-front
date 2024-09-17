import { useEffect } from "react";
import { TitleHead, ItemsList } from "../style/style";
import Item from "./items/Item";
import { useStore } from "../model/store";

const ItemList = () => {
  const { subjects, fetchSubjects } = useStore();

  useEffect(() => {
    fetchSubjects();
  }, []);
  return (
    <div>
      <TitleHead>
        <p>Предметы</p>
      </TitleHead>
      <ItemsList>
        {subjects.map((obj, i) => (
          <Item {...obj} key={i} />
        ))}
      </ItemsList>
    </div>
  );
};

export default ItemList;
