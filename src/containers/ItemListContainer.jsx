import React, { useState, useEffect } from "react";
import { getFirestore } from "../firebase/index";
import ItemList from "../components/ItemList/ItemList.jsx";
import "./_itemListContainer.scss";

const ItemsListContainer = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [value, setValue] = useState({});
  // const [brandsContainer, setBrandsContainer] = useState([]);

  // useEffect(() => {
  //   let db = getFirestore();
  //   let itemsFirebase = db.collection("products");
  //   itemsFirebase
  //     .get()
  //     .then((querySnapshot) => {
  //       console.log(querySnapshot.size);
  //       let arrayItems = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data(),
  //         };
  //       });
  //       setProducts(arrayItems);
  //       console.log(arrayItems);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    let db = getFirestore();
    let itemsFirebase = db.collection("brands");
    itemsFirebase
      .get()
      .then((querySnapshot) => {
        //console.log(querySnapshot.size);
        let arrayItems = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setBrands([{ id: "products", name: "Todos" }, ...arrayItems]);
        //console.log(arrayItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let db = getFirestore();
    let itemsFirebase = db.collection("products");
    itemsFirebase
      .get()
      .then((querySnapshot) => {
        //console.log(querySnapshot.size);
        let arrayItems = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(arrayItems);
        //console.log(arrayItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect((e) => {
  //   let db = getFirestore();
  //   let itemsFirebase = db.collection("products").where('brand', '===', value);
  //   itemsFirebase
  //     .get()
  //     .then((querySnapshot) => {
  //       console.log(querySnapshot.size);
  //       let arrayItems = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data(),
  //         };
  //       });
  //       setProducts(arrayItems);
  //       console.log(arrayItems);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }, []);

  console.log(value, "brands");
  const ChangeItemsByBrand = (e) => {
    let brand = e.target.value;
    //console.log(e.target.value);
    let itemsFirebase;

    let db = getFirestore();
    if (brand === "Todos") {
      itemsFirebase = db.collection("products");
    } else {
      itemsFirebase = db
        .collection("products")
        .where("brand", "==", e.target.value);
    }

    itemsFirebase
      .get()
      .then((querySnapshot) => {
        //console.log(querySnapshot.size);
        let arrayItems = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(arrayItems);
        //console.log(arrayItems);
      })
      .catch((error) => {
        console.log(error);
      });

    //setValue(e.target.value)
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
