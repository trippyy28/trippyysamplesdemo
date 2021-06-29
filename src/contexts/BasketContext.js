import React, { useState, useContext, useEffect } from "react";

import { data } from "../../src/data";
import { templetsData } from "../../src/templetsdata";

// import firestore from "firebase/firestore";

const BasketContext = React.createContext();

export function useBasket() {
  return useContext(BasketContext);
}
export function BasketProvider({ children }) {
  let [cartItems, setCartItems] = useState([]);
  // let [productsData, setProudctsData] = useState([]);
  const products = data;
  const localStorageArray = [localStorage.getItem("products")];
  const isLocalStorageTrue = [localStorage.getItem("products")].length > 0;
  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const db = app.firestore();
  //       const data = await db.collection("products").get();
  //       setProudctsData(
  //         data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //       );
  //     };
  //     fetchData();
  //   } catch {
  //     console.error("error");ddsf
  //   }D
  // }, []);

  const templets = templetsData;
  const onAdd = (product) => {
    const cartItem = cartItems.find((x) => x.id === product.id);
    if (cartItem) {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...cartItem } : x))
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    localStorage.setItem("products", JSON.stringify(cartItems));
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
    localStorage.removeItem("products");
  };
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;

  const value = {
    cartItems,
    products,
    onAdd,
    onRemove,
    itemsPrice,
    totalPrice,
    templets,
    setCartItems,
    localStorageArray,
  };
  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
}
