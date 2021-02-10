import useCartContext from "../../contexts/CartContext";

const Cart = () => {
  const { items } = useCartContext();

  return (
    <article>
      <br />
      <h1>No hay Items en el carrito</h1>
      <br />
    </article>
  );
};

export default Cart;
