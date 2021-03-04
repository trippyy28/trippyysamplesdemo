import "./App.css";
import Gallery from "./Gallery";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/gallery">Gallery</Link>
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <div>Home!</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
