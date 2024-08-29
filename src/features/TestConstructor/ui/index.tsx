import { TitleHead, ItemsList } from "../style/style";
import Item from "./items/Item";

const ItemList = () => {
  return (
    <div>
      <TitleHead>
        <h1>Предметы</h1>
      </TitleHead>
      <ItemsList>
        {itemsArray.map((title, i) => (
          <Item name={title} key={i} />
        ))}
      </ItemsList>
    </div>
  );
};

export default ItemList;

const itemsArray = [
  "Кыргызский язык",
  "Русский язык",
  "Кыргызская литература",
  "Русская литература",
  "Английский язык",
  "Математика",
  "История",
  "Биология",
  "Физика",
];
