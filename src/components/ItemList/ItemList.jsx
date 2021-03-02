import React from "react";
import Item from "../Item/Item.jsx";
import "./_itemList.scss";

export default function ItemList({ items }) {
  console.log(items);
  return (
    <section>
      <div class="grid-gallery">
        {items &&
          items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
      </div>
    </section>
  );
}
