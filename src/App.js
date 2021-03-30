import "./App.css";
import "nes.css/css/nes.min.css";
import Gallery from "./Gallery";
import Templets from "./Templets";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Header";
import Basket from "./Basket";
import Details from "./Details";
import { data } from "./data";
import Login from "./Login";

function App() {
  let [cartItems, setCartItems] = useState([]);
  const products = data;
  const onAdd = (product) => {
    const cartItem = cartItems.find((x) => x.id === product.id);
    if (cartItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...cartItem, qty: cartItem.qty + 1 } : x
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
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          cartItems={cartItems}
          products={products}
          onAdd={onAdd}
          onRemove={onRemove}
        />
        <Switch>
          <Route exact path="/gallery">
            <Gallery products={products} onAdd={onAdd} />
          </Route>
          <Route exact path="/">
            <h1 className="text">Trippyy Samples</h1>
          </Route>
          <Route exact path="/templets">
            <Templets />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/basket">
            <Basket
              cartItems={cartItems}
              products={products}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
