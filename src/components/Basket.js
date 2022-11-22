import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useBasket } from "../contexts/BasketContext";
import UserContext from "../contexts/user";

const Container = styled.div`
  border: 2px solid black;
  border-radius: 25px;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  background-color: white;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
`;
const Product = styled.div`
  border: 1px solid ${({ isExpensive }) => (isExpensive ? "blue" : "black")};
  border-radius: 25px;
  margin: 4px;
  margin-left: 2px;
  margin-right: 2px;
  text-align: center;
`;
const Basket = () => {
  const { cartItems } = useBasket();
  const { onRemove } = useBasket();
  const { totalPrice } = useBasket();
  const { user } = useContext(UserContext);
  // let { localStorageArray } = useBasket();
  // const localStorageArray = localStorage.getItem("products");

  return (
    <Container>
      <h3>Cart Items</h3>
      <h4>Your Total Price is :{totalPrice}$</h4>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <Product>
            <div>{item.title}</div>
            <img src={item.img} width={100} height={100} alt={item.id} />
            <div>{item.price}$</div>
            <button className="button-remove" onClick={() => onRemove(item)}>
              Remove
            </button>
          </Product>
        </div>
      ))}

      <Link to="/checkout">
        <button
          type="button"
          className="nes-btn is-primary"
          style={{ color: "black" }}
        >
          Check Out
        </button>
      </Link>
    </Container>
  );
};

export default Basket;
