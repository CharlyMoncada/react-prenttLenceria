import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {
    if (!inCart(item.id)) {
      console.log(item + quantity);
      setItems([...items, { item, quantity }]);
      alert("Producto agregado");
    } else {
      alert("Producto ya agregado previamente");
    }
  };

  const inCart = (itemId) => {
    return items.some((i) => i.item.id === itemId);
  };

  const deleteItems = () => {
    setItems([]);
    alert("Productos eliminados del carrito");
  };

  return (
    <CartContext.Provider value={{ addItem, inCart, items, deleteItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;
