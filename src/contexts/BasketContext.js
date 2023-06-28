import React, { useState, useContext, useEffect } from "react";

import { data } from "../data/data";
import UserContext from "./user";
import { firebase } from "../lib/firebase";
import { getUserByUserId } from "../services/firebase";

const BasketContext = React.createContext();

export function useBasket() {
  return useContext(BasketContext);
}
export function BasketProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);
  const { user } = useContext(UserContext);
  const [userProducts, setUserProducts] = useState([]);
  let productsData = data;
  console.log(getUserByUserId.name, "getname");

  const onAdd = (product) => {
    const cartItem = cartItems.find((x) => x.id === product.id);
    if (cartItem) {
      setCartItems(
        cartItems.map(
          (x) => (x.id === product.id ? { ...cartItem } : x)
          //add it to the code after ...cartItem if you want the user to add more products on each item:
          //, qty: cartItem.qty + 1\
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const cartItem = cartItems.find((x) => x.id === product.id);
    if (cartItem.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...cartItem, qty: cartItem.qty - 1 } : x
        )
      );
    }
  };

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;

  const value = {
    cartItems,
    onAdd,
    onRemove,
    itemsPrice,
    totalPrice,
    setCartItems,
    productsData,
    userProducts,
  };
  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
}
