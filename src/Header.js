import React, { useState } from "react";
import { Switch, Link } from "react-router-dom";
import styled from "styled-components";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { ReactComponent as CaretIcon } from "./icons/shopping-cart-outline-svgrepo-com.svg";
import Basket from './Basket'

const HeaderMenu = styled.div`
  flex: 1;
`

const RightHeaderMenu = styled.div`
  flex: 1;
  text-align: right;
`

const Background = styled.div`
font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 0.875em;
font-weight: 400;
background-color: #222222;
color: #bbbbbb;
text-align: center;
display: flex;
`;

const Header = ({ cartItems, products, onAdd, onRemove }) => {
  return (
    <Background>
    <HeaderMenu />
      <HeaderMenu>
        <Link to="/">
          <button type="button" className="nes-btn is-primary buttona">
            Home
          </button>
        </Link>
        <Link to="/gallery">
          <button type="button" className="nes-btn is-primary buttonb">
            Sample Packs
          </button>
        </Link>
        <Link to="/templets">
          <button type="button" className="nes-btn is-primary buttonb">
            Templets
          </button>
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
            <button
              type="button"
              {...triggerHandler}
              className="nes-btn is-primary buttonb"
            >
              Basket ({cartItems.length})
            </button>
          )}
        </OverlayTrigger>
      </RightHeaderMenu>
    </Background>
  );
};

export default Header;
