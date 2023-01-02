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
import star from "../imgs/star-alone.png";
// import { firebase } from "../lib/firebase";
// import firestore from "firebase";
const Background = styled.div`
  font-family: marvin, sans-serif;
  background-color: white;
  font-weight: 400;
  font-style: normal;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  position: relative;
  top: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightSection = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
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
      <LeftSection>
        <Link to="/">
          <img
            src={star}
            alt="star"
            width={60}
            style={{ position: "relative", top: "-10px" }}
          />
        </Link>
        {user ? <h4>Hello! {user.displayName}</h4> : <h4>Welcome</h4>}
      </LeftSection>

      {user ? (
        <RightSection>
          <Link onClick={() => firebase.auth().signOut()}>Logout</Link>
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
        </RightSection>
      ) : (
        <RightSection>
          <Link to="/login">Login</Link>
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
        </RightSection>
      )}
    </Background>
  );
};

export default Header;
