import "./App.css";
import "nes.css/css/nes.min.css";
import Gallery from "./components/Gallery";
import Templets from "./Templets";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Header";
import Basket from "./components/Basket";
import Details from "./components/Details";
import Login from "./auth/Login";
import HomePage from "./HomePage";
import Signup from "./auth/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <AuthProvider>
      <BasketProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/gallery">
                <Gallery />
              </Route>
              <Route exact path="/">
                <HomePage />
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
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/basket">
                <Basket />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </BasketProvider>
    </AuthProvider>
  );
}

export default App;
