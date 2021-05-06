import React, { useState } from "react";
import { Switch, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import { ReactComponent as CaretIcon } from "./icons/shopping-cart-outline-svgrepo-com.svg";
import Basket from "./components/Basket";
import { useAuth } from "./contexts/AuthContext";

const HeaderMenu = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const RightHeaderMenu = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 20px;
`;

const Background = styled.div`
  font-family: "Comic Sans MS";
  font-size: 0.875em;
  font-weight: 400;
  background-color: #222222;
  color: #bbbbbb;
  text-align: center;
  display: flex;
`;

const Header = ({ cartItems, products, onAdd, onRemove }) => {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const { logout } = useAuth();
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
      <HeaderMenu />
      <HeaderMenu>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/gallery">
          <h2>Sample Packs</h2>
        </Link>
        <Link to="/templets">
          <h2>Templets</h2>
        </Link>
      </HeaderMenu>
      <RightHeaderMenu>
        <OverlayTrigger
          placement="bottom"
          trigger={["click"]}
          overlay={
            <Tooltip id="button-tooltip-2">
              <Basket
                cartItems={cartItems}
                products={products}
                onAdd={onAdd}
                onRemove={onRemove}
              />
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
