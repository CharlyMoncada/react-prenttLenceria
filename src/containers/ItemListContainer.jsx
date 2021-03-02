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
        console.log(querySnapshot.size);
        let arrayItems = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setBrands([{ id: "products", name: "Todos" }, ...arrayItems]);
        console.log(arrayItems);
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
        console.log(querySnapshot.size);
        let arrayItems = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(arrayItems);
        console.log(arrayItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect((e) => {
    let db = getFirestore();
    let itemsFirebase = db.collection("products").where('brand', '===', value);
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
        console.log(arrayItems);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

  console.log(value, "brands");

  return (
    <div className='itemList'>
      <div className='itemListContainer'>
        <label className='itemListContainer__title'>Seleccionar Marca</label>
        <select>
          {brands &&
            brands.length > 0 &&
            brands.map((value) => <option onClick={e => setValue(e.target.value)} key={value.id}>{value.name}</option>)}
        </select>
      </div>
      <ItemList items={products} />;
    </div>
  );
};

export default ItemsListContainer;
