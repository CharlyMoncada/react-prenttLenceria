import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {
    setItems([ ...items, { item, quantity }]);
  };

  const inCart = (itemId)=>{
      return items.some(i => i.item.id === itemId);
  }

  return <CartContext.Provider value={{addItem, inCart, items}}>{children}</CartContext.Provider>;
};

export default useCartContext;
