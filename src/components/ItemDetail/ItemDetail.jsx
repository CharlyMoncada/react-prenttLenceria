import React, { useState, useEffect } from "react";
import useCartContext from "../../contexts/CartContext";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { getFirestore } from "../../firebase/index";

export default function ItemDetail() {
  const { addProduct, inCart } = useCartContext();
  const { itemId } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    let db = getFirestore();
    let itemsFirebase = db.collection("products");
    let item = itemsFirebase.doc(itemId);
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

  return (
    <div className="itemDetailCont">
      <Card
        className="text-center"
        bg="secondary"
        text="white"
        style={{ minHeight: "90vh" }}
      >
        <Card.Header>Detalles del Producto {itemId}</Card.Header>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text> {product.brand}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-white">
          {product.stock} en Stock!
        </Card.Footer>
      </Card>
    </div>
  );
}
