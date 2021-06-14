import "./App.css";
import "nes.css/css/nes.min.css";
import Gallery from "./components/Gallery";
import Templets from "./components/Templets";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Basket from "./components/Basket";
import Details from "./components/Details";
import Login from "./auth/Login";
import HomePage from "./HomePage";
import Signup from "./auth/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";
import { AudioProvider } from "./contexts/AudioContext";
import Checkout from "./components/Checkout";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <AuthProvider>
      <BasketProvider>
        <AudioProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="App">
              <Header />
              <Switch>
                <Route exact path="/">
                  <Gallery />
                </Route>
                <Route exact path="/about">
                  <HomePage />
                </Route>
                <Route exact path="/templets">
                  <Templets />
                </Route>
                <Route exact path="/details/:id">
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
          <AudioPlayer />
        </AudioProvider>
      </BasketProvider>
    </AuthProvider>
  );
}

export default App;
