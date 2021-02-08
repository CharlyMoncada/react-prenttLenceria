import React from "react";
import Item from "../Item/Item.jsx";

export default function ItemList({ items }) {
  return (
    <div class="grid-gallery" id="gallery">
      {items &&
        items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
    </div>
  );
}
