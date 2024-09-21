import { useEffect } from "react";
import { TitleHead, ItemsList, Grid } from "../style/style";
import Item from "./items/Item";
import { useStore } from "../model/store";

const ItemList = () => {
  const subjects = useStore((state) => state.subjects); 
  const fetchItems = useStore((state) => state.fetchItems);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div>
      <TitleHead>
        <p>Предметы</p>
      </TitleHead>
      <ItemsList>
        <Grid>
          {subjects.map((subject) => (
            <Item key={subject.id} subject={subject} /> 
          ))}
        </Grid>
      </ItemsList>
    </div>
  );
};

export default ItemList;
