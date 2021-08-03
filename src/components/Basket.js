import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useBasket } from "../contexts/BasketContext";
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
const Basket = () => {
  const { cartItems } = useBasket();
  const { onRemove } = useBasket();
  const { totalPrice } = useBasket();
  // let { localStorageArray } = useBasket();
  // const localStorageArray = localStorage.getItem("products");

  return (
    <Container>
      <h2>Cart Items</h2>
      <h3>Your Total Price is :{totalPrice}$</h3>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <Product>
            <div>{item.title}</div>
            <img src={item.img} width={100} height={100} alt={item.id} />
            <div>{item.price}$</div>
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
