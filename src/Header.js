import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import Basket from "./components/Basket";
import { useAuth } from "./contexts/AuthContext";
import { useBasket } from "./contexts/BasketContext";
import templets from "./XD/Templets.png";
import samplepacks from "./XD/Samples.png";
import about from "./XD/About.png";
import trippysamples from "./XD/TrippySamples.png";

const HeaderMenu = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 -150px;
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
const LeftHeaderMenu = styled.div`
  text-align: left;
  margin-top: 10px;
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
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const { cartItems } = useBasket();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <Background>
      {/* <LeftHeaderMenu>
        <Link to="/about">
          <img src={trippysamples}></img>
        </Link>
      </LeftHeaderMenu> */}
      <HeaderMenu>
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
      {currentUser ? (
        <h3 className="rightSection login" onClick={handleLogout}>
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
