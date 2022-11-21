import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import Basket from "./Basket";
import FirebaseContext from "../contexts/firebase";
import UserContext from "../contexts/user";
import { useBasket } from "../contexts/BasketContext";
import { FiShoppingCart } from "react-icons/fi";
import { doc, getDoc } from "firebase/firestore";
// import { firebase } from "../lib/firebase";
// import firestore from "firebase";
const Background = styled.div`
  font-family: "Comic Sans MS";
  background-color: white;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Header = () => {
  const [error, setError] = useState("");
  const [click, setClick] = useState(true);
  const [userProduct, setUserProduct] = useState([]);
  const { cartItems } = useBasket();
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <Background>
      {error && <Alert variant="danger">{error}</Alert>}
      {user ? (
        <div>
          <Link onClick={() => firebase.auth().signOut()}>Logout</Link>
          <h3>Hello! {user.displayName}</h3>
        </div>
      ) : (
        <Link to="/login">
          <h2>Login</h2>
        </Link>
      )}
      <OverlayTrigger
        placement="bottom"
        trigger={["click"]}
        overlay={
          <Tooltip id="button-tooltip-2">
            <Basket />
          </Tooltip>
        }
      >
        {({ ...triggerHandler }) => (
          <h2 {...triggerHandler} className="basket">
            <FiShoppingCart> </FiShoppingCart>
            <span className="size-of-carts">({cartItems.length})</span>
          </h2>
        )}
      </OverlayTrigger>
    </Background>
  );
};

export default Header;
