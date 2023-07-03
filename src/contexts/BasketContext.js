import React, { useState, useContext, useEffect } from "react";
import { data } from "../data/data";
import UserContext from "./user";
import FirebaseContext from "../contexts/firebase";
import { collection, updateDoc, doc, getDoc } from "firebase/firestore";

const BasketContext = React.createContext();

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const { firebase } = useContext(FirebaseContext);
  const { firestore } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  // console.log(user.uid);

  let [cartItems, setCartItems] = useState([]);
  let productsData = data;
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    if (user) {
      const userRef = doc(firestore, "users", user.uid);
      const snap = getDoc(userRef);

      snap.then((docSnap) => {
        if (docSnap.exists()) {
          setCartItems(docSnap.data().cart);
        }
      });
    }
  }, [user]);

  const onAdd = (product) => {
    let newCartItems;
    const cartItem = cartItems.find((x) => x.id === product.id);
    if (cartItem) {
      newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...cartItem } : x
      );
    } else {
      newCartItems = [...cartItems, { ...product, qty: 1 }];
    }
    setCartItems(newCartItems);
    updateCartInFirestore(user.uid, newCartItems);
  };

  const onRemove = (product) => {
    let newCartItems;
    const cartItem = cartItems.find((x) => x.id === product.id);
    if (cartItem.qty === 1) {
      newCartItems = cartItems.filter((x) => x.id !== product.id);
    } else {
      newCartItems = cartItems.map((x) =>
        x.id === product.id ? { ...cartItem, qty: cartItem.qty - 1 } : x
      );
    }
    setCartItems(newCartItems);
    updateCartInFirestore(user.uid, newCartItems);
  };

  async function updateCartInFirestore(userId, cartItems) {
    const userRef = doc(firestore, "users", userId);
    await updateDoc(userRef, { cart: cartItems });
  }

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
