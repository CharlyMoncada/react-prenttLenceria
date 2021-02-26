import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/index";
import ItemDetail from "../components/ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState();
  console.log("Id: " + itemId);

  useEffect(() => {
    console.log("Id: " + itemId);

    if (itemId) {
      let db = getFirestore();
      console.log(itemId);
      let item = db.collection("products").doc(itemId);
      console.log(item);
      item
        .get()
        .then((doc) => {
          if (!doc.exists) {
            console.log("Items does not exist - " + itemId);
            return;
          }
          setProduct({ id: doc.id, ...doc.data() });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [itemId]);

  return <ItemDetail product={product} />;
}
