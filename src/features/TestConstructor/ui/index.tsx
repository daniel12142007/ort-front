import { TitleHead, ItemsList } from "../style/style";
import Item from "./items/Item";

const ItemList = () => {
  const sentence = "I love React";
  const array = sentence.split(" ").filter((word) => word !== " ");
  return (
    <div>
      <TitleHead>
        <h1>Предметы</h1>
      </TitleHead>
      <ItemsList>
        {itemsArray.map((title, i) => (
          <Item name={title} index={i + 1} key={i} />
        ))}
      </ItemsList>
    </div>
  );
};

export default ItemList;

export const itemsArray = [
  "Кыргызский язык",
  "Кыргызская литература",
  "Математика",
  "История",
  "физика",
  "Русский язык",
  "Русская литература",
  "Английский язык",
  "Биология  ",
];
