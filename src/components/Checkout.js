import React from "react";
import { useBasket } from "../contexts/BasketContext";

const Checkout = (props) => {
  const { cartItems } = useBasket();
  const { products } = useBasket();
  const { onAdd } = useBasket();
  const { onRemove } = useBasket();
  const { itemsPrice } = useBasket();
  const { totalPrice } = useBasket();
  return (
    <div>
      <h2>Your Price is:{totalPrice}$</h2>
      <button>Check Out!</button>
    </div>
  );
};

export default Checkout;
