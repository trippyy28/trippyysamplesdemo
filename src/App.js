import "./App.css";
import "nes.css/css/nes.min.css";
import Gallery from "./components/Gallery";
import Templets from "./components/Templets";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Details from "./components/Details";
import Login from "./auth/Login";
import UserProducts from "./components/UserProducts";
import HomePage from "./components/HomePage";
import Signup from "./auth/Signup";
import { BasketProvider } from "./contexts/BasketContext";
import { AudioProvider } from "./contexts/AudioContext";
import Checkout from "./components/Checkout";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import UserContext from "./contexts/user";
import useAuthListener from "./hooks/user-auth-listener";

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
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
                <Route path="/details/:id">
                  <Details />
                </Route>
                <Route path="/user">
                  <UserProducts />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
          <AudioPlayer />
          <Footer />
        </AudioProvider>
      </BasketProvider>
    </UserContext.Provider>
  );
}

export default App;
