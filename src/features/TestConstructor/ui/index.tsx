import { useEffect } from "react";
import { TitleHead, ItemsList } from "../style/style";
import Item from "./items/Item";
import { useItemStore } from "./model/UseItemStore";

const ItemList = () => {
  const items = useItemStore((state) => state.items); // Получаем предметы из zustand
  const fetchItems = useItemStore((state) => state.fetchItems); // Получаем функцию для загрузки данных

  // Загружаем предметы при монтировании компонента
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
