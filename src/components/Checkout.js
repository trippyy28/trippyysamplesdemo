import React from "react";
import { useBasket } from "../contexts/BasketContext";
import styled from "styled-components";
import StripeCheckoutButton from "./stripe-button/stripe";
import Paypal from "./paypal/Paypal";
const Container = styled.div`
  /* border: 2px solid black; */
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  background-color: white;
  text-align: center;
`;
const Product = styled.div`
  border: 1px solid;
  margin: 0 auto 10px auto;
  width: 50%;
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
      {/* <StripeCheckoutButton price={totalPrice} /> */}
      <div className="paypal">
        <Paypal />
      </div>
    </Container>
  );
};

export default Checkout;
