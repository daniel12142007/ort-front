import { useEffect } from "react";
import { TitleHead, ItemsList } from "../style/style";
import Item from "./items/Item";
import { useStore } from "../model/store"; 

const ItemList = () => {
  const items = useStore((state) => state.items); 
  const fetchItems = useStore((state) => state.fetchItems); 


  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div>
      <TitleHead>
        <h1>Предметы</h1>
      </TitleHead>
      <ItemsList>
        {items.map((title, i) => (
          <Item name={title} key={i} />
        ))}
      </ItemsList>
    </div>
  );
};

export default ItemList;
