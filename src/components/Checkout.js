import React from "react";
import { useBasket } from "../contexts/BasketContext";
import styled from "styled-components";
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
const Checkout = (props) => {
  const { cartItems } = useBasket();
  const { onRemove } = useBasket();
  const { totalPrice } = useBasket();
  return (
    <Container>
      <h2>Your Price is:{totalPrice}$</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <Product>
            <div>{item.title}</div>
            <img src={item.img} width={100} height={100} alt={item.id} />
            <div>{item.price}$</div>
            <div>{item.qty}</div>
            <button onClick={() => onRemove(item)}>Remove</button>
          </Product>
        </div>
      ))}
      <button>Pay</button>
    </Container>
  );
};

export default Checkout;
