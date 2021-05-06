import React from "react";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
const Container = styled.div`
  border: 2px solid black;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  background-color: white;
  text-align: center;
`;
const Product = styled.div`
  border: 1px solid ${({ isExpensive }) => (isExpensive ? "blue" : "black")};
  margin: 4px;
  margin-left: 2px;
  margin-right: 2px;
  text-align: center;
`;
const Basket = ({ cartItems, onAdd, product, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;
  return (
    <Container>
      <h2>Cart Items</h2>
      <h3>Your Total Price is :{totalPrice}$</h3>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <Product>
            <div>{item.title}</div>
            <img src={item.img} width={100} height={100} />
            <div>{item.price}$</div>
            <div>{item.qty}</div>
            <button onClick={() => onRemove(item)}>Remove</button>
          </Product>
        </div>
      ))}

      <Link to="/checkout">
        <button type="button" className="nes-btn is-primary">
          Check Out
        </button>
      </Link>
    </Container>
  );
};

export default Basket;
