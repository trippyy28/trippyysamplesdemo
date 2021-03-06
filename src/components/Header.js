import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import Basket from "./Basket";
import FirebaseContext from "../contexts/firebase";
import UserContext from "../contexts/user";
import { useBasket } from "../contexts/BasketContext";
import templets from "../imgs/Templets.png";
import samplepacks from "../imgs/Samples.png";
import about from "../imgs/About.png";
import trippysamples from "../imgs/images 2.jpg";

const HeaderMenu = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 10px;
  }
`;

const RightHeaderMenu = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 20px;
  background-color: black;
`;


const Background = styled.div`
  font-family: "Comic Sans MS";
  font-size: 0.875em;
  font-weight: 400;
  background-color: black;
  text-align: center;
  display: flex;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Header = () => {
  const [error, setError] = useState("");
  const { cartItems } = useBasket();
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  return (
    <Background>
      <HeaderMenu>
        <img src={trippysamples} width={80} className="myLogo"></img>
        <Link to="/about">
          <img src={about}></img>
        </Link>
        <Link to="/">
          <img src={samplepacks} className="samplePacksLogo"></img>
        </Link>
        <Link to="/templets">
          <img src={templets} className="templets-logo"></img>
        </Link>
      </HeaderMenu>
      <RightHeaderMenu>
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
            <h3 className="rightSection" {...triggerHandler}>
              Basket ({cartItems.length})
            </h3>
          )}
        </OverlayTrigger>
      </RightHeaderMenu>

      {error && <Alert variant="danger">{error}</Alert>}
      {user ? (
        <h3
          className="rightSection login"
          onClick={() => firebase.auth().signOut()}
        >
          Logout
        </h3>
      ) : (
        <Link to="/login">
          <h3 className="rightSection login">Login</h3>
        </Link>
      )}
    </Background>
  );
};

export default Header;
