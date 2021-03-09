import "./App.css";
import "nes.css/css/nes.min.css";
import Gallery from "./Gallery";
import Templets from "./Templets";
import styled from "styled-components";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

const Header = styled.div`
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.875em;
  font-weight: 400;
  background-color: #222222;
  color: #bbbbbb;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header>
          <Link to="/">
            <button type="button" className="nes-btn is-success buttona">
              Home
            </button>
          </Link>
          <Link to="/gallery">
            <button type="button" className="nes-btn is-success buttonb">
              Sample Packs
            </button>
          </Link>
          <Link to="/templets">
            <button type="button" className="nes-btn is-success buttonb">
              Templets
            </button>
          </Link>
        </Header>

        <Switch>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/">
            <h1 className="text">Trippyy Samples</h1>
          </Route>
          <Route exact path="/templets">
            <Templets />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
