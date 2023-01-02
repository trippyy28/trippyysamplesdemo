import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useBasket } from "../contexts/BasketContext";
import styles from "../css/basket.module.css";
import UserContext from "../contexts/user";

const Container = styled.div`
  box-shadow: 3px 3px 3px 3px rgb(120, 120, 130);
  background-color: whitesmoke;
  border-radius: 25px;
  font-family: monospace;
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  background-color: white;
  text-align: center;
`;
const Product = styled.div`
  border-radius: 25px;
  box-shadow: 3px 3px 3px 3px rgb(120, 120, 130);
  background-color: whitesmoke;
  margin: 8px;
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
      <h4>Your Total Price is :</h4>
      <h2>{totalPrice}$</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <Product>
            <img src={item.img} width={100} height={100} alt={item.id} />
            <div className={styles.price}>{item.price}$</div>
            <button className={styles.btn} onClick={() => onRemove(item)}>
              Remove
            </button>
          </Product>
        </div>
      ))}

      <Link to="/checkout">
        <button className={styles.btn}>Check Out</button>
      </Link>
    </Container>
  );
};

export default Basket;
