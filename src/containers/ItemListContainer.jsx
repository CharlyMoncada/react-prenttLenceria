import React, { useState, useEffect } from "react";
import { getFirestore } from "../firebase/index";
import ItemList from "../components/ItemList/ItemList.jsx";

const ItemsListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let db = getFirestore();
    let itemsFirebase = db.collection("products");
    itemsFirebase.get().then((querySnapshot) => {
      console.log(querySnapshot.size);
      let arrayItems = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setProducts(arrayItems);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return <ItemList items={products} />;
};

export default ItemsListContainer;
