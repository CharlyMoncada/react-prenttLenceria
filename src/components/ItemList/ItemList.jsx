import React from "react";
import Item from "../Item/Item.jsx";
import './_itemList.scss'

export default function ItemList({ items }) {
  return (
    <section class="gallery">
      <div class="grid-gallery" id="gallery">
        {items &&
          items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
      </div>
    </section>
  );
}
