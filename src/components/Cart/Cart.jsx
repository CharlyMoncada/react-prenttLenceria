import React from "react";
import useCartContext from "../../contexts/CartContext";
import { DataGrid } from "@material-ui/data-grid";

const Cart = () => {
  const { items, deleteItems } = useCartContext();
  console.log(items);
  console.log(items[0]);

  const columns = [
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 90,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 90,
    },
  ];

  return (
    <div className="cart">
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={
            items &&
            items.map((item) => {
              return {
                id: item.item.id,
                brand: item.item.brand,
                name: item.item.name,
                price: item.item.price,
                quantity: item.quantity,
              };
            })
          }
          columns={columns}
          pageSize={5}
        />
      </div>
      <br></br>
      <button>Comprar</button>
      <button onClick={deleteItems}>Limpiar</button>
      <br></br>
    </div>
  );
};

export default Cart;
