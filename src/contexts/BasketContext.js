import React, { useState, useContext, useEffect } from "react";

import { data } from "../data/data";
import { templetsData } from "../data/templetsdata";
import {firebase} from "../lib/firebase";
import firestore from "firebase";

const BasketContext = React.createContext();

export function useBasket() {
  return useContext(BasketContext);
}
export function BasketProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);
  let [productsData,setProudctsData] =useState([])

  //fetching data from firebase
  useEffect(() => {
    try {
      const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("products").get();
        setProudctsData(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
      fetchData();
    } catch {
      console.error("error");
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(cartItems));
  // }, [cartItems]);

  const templets = templetsData;
  const onAdd = (product) => {
    const cartItem = cartItems.find((x) => x.id === product.id);
    if (cartItem) {
      setCartItems(
        cartItems.map(
          (x) => (x.id === product.id ? { ...cartItem } : x)
          //add it to the code after ...cartItem if you want the user to add more products on each item:
          //, qty: cartItem.qty + 1
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
    templets,
    setCartItems,
    productsData
  };
  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
}
