import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/index";
import ItemDetail from "../components/ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    let db = getFirestore();
    let item = db.collection("products").doc(itemId);
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Items does not exist");
          return;
        }
        setProduct({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemDetail product={product} />;
}
