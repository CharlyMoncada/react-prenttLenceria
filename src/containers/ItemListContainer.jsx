import React, { useState, useEffect } from "react";
import { getFirestore } from "../firebase/index";
import ItemList from "../components/ItemList/ItemList.jsx";
import "./_itemListContainer.scss";

const ItemsListContainer = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    let db = getFirestore();
    let itemsFirebase = db.collection("brands");
    itemsFirebase
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.size);
        let arrayItems = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setBrands([
          { id: "ninguno", name: "Seleccionar" },
          { id: "products", name: "Todas" },
          ...arrayItems,
        ]);
        console.log(arrayItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ChangeItemsByBrand = (e) => {
    let brand = e.target.value;
    let itemsFirebase;

    let db = getFirestore();

    if (brand === "Todas") {
      itemsFirebase = db.collection("products");
    } else {
      itemsFirebase = db
        .collection("products")
        .where("brand", "==", e.target.value);
    }

    itemsFirebase
      .get()
      .then((querySnapshot) => {
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
  };

  return (
    <div className="itemList">
      <div className="itemListContainer">
        <label className="itemListContainer__title">Seleccionar Marca</label>
        <select onChange={(e) => ChangeItemsByBrand(e)}>
          {brands &&
            brands.length > 0 &&
            brands.map((value) => <option key={value.id}>{value.name}</option>)}
        </select>
      </div>
      <ItemList items={products} />;
    </div>
  );
};

export default ItemsListContainer;
